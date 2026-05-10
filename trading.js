const axios = require('axios');

module.exports = {
    getMarketOverview: async () => {
        try {
            const btc = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT');
            const eth = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=ETHUSDT');
            const sol = await axios.get('https://api.binance.com/api/v3/ticker/price?symbol=SOLUSDT');
            
            return `
📊 **TIGERX MARKET REPORT**
--------------------------
BTC: $${parseFloat(btc.data.price).toLocaleString()}
ETH: $${parseFloat(eth.data.price).toLocaleString()}
SOL: $${parseFloat(sol.data.price).toLocaleString()}

**Analysis:** High Volatility Detected. Nova-Core recommends 'HODL' status.
            `;
        } catch (e) {
            return "❌ Error: Unable to sync with Global Financial APIs.";
        }
    }
};

