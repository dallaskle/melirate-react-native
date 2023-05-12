export const WieghtArrayToPropertyArray = (propertyName, data) => {
    if (propertyName == null || propertyName.length == 0) {
        return []
    }
    const convertedData = data.map((item) => ({
        property: (item[propertyName] * (propertyName == "bodyWeight" ? 1 : item.bodyWeight)).toFixed(2) + "kg",
        timestamp: item.timestamp.slice(5, 10).replace('-', '/'),
        index: Math.random()
      }));
  
      // Sort the convertedData array by timestamp in descending order
      convertedData.sort((a, b) => b.timestamp - a.timestamp);
  
      return convertedData;
}

export function separateByProperty(arr, propName1, propName2) {
    const arr1 = [];
    const arr2 = [];
    console.log(arr)

    let count = 0;
    
    arr.forEach(obj => {
        if (count < 7) {
            if (obj[propName1]) {
                count++
                arr1.push(obj[propName1]);
              }
              if (obj[propName2]) {
                arr2.push(parseFloat(obj[propName2].slice(0,4)));
              }
        }
    });

    console.log(arr1)
    console.log(arr2)
    
    return [arr1.reverse(), arr2.reverse()];
  }