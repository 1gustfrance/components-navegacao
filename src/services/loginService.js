// loginService.js
import { api } from './api';

const login = async (credentials) => {
    try {
        const response = await api.post('/login', credentials);
        return response.data;
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        throw error;
    }
}

export { login };
