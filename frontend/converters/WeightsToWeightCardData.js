
export const sortWeights = (weights) => {
  weights.sort((a, b) =>{
    const nameA = b.timestamp
    const nameB = a.timestamp
  
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0; // Names are equal
  });
  return weights;
}
export const WeightsToWeightCardData = (weights) => {
    weights.filter(obj => obj.hasOwnProperty('bodyWeight') && obj.hasOwnProperty('bodyFat')  && obj.hasOwnProperty('hydration')  && obj.hasOwnProperty('muscle'));
    weights = sortWeights(weights)
    let results = [
        {
            header: 'Body Weight',
            amount: 0, //76.1,
            amountType: 'kg',
            changes: [0,0,0],//[-0.2, -0.2, -0.2],
          },
          {
            header: 'Body Fat %',
            amount: 0, //23.4,
            amountType: '%',
            changes: [0,0,0],//[-0.2, -0.2, -0.2],
          },
          {
            header: 'Muscle',
            amount: 0, //22.8,
            amountType: 'kg',
            changes: [0,0,0],//[-0.2, -0.2, -0.2],
          },
          {
            header: 'Hydration %',
            amount: 0, //56.2,
            amountType: '%',
            changes: [0,0,0],//[-0.2, -0.2, -0.2],
          },
    ]

    const decimals = 100
    
    //Fill Amounts
    results[0].amount = Math.round((weights[0].bodyWeight)*decimals)/decimals 
    results[1].amount = Math.round((weights[0].bodyFat * 100)*decimals)/decimals 
    results[2].amount = Math.round((weights[0].muscle)*decimals)/decimals 
    results[3].amount = Math.round((weights[0].hydration * 100)*decimals)/decimals 

    //Fill Changes
    for (let i = 1; i < 4; i++) {
        results[0].changes[i - 1] = Math.round((weights[i].bodyWeight - weights[0].bodyWeight)*decimals)/decimals
        results[1].changes[i - 1] = Math.round((weights[i].bodyFat - weights[0].bodyFat) * 100 *decimals)/decimals 
        results[2].changes[i - 1] = Math.round((weights[i].muscle - weights[0].muscle)*decimals)/decimals 
        results[3].changes[i - 1] = Math.round((weights[i].hydration - weights[0].hydration) * 100 *decimals)/decimals 
    }

    return results

}