import axios from 'axios';

const api = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
});

// ✅ 요청 인터셉터 - 토큰 자동 삽입
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('access_token'); // 예시: 로컬스토리지 토큰
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ✅ 응답 인터셉터 - 공통 에러 처리
api.interceptors.response.use(
  (response) => response,
  (error) => {
    // 예: 토큰 만료 시 로직 추가 가능
    if (error.response?.status === 401) {
      console.warn('인증 에러: 다시 로그인 해주세요.');
    }
    return Promise.reject(error.response?.data || error);
  }
);

// ✅ 공통 요청 함수 (원하는 곳에서 직접 사용 가능)
export const axiosCall = async (method, url, data = {}, config = {}) => {
  try {
    const response = await api({ method, url, data, ...config });
    return response.data;
  } catch (error) {
    throw error;
  }
};