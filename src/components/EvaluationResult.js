import React from 'react';
import { Line } from 'react-chartjs-2';

const EvaluationResult = ({ scores }) => {
    const data = {
        labels: ['첫 번째 답변', '두 번째 답변', '세 번째 답변'],
        datasets: [
            {
                label: '평가 점수',
                data: scores, // 각 답변의 점수 배열
                borderColor: 'rgba(75, 192, 192, 1)',
                tension: 0.1,
            },
        ],
    };

    return <Line data={data} />;
};

export default EvaluationResult;