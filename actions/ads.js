import fetch from 'isomorphic-fetch';
import { API } from '../config';
import queryString from 'query-string';
import { isAuth, handleResponse } from './auth';

export const createLogo = (blog, token) => {
    let createLogoEndpoint;

    if (isAuth() && isAuth().role === 1) {
        createLogoEndpoint = `${API}/logo`;
    } else if (isAuth() && isAuth().role === 0) {
        createLogoEndpoint = `${API}/user/blog`;
    }

    return fetch(`${createLogoEndpoint}`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};



