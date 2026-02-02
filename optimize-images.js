const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const SOURCE_DIR = '../mr.tie final version/images';
const OUTPUT_DIR = './public/images';

// Image optimization settings
const QUALITY = 85;
const MAX_WIDTH = 1200;
const MAX_HEIGHT = 900;

// Product image mapping with better names
const imageMapping = {
  // Product 1: Home Table
  'table2.jpeg': 'home-table-front.jpg',
  'received_1293390441784496.jpeg': 'home-table-angled.jpg',
  '1729541438044.jpg': 'home-table-materials.jpg',
  '1729541449851.jpg': 'home-table-folding.jpg',
  '___creation_1545701639386594.jpeg': 'home-table-inuse.jpg',
  '1750830526344.jpg': 'home-table-folded.jpg',

  // Product 2: Table with Shelves
  '1748109946146.jpg': 'shelves-table-front.jpg',
  'received_942391677768380.jpeg': 'shelves-table-detail.jpg',
  'orca-image--1256197463.jpeg': 'shelves-table-angled.jpg',
  'orca-image--1885493409.jpeg': 'shelves-table-storage.jpg',

  // Product 3: Table Plus
  'IMG20250530215110.jpg': 'plus-table-front.jpg',
  'IMG20250605080254.jpg': 'plus-table-frame.jpg',
  'IMG20250605080256.jpg': 'plus-table-edge.jpg',
  'IMG20250605080258.jpg': 'plus-table-wheels.jpg',

  // Product 4: Large Table 120×200
  'IMG20250605081053.jpg': 'large-table-front.jpg',
  'IMG20250605081911.jpg': 'large-table-workspace.jpg',
  'IMG20250605082953.jpg': 'large-table-folded.jpg',
  '1a527920-ef9a-11f0-9a84-597cc24b4054.png': 'large-table-comparison.jpg'
};

async function optimizeImage(inputPath, outputName) {
  const outputPath = path.join(OUTPUT_DIR, outputName);
  const webpPath = path.join(OUTPUT_DIR, outputName.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`Processing: ${path.basename(inputPath)}`);
    console.log(`  Original: ${(metadata.size / 1024).toFixed(0)} KB, ${metadata.width}x${metadata.height}`);

    // Optimize JPEG
    await image
      .resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .jpeg({ quality: QUALITY, progressive: true })
      .toFile(outputPath);

    const jpgStats = await fs.stat(outputPath);
    console.log(`  JPEG: ${(jpgStats.size / 1024).toFixed(0)} KB`);

    // Create WebP version
    await sharp(inputPath)
      .resize(MAX_WIDTH, MAX_HEIGHT, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: QUALITY })
      .toFile(webpPath);

    const webpStats = await fs.stat(webpPath);
    console.log(`  WebP: ${(webpStats.size / 1024).toFixed(0)} KB`);
    console.log(`  Saved as: ${outputName}`);
    console.log('');

    return {
      original: metadata.size,
      jpeg: jpgStats.size,
      webp: webpStats.size,
      reduction: ((1 - jpgStats.size / metadata.size) * 100).toFixed(1)
    };
  } catch (error) {
    console.error(`Error processing ${inputPath}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('🖼️  Starting image optimization...\n');

  // Create output directory
  await fs.mkdir(OUTPUT_DIR, { recursive: true });

  const stats = {
    totalOriginal: 0,
    totalOptimized: 0,
    totalWebP: 0,
    count: 0
  };

  // Process all images
  for (const [oldName, newName] of Object.entries(imageMapping)) {
    const inputPath = path.join(SOURCE_DIR, oldName);

    try {
      await fs.access(inputPath);
      const result = await optimizeImage(inputPath, newName);

      if (result) {
        stats.totalOriginal += result.original;
        stats.totalOptimized += result.jpeg;
        stats.totalWebP += result.webp;
        stats.count++;
      }
    } catch (error) {
      console.log(`⚠️  File not found: ${oldName}\n`);
    }
  }

  console.log('✅ Optimization Complete!\n');
  console.log('📊 Summary:');
  console.log(`  Images processed: ${stats.count}`);
  console.log(`  Total original size: ${(stats.totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Total JPEG size: ${(stats.totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Total WebP size: ${(stats.totalWebP / 1024 / 1024).toFixed(2)} MB`);
  console.log(`  Space saved: ${(stats.totalOriginal / 1024 / 1024 - stats.totalOptimized / 1024 / 1024).toFixed(2)} MB (${((1 - stats.totalOptimized / stats.totalOriginal) * 100).toFixed(1)}%)`);
}

main().catch(console.error);
