/** @jsxImportSource @emotion/react */
import { PiAcornBold } from "react-icons/pi";
import * as s from "./styles";
import React from "react";

function Header() {
    return (
        <>
            <div css={s.container}>
                <input
                    css={s.searchInput}
                    type="text"
                    placeholder="검색어 입력해라"
                />
                <button css={s.searchButton}>
                    <PiAcornBold />
                </button>
            </div>
            <div css={s.filterContainer}>
                <input type="radio" id="all" name="filter" />
                <label htmlFor="all">전체</label>
                <input type="radio" id="complete" name="filter" />
                <label htmlFor="complete">완료</label>
                <input type="radio" id="incomplete" name="filter" />
                <label htmlFor="incomplete">미완료</label>
            </div>
        </>
    );
}

export default Header;
