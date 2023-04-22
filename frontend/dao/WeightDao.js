import { getAllUserWeights } from "../routes/Weight";
import { saveUserWeight } from "../routes/Weight";

export const getUsersWeight = async (token, user_id) => {
    const res = await getAllUserWeights(token, user_id)
    console.log(res)
    return res.data
}

export const saveWeight = async (token, user_id, data) => {
    const res = await saveUserWeight(token, user_id, data)
    console.log(res)
    return res;
};