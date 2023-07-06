import styled, { css } from "styled-components";

export const StyledButton = styled.button`
    display: flex;
    flex-direction: ${props => props.isIconRight ? "row" : "row-reverse"};
    justify-content: center;
    align-items: center;
    height: 2rem;
    border-radius: 999px;
    padding: 0 1.5rem;
    background-color: var(--primary-color);
    color: #ffffff;
    cursor: pointer;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: var(--primary-color-hover);
        box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    }

    // icons
    & > i {
        display: block;
        width: 1rem;
        height: 1rem;
        ${props => props.isIconRight ? "margin-left: 0.25rem;" : "margin-right: 0.25rem;"};
        background-size: cover;
    }

    // 크기. default는 large
    ${(props) =>
        props.size === "medium" &&
        css`
            height: 1.75rem;
            font-size: 0.75rem;

            & > i {
                width: 0.75rem;
                height: 0.75rem;
            }
        `}
    ${(props) =>
        props.size === "small" &&
        css`
            height: 1.5rem;
            font-size: 0.5rem;

            & > i {
                width: 0.6rem;
                height: 0.6rem;
            }
        `}

    // negative
    ${(props) =>
        props.negative === true &&
        css`
            background-color: transparent;
            border: 2px solid var(--primary-color);
            color: var(--primary-color);

            &:hover {
                border-color: var(--primary-color-hover);
                background-color: var(--primary-color-hover);
                color: #fff;
            }
        `}

    margin-right: 0.2rem; //! test용, 이후 지우기
`;

