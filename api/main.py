from fastapi import FastAPI, Query
from fastapi.responses import JSONResponse, FileResponse
from fastapi.staticfiles import StaticFiles
from typing import Optional
from fastapi.middleware.cors import CORSMiddleware

from .binance_client import BinanceDataClient

app = FastAPI()

# Allow all CORS origins
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app = FastAPI()

# Mount static directory
app.mount("/static", StaticFiles(directory="frontend"), name="static")


@app.get("/")
def serve_frontend():
    return FileResponse("frontend/index.html")

@app.get("/klines")
def klines(
    symbol: str = Query(...),
    interval: str = Query(...),
    start_str: str = Query(...),
    end_str: Optional[str] = Query(None)
):
    try:
        df = BinanceDataClient().get_historical_klines(
            symbol=symbol,
            interval=interval,
            start_str=start_str,
            end_str=end_str
        )
        
        print("Fetched DataFrame:")
        print(df.head())  # Show only first few rows in the server log

        # Convert DataFrame to list of dicts for JSON response
        result = df.to_dict(orient="records")

        return JSONResponse(content={"data": result})

    
    except Exception as e:
        print("Error fetching klines:", e)
        return JSONResponse(
            status_code=500,
            content={"error": "Failed to fetch data", "details": str(e)}
        )
