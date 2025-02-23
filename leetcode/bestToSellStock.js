var maxProfit = function (prices) {
    let lowestPrice = prices[0]
    let maxbenifit = 0
    for (let i = 1; i < prices.length; i++) {
        lowestPrice = Math.min(lowestPrice, prices[i])
        maxbenifit = Math.max(maxbenifit, prices[i] - lowestPrice)
    }
    return maxbenifit
};