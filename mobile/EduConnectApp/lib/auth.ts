import { api } from './api';
import { storeToken } from './storage';

export const loginUser = async (email: string, password: string) => {
    const res = await api.post('/auth/login', { email, password });
    await storeToken(res.data.token);
    return res.data;
};

export const registerUser = async (data: any) => {
    const res = await api.post('/register', data);
    await storeToken(res.data.token);
    return res.data;
};
