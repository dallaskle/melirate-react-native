import { getAllUserWeights, saveUserWeight, deleteUserWeight } from "../routes/Weight";

export const getUsersWeight = async (token, user_id) => {
    const res = await getAllUserWeights(token, user_id)
    return res.data
}

export const saveWeight = async (token, user_id, data) => {
    console.log('here')
    return saveUserWeight(token, user_id, data)
};

export const deleteWeight = async (token, user_id, data) => {
    const res = await deleteUserWeight(token, user_id, data)
    console.log(res)
    return res;
};