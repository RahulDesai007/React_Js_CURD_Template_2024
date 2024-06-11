import { CREATE } from "../types/data";
import { BASE_URL, CREDS_URL, SIGN_IN } from "../constant"

//API call
export const signInData = (postData) => {
    return async function (dispatch) {
        try {
            const result = await fetch(`${BASE_URL}${CREDS_URL}${SIGN_IN}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(postData)
            })
            if (!result.ok) {
                throw new Error('Network response was not ok');
            }
            const response = await result.json()
            console.log(response)
            //dispatch(setResponseData(customerData.data))
        } catch (error) {
            alert(error);
            throw error;
        }

    }
}

export const setResponseData = (createData = null) => {
    //going inside action payload
    if (createData) {
        return {
            type: CREATE,
            payload: createData,
        }
    }
}

