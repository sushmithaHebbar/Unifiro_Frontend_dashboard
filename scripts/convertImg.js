import sharp from "sharp";
import fs from "fs";
import path from "path";

const inputDir = path.join(process.cwd(), "compress");
const outputDir = path.join(process.cwd(), "compressed");

fs.mkdirSync(outputDir, { recursive: true });

fs.readdirSync(inputDir).forEach(async (file) => {
  const ext = path.extname(file).toLowerCase();
  if ([".webp", ".jpg", ".jpeg", ".png"].includes(ext)) {
    const inputPath = path.join(inputDir, file);
    const outputPath = path.join(outputDir, file.replace(ext, ".webp"));

    try {
      await sharp(inputPath)
        .resize({ width: 720, height: 560 })
        .webp({ quality: 75 })
        .toFile(outputPath);

      console.log(`✅ Optimized: ${file} → ${path.basename(outputPath)}`);
    } catch (err) {
      console.error(`❌ Error optimizing ${file}:`, err);
    }
  }
});