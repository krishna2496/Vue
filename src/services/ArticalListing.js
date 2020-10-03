import axios from 'axios'

export default async (data) => {
    let responseData = {}
    responseData.data = [];
    await axios({
        url: `${process.env.VUE_APP_API_ENDPOINT}articles`,
        data,
        method: 'GET'
    }).then((response) => {
        if (response.data) {
            responseData.data = response.data;
        }
    })
    return responseData;
}