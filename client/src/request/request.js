import axios from 'axios';

const request =
    (url, option) => axios(url, option)
        .then(res => res.data);

export const getUserInfo =
    () => request('/interface/user/getUserInfo')
export const login = ({
    username,
    password
}) => request('/interface/user/login', {
    params: {
        username,
        password
    }
});
export const getAccountDetailList = params => request('/interface/account/getDetailList', {
    params
});
export const getAccountDetail = id => request(`/interface/account/getDetail?id=${id}`);
export const addAccountDetail = params => request('/interface/account/add', {
    params
});
export const editAccountDetail = params => request('/interface/account/edit', {
    params
});