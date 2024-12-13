import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';  

export const login = async (email, password) => {
    try {
        // 서버로 로그인 요청을 보냄, withCredentials: true로 세션 관리
        const response = await axios.post(`${API_URL}login`, { email, password }, {
            withCredentials: true,  // 세션 쿠키를 포함한 요청을 보낼 때 사용
        });
        return response.data;  // 로그인 성공 시 반환되는 데이터
    } catch (error) {
        throw new Error('로그인 실패');
    }
};

export const register = async (email, password, name) => {
    try {
        await axios.post(`${API_URL}register`, { email, password, name });
    } catch (error) {
        throw new Error('회원가입 실패');
    }
};