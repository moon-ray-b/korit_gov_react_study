import React, { useEffect, useRef } from "react";

function ReactHook08() {
    //Dom 객체에 직접 접근할때 사용되는 Hook
    //값을 저장하되, 그 값이 바뀌어도 재 렌더링을 발생시키지 않는 상태값
    const inputRef = useRef();
    const intervalValueRef = useRef();

    useEffect(() => {
        console.log(inputRef.current);
        inputRef.current.focus();

        intervalValueRef.current = setInterval(() => {
            console.log("아무거나");
        }, 1000);
    }, []);
    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    );
}

export default ReactHook08;
