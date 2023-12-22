/*
* Calculate the max profit that can be gained when robbing houses where  
* you can only rob one house at a time and each robbery is only available during a certain window, defined by:
*   
* @param dStarts: int[]
* @param dEnds: int[]
* 
* Additionally, you have a time that you start and end at: 
* 
* @param start: int
* @param end: int
* 
* for your entire robbing run. 
*
* @param dProfits: int[] enumerates the profit to be gained at each house.
*
* Times start at hour 0 and end at hour 23
*/
const calcMaxProfit = (dStarts, dEnds, start, end, dProfits) => {

	let maxProfit = new Array(dProfits.length).fill(-1)
	calcMaxProfitRecursive(0, maxProfit, dStarts, dEnds, start, end, dProfits)

	let max = 0

	for (let profit of maxProfit) {
		if (profit > max) {
			max = profit
		}
	}

	return max
}

const calcMaxProfitRecursive = (currentStep, maxProfit, dStarts, dEnds, start, end, dProfits) => {

	if (currentStep >= dProfits.length) {
		return 0
	}

	if (maxProfit[currentStep] !== -1) {
		return maxProfit[currentStep]
	}


	const nextIndex = getNextIndex(currentStep, dStarts, dEnds, start, end)


	const currentMax = Math.max(dProfits[currentStep] + calcMaxProfitRecursive(nextIndex, maxProfit, dStarts, dEnds, start, end, dProfits), calcMaxProfitRecursive(currentStep + 1, maxProfit, dStarts, dEnds, start, end, dProfits))

	maxProfit[currentStep] = currentMax

	return currentMax
}

const getNextIndex = (currentStep, dStarts, dEnds, start, end) => {
	let index = currentStep + 1

	for (let i = index; i < dStarts.length; i++) {

		if (dStarts[i] >= dEnds[currentStep] && dEnds[i] <= end) {

			return i
		}
	}

	return dEnds.length
}

const start1 = 0
const end1 = 12
const dStarts1 = [0, 1, 2] 
const dEnds1 = [1, 2, 3] 
const dProfits1 = [1, 2, 3]

console.log('max profit should be 6: ' + calcMaxProfit(dStarts1, dEnds1, start1, end1, dProfits1)) // 6


const start2 = 0
const end2 = 12
const dStarts2 = [0, 1, 2] 
const dEnds2 = [3, 2, 3] 
const dProfits2 = [1, 2, 3]

console.log('max profit should be 5: ' + calcMaxProfit(dStarts2, dEnds2, start2, end2, dProfits2)) // 5


const start3 = 0
const end3 = 12
const dStarts3 = [0, 1, 2, 11] 
const dEnds3 = [11, 11, 11, 12] 
const dProfits3 = [1, 3, 2, 1]

console.log('max profit should be 4: ' + calcMaxProfit(dStarts3, dEnds3, start3, end3, dProfits3)) // 4

const start4 = 0
const end4 = 13
const dStarts4 = [0, 1, 11, 12] 
const dEnds4 = [11, 11, 13, 13] 
const dProfits4 = [1, 3, 2, 3]

console.log('max profit should be 6: ' + calcMaxProfit(dStarts4, dEnds4, start4, end4, dProfits4)) // 6





