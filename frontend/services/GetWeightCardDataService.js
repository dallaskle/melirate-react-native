import { WeightsToWeightCardData } from '../converters/WeightsToWeightCardData'
import {getUsersWeight} from '../dao/WeightDao'

export const GetWeightCardDataService = (user_id) => {
    const data = getUsersWeight(user_id)

    const result = WeightsToWeightCardData(data)

   let start =  {
        timestamp: '2023-03-24',
        bodyWeight: 76,
        bodyFatPercent: .234,
        muscle: 37,
        hydration: .57,
        user_id: 1,
    }

    let end = {
        header: 'Body Weight',
        amount: 76.1,
        amountType: 'kg',
        changes: [-0.2, -0.2, -0.2],
    }

    return result
}