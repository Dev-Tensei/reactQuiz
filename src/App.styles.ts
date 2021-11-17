import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './images/white-background.jpg';

export const QuizStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-image: url(${BGImage});
        background-size: cover;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
    }

    * {
        box-sizing: border-box;
        font-family: 'Catamaran', sans-serif;
    }
`;

    export const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;

        > p {
            color: #000;
        }

        .score {
            color: #000;
            font-size: 1.5rem;
            margin: 0;
            margin-top: 15px;
            margin-bottom: 15px;
            max-width: 1100px;
            background: #fff;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
            text-align: center;
        }

        h1 {
            font-family: 'Roboto Condensed', sans-serif;
            // background-image: linear-gradient(180deg, #fff, #87f1ff);
            color: #000;
            font-weight: 700;
            text-align: center;
            margin: 20px;
        }
        .title {
            font-size: 24px;
            font-family: 'Roboto Condensed', sans-serif;
            color: #fff;
            font-weight: 700;
            text-align: center;
            margin: 20px;   
        }

        .start, .next {
            cursor: pointer;
            // border: 2px solid #d38558;
            box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
            border-radius: 10px;
            height: 40px;
            margin: 20px 0;
            padding: 0 40px;
        }

        .start {
            max-width: 200px;
        }
        .top-bar {
            display: flex;
            flex-direction: column;
            width: 100vw;
            box-sizing: border-box;
            position: relative;
            background-color: #28282a;
            color: #fff;
            text-align: center;
        }
    `;