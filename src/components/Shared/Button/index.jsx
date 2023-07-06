import React from "react";
import { StyledButton } from "./styled";
import Icon from "../Icon";

// 버튼 공통 요소 컴포넌트
// size: large(default), medium, small
// negative: true일 경우 line 버튼
// onClick: 버튼에 전달할 클릭 이벤트 함수
// isIconRight: 아이콘 있을 시 위치 텍스트의 오른쪽(true)/왼쪽(false) 선택
const Button = ({ handleBtnClick, size, negative, icon, isIconRight, children }) => {
    // ? props로 받아와서 구조분해하면 handleBtnClick이 undefined라고 에러가 난다..?
    // ? const {handleBtnClick, size, negative, icon, isIconRight} = props;
    const onBtnClick = () => {
        handleBtnClick !== undefined && handleBtnClick(); // 이벤트 함수가 전달되었을 시 실행
        alert("click!");
    };

    return (
        <StyledButton size={size} negative={negative} onClick={onBtnClick} isIconRight={isIconRight}>
            {/* 버튼 내 텍스트 */}
            {children}
            {/* 아이콘 있을 시 Icon 컴포넌트 출력 */}
            {icon !== undefined ? <Icon iconName={icon} /> : ""}
        </StyledButton>
    );
};

export default Button;
