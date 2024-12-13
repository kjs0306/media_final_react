import React, { useEffect, useState } from 'react';
import { createResume, getResumesByUserId, deleteResume } from '../services/ResumeService';

const ResumeManager = ({ userId }) => {
  const [resumes, setResumes] = useState([]); // 이력서 목록
  const [newResume, setNewResume] = useState({ title: '', content: '' }); // 새 이력서 정보

  // 특정 사용자의 이력서 목록 불러오기
  useEffect(() => {
    getResumesByUserId(userId).then((response) => {
      setResumes(response.data);
    });
  }, [userId]);

  // 이력서 추가
  const handleCreate = () => {
    createResume({ ...newResume, user: { id: userId } }).then(() => {
      setNewResume({ title: '', content: '' }); // 입력 필드 초기화
      getResumesByUserId(userId).then((response) => setResumes(response.data)); // 목록 갱신
    });
  };

  // 이력서 삭제
  const handleDelete = (id) => {
    deleteResume(id).then(() => {
      getResumesByUserId(userId).then((response) => setResumes(response.data)); // 목록 갱신
    });
  };

  return (
    <div>
      <h2>이력서 관리</h2>

      {/* 새 이력서 작성 폼 */}
      <div>
        <input
          type="text"
          placeholder="이력서 제목"
          value={newResume.title}
          onChange={(e) => setNewResume({ ...newResume, title: e.target.value })}
        />
        <textarea
          placeholder="이력서 내용"
          value={newResume.content}
          onChange={(e) => setNewResume({ ...newResume, content: e.target.value })}
        />
        <button onClick={handleCreate}>추가</button>
      </div>

      {/* 이력서 목록 */}
      <ul>
        {resumes.map((resume) => (
          <li key={resume.id}>
            <h3>{resume.title}</h3>
            <p>{resume.content}</p>
            <button onClick={() => handleDelete(resume.id)}>삭제</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResumeManager;