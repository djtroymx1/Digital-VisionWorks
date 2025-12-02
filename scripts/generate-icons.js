/**
 * PWA Icon Generator
 * Generates PNG icons in various sizes from the SVG source
 */

import sharp from 'sharp';
import { readFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const inputPath = join(__dirname, '../public/icons/icon.svg');
const outputDir = join(__dirname, '../public/icons');

async function generateIcons() {
  console.log('Generating PWA icons...\n');

  // Ensure output directory exists
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true });
  }

  const svgBuffer = readFileSync(inputPath);

  for (const size of sizes) {
    const outputPath = join(outputDir, `icon-${size}x${size}.png`);

    await sharp(svgBuffer)
      .resize(size, size)
      .png()
      .toFile(outputPath);

    console.log(`  Created: icon-${size}x${size}.png`);
  }

  // Also create apple-touch-icon (180x180)
  await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toFile(join(outputDir, 'apple-touch-icon.png'));
  console.log('  Created: apple-touch-icon.png');

  // Create favicon.ico (multi-size ICO format fallback as PNG)
  // Note: For true .ico format, use a dedicated tool, but modern browsers accept PNG
  await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toFile(join(__dirname, '../public/favicon.png'));
  console.log('  Created: favicon.png (32x32)');

  // Generate OG image from SVG
  const ogSvgPath = join(__dirname, '../public/images/og-image.svg');
  if (existsSync(ogSvgPath)) {
    const ogBuffer = readFileSync(ogSvgPath);
    await sharp(ogBuffer)
      .resize(1200, 630)
      .png()
      .toFile(join(__dirname, '../public/images/og-image.png'));
    console.log('  Created: og-image.png (1200x630)');
  }

  console.log('\nAll icons generated successfully!');
}

generateIcons().catch(console.error);
