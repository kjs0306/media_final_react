import api from '../api/api'; // Axios 설정 파일 import

// 이력서 생성
export const createResume = (resume) => {
  return api.post('/resumes', resume);
};

// 특정 사용자의 이력서 목록 조회
export const getResumesByUserId = (userId) => {
  return api.get(`/resumes/user/${userId}`);
};

// 이력서 수정
export const updateResume = (id, resume) => {
  return api.put(`/resumes/${id}`, resume);
};

// 이력서 삭제
export const deleteResume = (id) => {
  return api.delete(`/resumes/${id}`);
};