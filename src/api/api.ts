import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const sendGetRequest = (url: string) => sendRequest('GET', url, {});

export const sendPostRequest = (url: string, data: object) => sendRequest('POST', url, data);

export const sendPutRequest = (url: string, data: object) => sendRequest('PUT', url, data);

export const sendPatchRequest = (url: string, data: object) => sendRequest('PATCH', url, data);

export const sendDeleteRequest = (url: string, data: object) => sendRequest('DELETE', url, data);

const sendRequest = async (method: string, finalUrl: string, data: object) => {
    const url = `${BASE_URL}/${finalUrl}`;
    const isFormData = data instanceof FormData;
    const config = {
        method,
        url,
        headers: {
            'Content-Type': !isFormData ? 'application/json' : '',
        },
        data: {}
    };
    if (data) {
        config.data = isFormData ? data : JSON.stringify(data);
    }
    try {
        const res = await axios(config);
        return res.data;
    } catch (err) {
        return Promise.reject(err);
    }
};
