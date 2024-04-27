// Reference:
// https://testnet.binancefuture.com/en/futures/BTCUSDT
// https://binance-docs.github.io/apidocs/futures/en/#general-info
// https://docs.ccxt.com/#/examples/js/
// https://data.binance.vision/?prefix=data/futures/um/daily/klines/BTCUSDT/5m/
"use strict";

const ccxt = require("ccxt");
const ApplicantRecordModel = require("../models/ApplicantRecordModel");


async function seedApplicant(traderData) {
    try {        
        for (const cycleNumber in traderData) {

            const IsExist = await ApplicantRecordModel.findById(traderData[cycleNumber]._id)

            if(!IsExist){
                await ApplicantRecordModel.create([
                    {
                        _id: traderData[cycleNumber]._id,
                        pageNumber: traderData[cycleNumber].pageNumber,
                        applicantId: traderData[cycleNumber].applicantId,
                        executedQty: traderData[cycleNumber].executedQty,
                        tradeType: traderData[cycleNumber].tradeType,
                        priceIn: traderData[cycleNumber].princeIn,
                        timeIn: traderData[cycleNumber].timeIn,
                        priceOut: traderData[cycleNumber].princeOut,
                        timeOut: traderData[cycleNumber].timeOut,
                        managers: [],
                    },
                ]);
            }else{
                console.log("not creating new records")
            }
        }
    } catch (error) {
        console.error(error.message);
    }
}

async function applicantData() {

    let exchange = new ccxt.binance({
        apiKey: "33abb9bbd90c07de6420d2c782df3efb8fbc7ab65be3b3091e1ad0de3a1f1831",
        secret: "5c19a06e96ad5572c938b14f0b6776a6a19cde77d2e4f1baf10ba55bd1acc11c",

        // apiKey: `${process.env.BINANCE_PUBLIC_API_KEY}`,
        // secret: `${process.env.BINANCE_SECRET_PRIVATE_KEY}`,

        enableRateLimit: true,
        options: {
            defaultType: "future",
            urls: {
                api: "https://testnet.binancefuture.com",
                test: "https://testnet.binancefuture.com",        
            },
        },
    });
    exchange.set_sandbox_mode(true);

    let data = { priceIn: 0.0, timeIn: "", priceOut: 0.0, timeOut: "" };
    let traderData = [];
    let isStart = false;

    const exchangeData = await exchange.fetchClosedOrders("BTCUSDT");

    for (const datum in exchangeData) {
        const reduceOnly = exchangeData[datum].info.reduceOnly;

        if (!reduceOnly) {
            // opening trade
            if (isStart === false) {
                isStart = true;
            }
          
            data = {
                applicantId: "A1000", // need to change id as new applicant comes in
                priceIn: exchangeData[datum].info.avgPrice,
                executedQty: exchangeData[datum].info.executedQty,
                timeIn: exchangeData[datum].datetime,
                priceOut: 0.0,
                timeOut: "",
            };
        } else {
            // closing trade
            if (isStart === true) {
                data["priceOut"] = exchangeData[datum].info.avgPrice;
                data["timeOut"] = exchangeData[datum].datetime;
                traderData.push(data);
            }
        }
    }

    traderData = structuredClone(demoApplicantData())
    seedApplicant(traderData);

    return traderData;
} // end of function applicantData

function demoApplicantData() {
    const traderData = [
        {
            _id : "6613b65a4236aa7996bf1bc8",
            pageNumber: 1,            
            applicantId: "A1000",
            executedQty: 1.0,
            tradeType: "long",
            priceIn: "27485.60000",
            timeIn: "2023-10-16T11:10:29.551Z",
            priceOut: "35460.00000",
            timeOut: "2023-10-23T11:16:44.991Z",
        },
        {
            _id : "6613b65a4236aa7996bf1bc9",
            pageNumber: 2,            
            applicantId: "A1000",
            executedQty: 1.0,
            tradeType: "long",
            priceIn: "38290.00000",
            timeIn: "2023-12-01T11:16:52.687Z",
            priceOut: "43896.71990",
            timeOut: "2023-12-06T11:17:07.259Z",
        },
        {
            _id : "6613b65a4236aa7996bf1bd1",
            pageNumber: 3,            
            applicantId: "A1000",
            executedQty: 1.0,
            tradeType: "long",
            priceIn: "44384.14286",
            timeIn: "2024-01-08T14:47:27.131Z",
            priceOut: "45846.20000",
            timeOut: "2024-01-12T14:47:50.690Z",
        },
        {
            _id : "6613b65a4236aa7996bf1bd2",
            pageNumber: 4,            
            applicantId: "A1000",
            executedQty: 1.0,
            tradeType: "long",
            priceIn: "42677.00000",
            timeIn: "2024-02-04T11:16:52.687Z",
            priceOut: "49502.71990",
            timeOut: "2024-02-13T11:17:07.259Z",
        },
        {
            _id : "6613b65a4236aa7996bf1bd3",
            pageNumber: 5,            
            applicantId: "A1000",
            executedQty: 1.0,
            tradeType: "short",
            priceIn: "52183.14286",
            timeIn: "2024-02-15T14:47:27.131Z",
            priceOut: "52183.20000",
            timeOut: "2024-02-22T14:47:50.690Z",
        },
        {
            _id : "6613b65a4236aa7996bf1bd4",
            pageNumber: 6,            
            applicantId: "A1000",
            executedQty: 1.0,
            tradeType: "long",
            priceIn: "51452.00000",
            timeIn: "2024-02-24T03:08:00.448Z",
            priceOut: "61689.00000",
            timeOut: "2024-02-29T03:10:50.919Z",
        },
        {
            _id : "6613b65a4236aa7996bf1bd5",
            pageNumber: 7,            
            applicantId: "A1000",
            executedQty: 1.0,
            tradeType: "long",
            priceIn: "68270.00000",
            timeIn: "2024-03-04T04:52:27.270Z",
            priceOut: "61202.57497",
            timeOut: "2024-03-05T11:03:52.544Z",
        },
        {
            _id : "6613b65a4236aa7996bf1bd6",
            pageNumber: 8,            
            applicantId: "A1000",
            executedQty: 1.0,
            tradeType: "short",
            priceIn: "67783.10000",
            timeIn: "2024-03-08T11:04:59.819Z",
            priceOut: "72170.00000",
            timeOut: "2024-03-11T11:05:19.755Z",
        },
        {
            _id : "6613b65a4236aa7996bf1bd7",
            pageNumber: 9,           
            applicantId: "A1000",
            executedQty: 1.0,
            tradeType: "short",
            priceIn: "67295.60000",
            timeIn: "2024-03-19T11:09:53.263Z",
            priceOut: "64614.20000",
            timeOut: "2024-03-24T11:10:00.331Z",
        },
        {
            _id : "6613b65a4236aa7996bf1bd8",
            pageNumber: 10,            
            applicantId: "A1000",
            executedQty: 1.0,
            tradeType: "short",
            priceIn: "64614.60000",
            timeIn: "2024-03-24T11:10:11.055Z",
            priceOut: "69002.27788",
            timeOut: "2024-03-27T11:10:15.312Z",
        },
// A2000

        {
            _id : "6713b65a4236aa7996bf1bc8",
            pageNumber: 1,            
            applicantId: "A2000",
            executedQty: 1.0,
            tradeType: "long",
            priceIn: "27485.60000",
            timeIn: "2023-10-16T11:10:29.551Z",
            priceOut: "35460.00000",
            timeOut: "2023-10-23T11:16:44.991Z",
        },
        {
            _id : "6713b65a4236aa7996bf1bc9",
            pageNumber: 2,            
            applicantId: "A2000",
            executedQty: 1.0,
            tradeType: "long",
            priceIn: "38290.00000",
            timeIn: "2023-12-01T11:16:52.687Z",
            priceOut: "43896.71990",
            timeOut: "2023-12-06T11:17:07.259Z",
        },
        {
            _id : "6713b65a4236aa7996bf1bd1",
            pageNumber: 3,            
            applicantId: "A2000",
            executedQty: 1.0,
            tradeType: "long",
            priceIn: "44384.14286",
            timeIn: "2024-01-08T14:47:27.131Z",
            priceOut: "45846.20000",
            timeOut: "2024-01-12T14:47:50.690Z",
        },
        {
            _id : "6713b65a4236aa7996bf1bd2",
            pageNumber: 4,            
            applicantId: "A2000",
            executedQty: 1.0,
            tradeType: "long",
            priceIn: "42677.00000",
            timeIn: "2024-02-04T11:16:52.687Z",
            priceOut: "49502.71990",
            timeOut: "2024-02-13T11:17:07.259Z",
        },
        {
            _id : "6713b65a4236aa7996bf1bd3",
            pageNumber: 5,            
            applicantId: "A2000",
            executedQty: 1.0,
            tradeType: "short",
            priceIn: "52183.14286",
            timeIn: "2024-02-15T14:47:27.131Z",
            priceOut: "52183.20000",
            timeOut: "2024-02-22T14:47:50.690Z",
        },
        {
            _id : "6713b65a4236aa7996bf1bd4",
            pageNumber: 6,            
            applicantId: "A2000",
            executedQty: 1.0,
            tradeType: "long",
            priceIn: "51452.00000",
            timeIn: "2024-02-24T03:08:00.448Z",
            priceOut: "61689.00000",
            timeOut: "2024-02-29T03:10:50.919Z",
        },
        {
            _id : "6713b65a4236aa7996bf1bd5",
            pageNumber: 7,            
            applicantId: "A2000",
            executedQty: 1.0,
            tradeType: "long",
            priceIn: "68270.00000",
            timeIn: "2024-03-04T04:52:27.270Z",
            priceOut: "61202.57497",
            timeOut: "2024-03-05T11:03:52.544Z",
        },
        {
            _id : "6713b65a4236aa7996bf1bd6",
            pageNumber: 8,            
            applicantId: "A2000",
            executedQty: 1.0,
            tradeType: "short",
            priceIn: "67783.10000",
            timeIn: "2024-03-08T11:04:59.819Z",
            priceOut: "72170.00000",
            timeOut: "2024-03-11T11:05:19.755Z",
        },
        {
            _id : "6713b65a4236aa7996bf1bd7",
            pageNumber: 9,           
            applicantId: "A2000",
            executedQty: 1.0,
            tradeType: "short",
            priceIn: "67295.60000",
            timeIn: "2024-03-19T11:09:53.263Z",
            priceOut: "64614.20000",
            timeOut: "2024-03-24T11:10:00.331Z",
        },
        {
            _id : "6713b65a4236aa7996bf1bd8",
            pageNumber: 10,            
            applicantId: "A2000",
            executedQty: 1.0,
            tradeType: "short",
            priceIn: "64614.60000",
            timeIn: "2024-03-24T11:10:11.055Z",
            priceOut: "69002.27788",
            timeOut: "2024-03-27T11:10:15.312Z",
        },

        // A3000

        // {
        //     _id : "6813b65a4236aa7996bf1bc8",
        //     pageNumber: 1,            
        //     applicantId: "A3000",
        //     executedQty: 1.0,
        //     tradeType: "long",
        //     priceIn: "27485.60000",
        //     timeIn: "2023-10-16T11:10:29.551Z",
        //     priceOut: "35460.00000",
        //     timeOut: "2023-10-23T11:16:44.991Z",
        // },
        // {
        //     _id : "6813b65a4236aa7996bf1bc9",
        //     pageNumber: 2,            
        //     applicantId: "A3000",
        //     executedQty: 1.0,
        //     tradeType: "long",
        //     priceIn: "38290.00000",
        //     timeIn: "2023-12-01T11:16:52.687Z",
        //     priceOut: "43896.71990",
        //     timeOut: "2023-12-06T11:17:07.259Z",
        // },
        // {
        //     _id : "6813b65a4236aa7996bf1bd1",
        //     pageNumber: 3,            
        //     applicantId: "A3000",
        //     executedQty: 1.0,
        //     tradeType: "long",
        //     priceIn: "44384.14286",
        //     timeIn: "2024-01-08T14:47:27.131Z",
        //     priceOut: "45846.20000",
        //     timeOut: "2024-01-12T14:47:50.690Z",
        // },
        // {
        //     _id : "6813b65a4236aa7996bf1bd2",
        //     pageNumber: 4,            
        //     applicantId: "A3000",
        //     executedQty: 1.0,
        //     tradeType: "long",
        //     priceIn: "42677.00000",
        //     timeIn: "2024-02-04T11:16:52.687Z",
        //     priceOut: "49502.71990",
        //     timeOut: "2024-02-13T11:17:07.259Z",
        // },
        // {
        //     _id : "6813b65a4236aa7996bf1bd3",
        //     pageNumber: 5,            
        //     applicantId: "A3000",
        //     executedQty: 1.0,
        //     tradeType: "short",
        //     priceIn: "52183.14286",
        //     timeIn: "2024-02-15T14:47:27.131Z",
        //     priceOut: "52183.20000",
        //     timeOut: "2024-02-22T14:47:50.690Z",
        // },
        // {
        //     _id : "6813b65a4236aa7996bf1bd4",
        //     pageNumber: 6,            
        //     applicantId: "A3000",
        //     executedQty: 1.0,
        //     tradeType: "long",
        //     priceIn: "51452.00000",
        //     timeIn: "2024-02-24T03:08:00.448Z",
        //     priceOut: "61689.00000",
        //     timeOut: "2024-02-29T03:10:50.919Z",
        // },
        // {
        //     _id : "6813b65a4236aa7996bf1bd5",
        //     pageNumber: 7,            
        //     applicantId: "A3000",
        //     executedQty: 1.0,
        //     tradeType: "long",
        //     priceIn: "68270.00000",
        //     timeIn: "2024-03-04T04:52:27.270Z",
        //     priceOut: "61202.57497",
        //     timeOut: "2024-03-05T11:03:52.544Z",
        // },
        // {
        //     _id : "6813b65a4236aa7996bf1bd6",
        //     pageNumber: 8,            
        //     applicantId: "A3000",
        //     executedQty: 1.0,
        //     tradeType: "short",
        //     priceIn: "67783.10000",
        //     timeIn: "2024-03-08T11:04:59.819Z",
        //     priceOut: "72170.00000",
        //     timeOut: "2024-03-11T11:05:19.755Z",
        // },
        // {
        //     _id : "6813b65a4236aa7996bf1bd7",
        //     pageNumber: 9,           
        //     applicantId: "A3000",
        //     executedQty: 1.0,
        //     tradeType: "short",
        //     priceIn: "67295.60000",
        //     timeIn: "2024-03-19T11:09:53.263Z",
        //     priceOut: "64614.20000",
        //     timeOut: "2024-03-24T11:10:00.331Z",
        // },
        // {
        //     _id : "6813b65a4236aa7996bf1bd8",
        //     pageNumber: 10,            
        //     applicantId: "A3000",
        //     executedQty: 1.0,
        //     tradeType: "short",
        //     priceIn: "64614.60000",
        //     timeIn: "2024-03-24T11:10:11.055Z",
        //     priceOut: "69002.27788",
        //     timeOut: "2024-03-27T11:10:15.312Z",
        // },

                

    ];
    return traderData;
}

async function priceData(dateString, numberOfDays) {

    let exchange = new ccxt.binance({
        apiKey: "33abb9bbd90c07de6420d2c782df3efb8fbc7ab65be3b3091e1ad0de3a1f1831",
        secret: "5c19a06e96ad5572c938b14f0b6776a6a19cde77d2e4f1baf10ba55bd1acc11c",

        // apiKey: `${process.env.BINANCE_PUBLIC_API_KEY}`,
        // secret: `${process.env.BINANCE_SECRET_PRIVATE_KEY}`,
        enableRateLimit: true,
        options: {
            defaultType: "future",
            urls: {
                api: "https://testnet.binancefuture.com",
                test: "https://testnet.binancefuture.com",
            },
        },
    });
    exchange.set_sandbox_mode(true);

    dateString = JSON.stringify(dateString);
    dateString = dateString.replace(/\"/g, "");
    let from_ts = exchange.parse8601(dateString);

    const exchangeData = await exchange.fetchOHLCV(
        "BTCUSDT",
        "1d",
        from_ts,
        numberOfDays
    );

    let data = [];
    let singleData = {
        time: { year: -1, month: -1, day: -1 },
        open: 0.0,
        high: 0.0,
        low: 0.0,
        close: 0.0,
        volume: 0.0,
    };

    for (const datum in exchangeData) {
        const date = new Date(exchangeData[datum][0]);

        let year = date.getFullYear();
        let month = date.getMonth() + 1; //there is bug in the api of getMonth()
        let day = date.getDate();

        singleData = {
            time: { year: year, month: month, day: day },
            open: exchangeData[datum][1],
            high: exchangeData[datum][2],
            low: exchangeData[datum][3],
            close: exchangeData[datum][4],
            volume: exchangeData[datum][5],
        };
        data.push(singleData);
    }
    return data;
}

const getFullRangeOfPriceChart = async (req, res) => {

    const applicantTrades= await applicantData()

    let getApplicantDataAndPriceChart = [];
    let oneData = {};

    for (const tradeNumber in applicantTrades) {
        const trade = applicantTrades[tradeNumber];
        const offSetDays = 5;

        // day diff + start date which is already offset leftside + right side offset
        const numberOfDays = getDayDiff(trade.timeIn, trade.timeOut) + 2 * offSetDays;
        let leftSideDate = new Date(trade.timeIn.split("T")[0]);
        leftSideDate.setDate(leftSideDate.getDate() - offSetDays);
        const priceChart = await priceData(leftSideDate, numberOfDays);

        oneData = {
            applicantTrade: trade,
            priceChart: priceChart,
        };
        getApplicantDataAndPriceChart.push(oneData);
    }
    res.json(getApplicantDataAndPriceChart);
};

function getDayDiff(timeIn, timeOut) {

    const date1 = new Date(timeIn.split("T")[0]);
    let date2 = new Date(timeOut.split("T")[0]);
    date2.setDate(date2.getDate() + 1);

    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
}

module.exports = { getFullRangeOfPriceChart, seedApplicant };
