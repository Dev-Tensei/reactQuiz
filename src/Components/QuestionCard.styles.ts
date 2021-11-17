import styled from 'styled-components';

export const Wrapper = styled.div`
    max-width: 1100px;
    background: #fff;
    border-radius: 10px;
    // border: 2px solid #0085a3;
    padding: 20px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
    text-align: center;
    color: #000;

    p {
        font-size: 1rem;
    }
`
type ButtonWrapperProps = {
    correct: boolean;
    userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
    transition: all 0.3s ease;

    :hover {
        opacity: 0.8;
    }

    button {
        cursor: pointer;
        user-select: none;
        font-size: 0.8rem;
        width: 100%;
        height: 40px;
        margin: 5px 0;
        background: ${({ correct, userClicked }) => 
            correct
                ? 'linear-gradient(90deg, #66BB6A, #66BB6A)'
                : !correct && userClicked
                ? 'linear-gradient(90deg, #F44336, #F44336)'
                : 'linear-gradient(90deg, #28282a, #28282a)'};
        color: ${({correct, userClicked}) =>
            correct
                ? '#fff!important'
                : !correct && userClicked
                ? '#fff!important'
                : '#fff!important'};
        box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        
        text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
    }
`