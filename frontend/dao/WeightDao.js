const fakeWeightData = [
    {
        weight_id: 1, 
        timestamp: '2023-03-17',
        bodyWeight: 76.2,
        bodyFatPercent: .24,
        muscle: 37.2,
        hydration: .54,
        user_id: 1,
    },
    {
        weight_id: 3, 
        timestamp: '2023-03-24',
        bodyWeight: 76,
        bodyFatPercent: .234,
        muscle: 37,
        hydration: .57,
        user_id: 1,
    },
    {
        weight_id: 2, 
        timestamp: '2023-03-23',
        bodyWeight: 76.2,
        bodyFatPercent: .235,
        muscle: 37.1,
        hydration: .56,
        user_id: 1,
    },
    {
        weight_id: 0, 
        timestamp: '2023-02-24',
        bodyWeight: 75,
        bodyFatPercent: .234,
        muscle: 37,
        hydration: .57,
        user_id: 1,
    },
]

export const getUsersWeight = (user_id) => {
    return fakeWeightData
}