export const AbsoluteToPercentChange = (change, start) => {
    return Math.round((change / start)*1000)/1000;
}