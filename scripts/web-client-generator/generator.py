#!/usr/bin/env python3
import subprocess
from pathlib import Path

# Paths
OPENAPI_PATH = (
    Path(__file__).resolve().parent.parent.parent / "server" / "app" / "openapi.json"
)
OUTPUT_DIR = Path(__file__).resolve().parent.parent.parent / "display" / "lib" / "api"

# Ensure the output directory exists
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

# Run openapi-typescript
subprocess.run(
    [
        "npx",
        "openapi-typescript",
        str(OPENAPI_PATH),
        "--output",
        str(OUTPUT_DIR / "index.d.ts"),
    ],
    check=True,
)

print(f"TypeScript types generated at {OUTPUT_DIR}")
