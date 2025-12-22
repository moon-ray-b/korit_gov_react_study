/** @jsxImportSource @emotion/react */
import { IoTrash } from "react-icons/io5";
import * as s from "./styles";
import React from "react";

function Main() {
    return (
        <div css={s.container}>
            <div css={s.listcontainer}>
                <ul>
                    <li>
                        <input type="checkbox" id="1" />
                        <label htmlFor="1"></label>
                        <label htmlFor="1">할 일 내용</label>
                        <div>
                            <div>
                                <IoTrash />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div css={s.todoInputContainer}>
                <input type="text" placeholder="할 일 입력해라" />
            </div>
        </div>
    );
}

export default Main;
