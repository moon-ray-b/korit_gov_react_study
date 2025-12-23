/** @jsxImportSource @emotion/react */
import { Route, Routes, useNavigate, Link } from "react-router-dom";
import * as s from "./styles";
import { useState } from "react";

/**
 * React Router Dom
 * 리액트 => SPA(Single Page Application)
 * 페이지 이동(라우팅)을 구현할 수 있게 해주는 라이브러리
 * 페이지의 주소나 링크를 클릭했을때 페이지 전체를 새로고침하지 않고 특정 주소에 맞는 컴포넌트만 보여주어서
 * 마치 여러 페이지가 있고 이동을 하는 것처럼 동작하는 것
 */
function Router01() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();
    return (
        <div css={s.layout}>
            <div css={s.header}>
                <a href={"/"}>홈</a>
                <a href={"/color/red"}>Red</a>
                <a href={"/color/blue"}>Blue</a>
                <a href={"/color/orange"}>Orange</a>

                <Link to={"/"}>홈</Link>
                <Link to={"/color/red"}>Red(Link)</Link>
                <Link to={"/color/blue"}>Blue(Link)</Link>
                <Link to={"/color/orange"}>Orange(Link)</Link>

                <button onClick={() => navigate("/")}>홈</button>
                <button onClick={() => navigate("/color/red")}>
                    Red(Navigate)
                </button>
                <button onClick={() => navigate("/color/blue")}>
                    Blue(Navigate)
                </button>
                <button onClick={() => navigate("/color/orange")}>
                    Orange(Navigate)
                </button>
                <div>
                    <h1>{count}</h1>
                    <button onClick={() => setCount((prev) => prev + 1)}>
                        +1
                    </button>
                </div>
            </div>
            <Routes>
                <Route
                    path="/"
                    element={<div css={s.main("white")}>메인 홈 화면</div>}
                />
                <Route
                    path="color/red"
                    element={<div css={s.main("red")}>Red 화면</div>}
                />
                <Route
                    path="color/blue"
                    element={<div css={s.main("blue")}>Blue 화면</div>}
                />
                <Route
                    path="color/orange"
                    element={<div css={s.main("orange")}>Orange 화면</div>}
                />
            </Routes>
        </div>
    );
}

export default Router01;
