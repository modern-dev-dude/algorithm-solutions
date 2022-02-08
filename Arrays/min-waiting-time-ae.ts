export function minimumWaitingTime(queries: number[]):number {
  // Write your code here.
	queries.sort((a,b) => a- b);
	let totalwaitingTime = 0;
	for(let idx = 0; idx< queries.length; idx++){
		const durration  = queries[idx];
		const queriesLeft = queries.length - (idx + 1);
		totalwaitingTime += durration * queriesLeft;
	}
  return totalwaitingTime;
}