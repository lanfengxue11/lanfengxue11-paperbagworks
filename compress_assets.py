import os
from PIL import Image

BASE_DIR = r"C:\Users\MSI\AccioWork\2026-09-04-11-01-23-046-1c20f82a\纸袋AI网站数据"

def optimize_img(file_path):
    orig_size = os.path.getsize(file_path)
    if orig_size < 150 * 1024:
        return
    try:
        im = Image.open(file_path)
        # Resize if width > 1200px (standard crisp retina display for web banners/cards)
        if im.width > 1200:
            ratio = 1200.0 / im.width
            new_size = (1200, int(im.height * ratio))
            im = im.resize(new_size, Image.Resampling.LANCZOS)
        
        # Save as optimized PNG with palette/quantization if possible, or high-efficiency WebP/PNG
        if file_path.endswith('.png'):
            im.save(file_path, 'PNG', optimize=True, compress_level=9)
        elif file_path.endswith('.jpg') or file_path.endswith('.jpeg'):
            im.save(file_path, 'JPEG', quality=85, optimize=True)
            
        new_size = os.path.getsize(file_path)
        print(f"Compressed {os.path.basename(file_path)}: {orig_size//1024}KB -> {new_size//1024}KB")
    except Exception as e:
        print(f"Error {file_path}: {e}")

def run():
    for sub in ["public/assets/images", "src/assets/images"]:
        d = os.path.join(BASE_DIR, sub.replace("/", os.sep))
        for root, _, files in os.walk(d):
            for f in files:
                if f.lower().endswith(('.png', '.jpg', '.jpeg')):
                    optimize_img(os.path.join(root, f))

if __name__ == "__main__":
    run()
