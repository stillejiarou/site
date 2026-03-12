from PIL import Image
import os
import sys

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

input_folder  = os.path.join(BASE_DIR, 'input_images')
output_folder = os.path.join(BASE_DIR, 'output_images')

if not os.path.isdir(input_folder):
    print(f"Input folder not found: {input_folder}")
    sys.exit(1)
os.makedirs(output_folder, exist_ok=True)

valid_exts = ('png', 'webp', 'jpeg', 'jpg')
files = [f for f in os.listdir(input_folder)
         if f.lower().endswith(valid_exts)]

if not files:
    print("No images found in", input_folder)
    sys.exit(1)

print(f"Found {len(files)} image(s):")
for f in files: print("  -", f)

# conversion loop
for fname in files:
    src_path = os.path.join(input_folder, fname)

    original_size = os.path.getsize(src_path) / 1024

    img = Image.open(src_path).convert('RGB')

    max_width = 800   # width ex 300/800/1200 etc
    if img.width > max_width:
        ratio = max_width / img.width
        new_height = int(img.height * ratio)
        img = img.resize((max_width, new_height), Image.LANCZOS)

    img.info.pop("exif", None) # remove GPS/Time/meta data

    base, _ = os.path.splitext(fname)
    dst_path = os.path.join(output_folder, f"{base}.jpg")
    img.save(
        dst_path,
        "JPEG",
        quality=70,          # more/less compression (ex 30 - 85)
        optimize=True,       # extra compression
        progressive=True     # smaller + loads in layers
    )

    new_size = os.path.getsize(dst_path) / 1024

    print(f"- {fname}")
    print(f"   - Original: {original_size:.1f} KB")
    print(f"   - Compressed: {new_size:.1f} KB")
    print(f"   - Reduction: {original_size - new_size:.1f} KB ({(1 - new_size/original_size)*100:.1f}% smaller)\n")

print(f"\nConverted and optimized {len(files)} files!")
