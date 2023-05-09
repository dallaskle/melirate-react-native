export const WieghtArrayToPropertyArray = (propertyName, data) => {
    if (propertyName == null || propertyName.length == 0) {
        return []
    }
    const convertedData = data.map((item) => ({
        property: (item[propertyName] * (propertyName == "bodyWeight" ? 1 : item.bodyWeight)).toFixed(2) + "kg",
        timestamp: item.timestamp.slice(5, 10).replace('-', '/'),
        id: Math.random()
      }));
  
      // Sort the convertedData array by timestamp in descending order
      convertedData.sort((a, b) => b.timestamp - a.timestamp);
  
      return convertedData;
}