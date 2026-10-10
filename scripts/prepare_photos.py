#!/usr/bin/env python3
"""Prepare photos for the gallery: strip metadata, resize, make thumbnails.

Usage:
    pip install pillow
    python3 scripts/prepare_photos.py path/to/originals

Writes to assets/img/photos/ (max 1600px on the long edge) and
assets/img/photos/thumbs/ (square 640px crops). All EXIF data, including
GPS location and camera serial numbers, is dropped. Then add an entry to
_data/photos.yml for each file.
"""
import re
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "assets" / "img" / "photos"
THUMBS = OUT / "thumbs"
EXTS = {".jpg", ".jpeg", ".png", ".webp", ".heic"}


def slug(name):
    return re.sub(r"[^a-z0-9]+", "-", name.lower()).strip("-") or "photo"


def main(src_dir):
    OUT.mkdir(parents=True, exist_ok=True)
    THUMBS.mkdir(parents=True, exist_ok=True)
    for path in sorted(Path(src_dir).iterdir()):
        if path.suffix.lower() not in EXTS:
            continue
        with Image.open(path) as im:
            im = ImageOps.exif_transpose(im).convert("RGB")
            clean = Image.frombytes("RGB", im.size, im.tobytes())
        name = slug(path.stem) + ".jpg"

        full = clean.copy()
        full.thumbnail((1600, 1600))
        full.save(OUT / name, "JPEG", quality=85, optimize=True, progressive=True)

        thumb = ImageOps.fit(clean, (640, 640))
        thumb.save(THUMBS / name, "JPEG", quality=80, optimize=True)
        print("wrote", name)


if __name__ == "__main__":
    if len(sys.argv) != 2:
        sys.exit(__doc__)
    main(sys.argv[1])
