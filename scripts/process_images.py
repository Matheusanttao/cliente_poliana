from pathlib import Path

from PIL import Image

dst = Path(__file__).resolve().parents[1] / "src" / "assets" / "images"

hero = Image.open(dst / "raw-hero.jpg").convert("RGB")
# Face was sideways in the original file; ROTATE_90 places forehead at top.
hero_up = hero.transpose(Image.Transpose.ROTATE_90)
hero_up.save(dst / "hero-poliana.jpg", "JPEG", quality=92, optimize=True)

overlay = Image.open(dst / "raw-galeria-02.jpg").convert("RGB")
w, h = overlay.size
side = min(w, h)
left = (w - side) // 2
top = max(0, (h - side) // 2 - side // 10)
overlay.crop((left, top, left + side, top + side)).save(
    dst / "hero-overlay-olho.jpg", "JPEG", quality=90, optimize=True
)

hw, hh = hero_up.size
hero_up.crop((0, int(hh * 0.05), int(hw * 0.42), int(hh * 0.95))).save(
    dst / "escovinhas-rosas.jpg", "JPEG", quality=90, optimize=True
)

g1 = Image.open(dst / "raw-galeria-01.jpg").convert("RGB")
w, h = g1.size
g1.crop((0, int(h * 0.06), w, int(h * 0.96))).save(
    dst / "galeria-01.jpg", "JPEG", quality=90, optimize=True
)

Image.open(dst / "raw-galeria-02.jpg").convert("RGB").save(
    dst / "galeria-02.jpg", "JPEG", quality=90, optimize=True
)

g3 = Image.open(dst / "raw-galeria-03.jpg").convert("RGB")
w, h = g3.size
g3.crop((0, int(h * 0.07), w, int(h * 0.88))).save(
    dst / "galeria-03.jpg", "JPEG", quality=90, optimize=True
)

print("Images processed in", dst)
