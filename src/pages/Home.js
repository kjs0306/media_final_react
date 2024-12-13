import React from "react";

const Home = () => {
    const handleClick = () => {
        console.log("Home 페이지 확인");
    };

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleClick}>Home 테스트</button>
        </div>
    );
};

export default Home;