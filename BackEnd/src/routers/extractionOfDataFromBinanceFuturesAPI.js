const express = require("express");

const { getFullRangeOfPriceChart } = require("../controllers/extractionOfDataFromBinanceFuturesAPI")
const router = express.Router();

router.get('/tradeData', getFullRangeOfPriceChart)

module.exports=router;
