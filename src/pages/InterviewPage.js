import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InterviewPage = () => {
    const [question, setQuestion] = useState('');  // 현재 면접 질문
    const [answer, setAnswer] = useState('');  // 사용자가 작성한 답변
    const [interviewId, setInterviewId] = useState(null);  // 현재 인터뷰 ID

    useEffect(() => {
        // 인터뷰 시작 시 첫 번째 질문을 받아오기 위한 API 호출
        axios.post('/api/interviews/start', { resumeId: '123' })  // resumeId는 예시입니다.
            .then(response => {
                setInterviewId(response.data.interviewId);  // 인터뷰 ID 저장
                setQuestion(response.data.question);  // 첫 번째 질문 표시
            })
            .catch(error => console.error('인터뷰 시작 오류:', error));
    }, []);

    const handleAnswerSubmit = () => {
        // 답변 제출 시 API 호출
        axios.post(`/api/interviews/${interviewId}/answer`, { answer })
            .then(response => {
                setQuestion(response.data.nextQuestion);  // 다음 질문 표시
                setAnswer('');  // 답변 필드 초기화
            })
            .catch(error => console.error('답변 제출 오류:', error));
    };

    return (
        <div>
            <h1>가상 인터뷰</h1>
            <p>{question}</p>
            <textarea
                value={answer}
                onChange={e => setAnswer(e.target.value)}
                placeholder="답변을 입력해주세요..."
            />
            <button onClick={handleAnswerSubmit}>제출</button>
        </div>
    );
};

export default InterviewPage;