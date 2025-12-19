import React, { useState } from "react";

/**
 * 문제
 * input 하나를 만들고 입력된 이름과 값이 일치하는 나이를 h2태그에 출력하시오
 * 만약 일치하는 이름이 없으면 값 없음 출력
 */
function ReactHook06() {
    const [inputValue, setInputValue] = useState("");
    const [result, setResult] = useState();
    const profiles = [
        { name: "박윤호", age: 25 },
        { name: "배익찬", age: 23 },
        { name: "정희원", age: 31 },
        { name: "남영삭", age: 27 },
    ];

    const onChangeHandler = (e) => {
        setInputValue(e.target.value);

        //리액트는 일괄 처리
        //상태 업데이트 요청이 들어오면 모아서 한번에 처리
        //만약 set함수가 즉시 실행이라면 작은 변화에도 컴포넌트를 다시 렌더링하기 때문에 느려진다.

        const foundProfile = profiles.find((profiles) => {
            return profiles.name === e.target.value;
        });

        //선택적 연결(Optional Chaining /?)
        //객체를 사용할 때, 속성이 undeined이거나 null이면 error를 발생시키는 대신 undefined를 리턴한다.
        setResult(foundProfile);
    };

    return (
        <div>
            <input type="text" value={inputValue} onChange={onChangeHandler} />
            <h2>나이: {!!result ? result.age : "값 없음"}</h2>
        </div>
    );
}

export default ReactHook06;
