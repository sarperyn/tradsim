# tradsim

## Overview

`tradsim` is a lightweight backtesting and trading visualization tool designed for cryptocurrency trading. It provides a user-friendly interface to fetch and visualize candlestick data (klines) from Binance, along with support for EMA (Exponential Moving Average) overlays. The project aims to serve as a plug-and-play backtesting platform for various trading models and strategies.

## Features

- Fetch historical candlestick data from Binance.
- Visualize candlestick charts with EMA overlays (20, 50, 100 periods).
- Interactive UI for selecting symbols, intervals, and date ranges.
- Modular architecture for easy extension and customization.

## Project Structure

```
tradsim/
├── api/                          # Backend API for fetching Binance data
│   ├── .env                      # Environment variables for API keys
│   ├── binance_client.py         # Binance API client wrapper
│   └── main.py                   # FastAPI server implementation
├── frontend/                     # Frontend for visualization and interaction
│   ├── charts/                   # Chart rendering modules
│   │   ├── candleCharts.js       # Candlestick chart implementation
│   │   └── volumeCharts.js       # Volume chart implementation
│   ├── components/               # Reusable UI components
│   │   ├── emaToggles.js         # EMA indicator toggles
│   │   └── header.js             # App header with navigation
│   ├── services/                 # Data and API services
│   │   └── binanceApi.js         # Frontend service for API calls
│   ├── views/                    # Page views
│   │   ├── about.js              # About page
│   │   ├── backtesting.js        # Backtesting page
│   │   └── viewer.js             # Main viewer page
│   ├── index.html                # Main HTML entry point
│   ├── script.js                 # Main JavaScript with router implementation
│   └── style.css                 # Global styles
└── README.md                     # Project documentation
```

## Technologies

### Frontend
- Vanilla JavaScript (no frameworks)
- Lightweight Charts library for financial charting
- Custom CSS for styling
- Custom router implementation

### Backend
- FastAPI (Python web framework)
- Python 3.8+
- Pandas for data manipulation
- Binance API client

## Prerequisites

- Python 3.8+ (I personally use 3.12, for backend API)
- Binance API credentials (API Key and Secret)

## Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/sarperyn/tradsim.git
cd tradsim
```

### 2. Backend Setup

1. Create a Python virtual environment:

   ```bash
   # Option 1: Using venv (built-in)
   python3.12 -m venv venv
   source venv/bin/activate  # On macOS/Linux
   
   # Option 2: Using conda
   conda create -n tradsim python=3.12
   conda activate tradsim
   ```

2. Install Python dependencies:

   ```bash
   pip install -r requirements.txt
   ```

3. Create a `.env` file in the `api/` directory and add your Binance API credentials:

   ```
   API_KEY = "your_api_key"
   API_SECRET = "your_api_secret"
   ```

4. Run the FastAPI server:

   ```bash
   uvicorn api.main:app --reload
   ```

   The API will be available at `http://127.0.0.1:8000`.

### 3. Frontend Setup

No additional setup is required for the frontend as it uses vanilla JavaScript without build steps. The FastAPI server serves the static frontend files.

Open `http://127.0.0.1:8000` in your browser to access the application.

## Usage

1. Navigate to the "Viewer" page to fetch and visualize candlestick data.
2. Use the symbol, interval, and date range inputs to customize your query.
3. Toggle EMA overlays (20, 50, 100) using the checkboxes.
4. Visit the "About" page to learn more about the project.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve the project.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.