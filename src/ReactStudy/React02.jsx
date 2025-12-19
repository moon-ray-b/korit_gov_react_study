import React from "react";

function React02() {
    const student = {
        name: "배찬익",
        age: 23,
        hobby: ["유도하기", "노래듣기", "맛있는거 먹기"],
    };
    return (
        <div>
            <div>이름: {student.name}</div>
            <div>나이:{student.age} ({student.age > 19 ? "성인":"미성년자"})</div>
            <div>
                <p>취미</p>
                <ul>
                    {student.hobby.map((hobbyName, index) => (
                        <li key={index}>{hobbyName}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default React02;
