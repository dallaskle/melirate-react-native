const fakeGoalData = [
    {
        type: 'bodyWeight',
        due: '2023-05-30',
        amount: 72,
        active: true,
        completed: false,
        user_id: 1,
    },
    {
        type: 'bodyFatPercent',
        due: '2023-04-30',
        amount: .15,
        active: true,
        completed: false,
        user_id: 1,
    },
    {
        type: 'muscle',
        due: '2023-06-30',
        amount: 37.4,
        active: true,
        completed: false,
        user_id: 1,
    },
    {
        type: 'hydration',
        due: '2023-06-30',
        amount: .24,
        active: true,
        completed: false,
        user_id: 1,
    },
]

const getUsersActiveGoals = (user_id) => {
    return fakeGoalData
}