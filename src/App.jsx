import "./App.css";
import Hook01 from "./ReactStudy/Hook01";
import React01 from "./ReactStudy/React01";
import React02 from "./ReactStudy/React02";
import React03 from "./ReactStudy/React03";
import React04 from "./ReactStudy/React04";
import CountState from "./ReactStudy/ReactHook02/CountState";
import ReactHook03 from "./ReactStudy/ReactHook03";

function App() {
    const name = "배찬익";
    const age = 23;
    return (
        <>
            {/* <React01 /> */}
            {/* <React02 /> */}
            {/* <React03
                name={name}
                age={age}
                address={"부산시"}
                tel={"010-1234-5678"}
            /> */}
            {/* <React04>
                <h1>자식요소</h1>
            </React04> */}
            {/* <Hook01 /> */}
            {/* <CountState /> */}
            <ReactHook03 />
        </>
    );
}

export default App;
