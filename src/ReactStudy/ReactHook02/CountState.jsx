import React, { useState } from "react";
import CountButton from "./CountButton";
import Count from "./Count";

function CountState() {
    console.log("CountState 렌더링 됨")
    const [count, setCount] = useState(0);

    const plusOnClickHandler = () => {
        setCount(count + 1);
    };

    const minusOnclickHandler = () => {
        setCount(count - 1);
    };
    return (
        <div>
            <Count count={count} />
            <CountButton onClickHandler={plusOnClickHandler} text={"+1"} />
            <CountButton onClickHandler={minusOnclickHandler} text={"-1"} />
        </div>
    );
}

export default CountState;
