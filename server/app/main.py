from typing import Union

from fastapi import FastAPI

import json
from pathlib import Path

app = FastAPI()


SCHEMA_FILE = Path(__file__).parent / "openapi.json"


@app.on_event("startup")
async def export_openapi():
    """
    Exports the OpenAPI schema to a JSON file on start up.
    """

    if SCHEMA_FILE.exists():
        SCHEMA_FILE.unlink()

    schema = app.openapi()
    SCHEMA_FILE.write_text(json.dumps(schema, indent=2), encoding="utf-8")


@app.get("/hello-world")
def read_root():
    return {"Hello": "World"}