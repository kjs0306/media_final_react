import React from 'react';
import EvaluationResult from '../components/EvaluationResult';

const ResultPage = () => {
    const scores = [80, 70, 90]; // 예시 데이터

    return (
        <div>
            <h1>인터뷰 평가 결과</h1>
            <EvaluationResult scores={scores} />
        </div>
    );
};

export default ResultPage;