'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { algeriaStates } from '@/data/states';
import { calculateTotal } from '@/lib/utils';
import type { Product, Color } from '@/types';

const orderSchema = z.object({
  name: z.string().min(3, 'الاسم يجب أن يكون 3 أحرف على الأقل'),
  phone: z.string().regex(/^(0|\+213)[0-9]{9}$/, 'رقم هاتف جزائري غير صحيح'),
  state: z.string().min(1, 'يرجى اختيار الولاية'),
  commune: z.string().min(1, 'يرجى اختيار البلدية'),
  shipments: z.enum(['home', 'bureau'], { message: 'يرجى اختيار طريقة التوصيل' }),
});

type OrderFormData = z.infer<typeof orderSchema>;

interface OrderFormProps {
  product: Product;
  selectedColor: Color;
  onSuccess: () => void;
}

export function OrderForm({ product, selectedColor, onSuccess }: OrderFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [selectedState, setSelectedState] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<OrderFormData>({
    resolver: zodResolver(orderSchema),
  });

  const shipments = watch('shipments');
  const totalPrice = shipments
    ? calculateTotal(product.price, shipments, product.isLargeTable)
    : product.price;

  const onSubmit = async (data: OrderFormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          productId: product.id,
          productName: product.nameAr,
          color: selectedColor.nameAr,
          totalPrice,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) throw new Error('فشل إرسال الطلب');

      setSubmitStatus('success');
      setTimeout(() => {
        onSuccess();
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const communes = selectedState
    ? algeriaStates.find((s) => s.code === selectedState)?.communes || []
    : [];

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="p-4 bg-blue-50 rounded-lg mb-4">
        <p className="text-sm text-gray-700">
          المنتج: <span className="font-semibold">{product.nameAr}</span>
        </p>
        <p className="text-sm text-gray-700">
          اللون: <span className="font-semibold">{selectedColor.nameAr}</span>
        </p>
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">الاسم الكامل *</label>
        <input
          {...register('name')}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          placeholder="أدخل اسمك الكامل"
        />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">رقم الهاتف *</label>
        <input
          {...register('phone')}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          placeholder="0123456789"
        />
        {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">الولاية *</label>
        <select
          {...register('state')}
          onChange={(e) => setSelectedState(e.target.value)}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
        >
          <option value="">اختر الولاية</option>
          {algeriaStates.map((state) => (
            <option key={state.code} value={state.code}>
              {state.nameAr}
            </option>
          ))}
        </select>
        {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">البلدية *</label>
        <select
          {...register('commune')}
          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none"
          disabled={!selectedState}
        >
          <option value="">اختر البلدية</option>
          {communes.map((commune) => (
            <option key={commune} value={commune}>
              {commune}
            </option>
          ))}
        </select>
        {errors.commune && <p className="text-red-500 text-sm mt-1">{errors.commune.message}</p>}
      </div>

      <div>
        <label className="block text-sm font-semibold mb-2">طريقة التوصيل *</label>
        <div className="grid grid-cols-2 gap-3">
          <label className="flex items-center p-3 border-2 rounded-lg cursor-pointer hover:border-primary transition-colors">
            <input {...register('shipments')} type="radio" value="home" className="ml-2" />
            <div>
              <div className="font-semibold">توصيل للمنزل</div>
              <div className="text-sm text-gray-600">
                {product.isLargeTable ? '3,000' : '2,000'} دج
              </div>
            </div>
          </label>
          <label className="flex items-center p-3 border-2 rounded-lg cursor-pointer hover:border-primary transition-colors">
            <input {...register('shipments')} type="radio" value="bureau" className="ml-2" />
            <div>
              <div className="font-semibold">استلام من المكتب</div>
              <div className="text-sm text-gray-600">
                {product.isLargeTable ? '2,500' : '1,800'} دج
              </div>
            </div>
          </label>
        </div>
        {errors.shipments && <p className="text-red-500 text-sm mt-1">{errors.shipments.message}</p>}
      </div>

      <div className="p-4 bg-gray-50 rounded-lg">
        <div className="flex justify-between items-center">
          <span className="font-semibold">المجموع:</span>
          <span className="text-2xl font-tajawal font-bold text-primary">
            {totalPrice.toLocaleString('ar-DZ')} دج
          </span>
        </div>
      </div>

      <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
        {isSubmitting ? 'جارٍ الإرسال...' : 'تأكيد الطلب'}
      </Button>

      {submitStatus === 'success' && (
        <p className="text-green-600 text-center font-semibold">تم إرسال طلبك بنجاح!</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-600 text-center">حدث خطأ. يرجى المحاولة مرة أخرى.</p>
      )}
    </form>
  );
}
