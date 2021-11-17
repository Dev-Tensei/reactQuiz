import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';
// Components
import QuestionCard from './Components/QuestionsCard';
// Types
import { QuestionState, Difficulty } from './API';
// Styles
import { QuizStyle, Wrapper } from './App.styles';

// import ReactDOM from 'react-dom';
import Button from '@mui/material/Button';
import { ButtonGroup, Divider, ThemeProvider } from '@mui/material';

//Colors
import { createTheme } from '@mui/material/styles';
import { blue, blueGrey, red } from '@mui/material/colors';

//Progress
import CircularProgress from '@mui/material/CircularProgress';

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey[500],
    },
    secondary: {
      main: red[300],
      contrastText: '#fff',
    },
  },
});

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;  
}

const TOTAL_QUESTIONS = 5;
const CS_CATEGORY = 18;
const Vehicle_CATEGORY = 28;
const Anime_CATEGORY = 31;
// Vehicles = 28
// Anime = 31

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  // Turn these on to test.
  // console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
  // console.log(questions);

  const startCSTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY,
      CS_CATEGORY
    );
    
    // Note to self, set error handling.
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const startVehicleTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY,
      Vehicle_CATEGORY
    );
    
    // Note to self, set error handling.
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const startAnimeTrivia = async () => {
    setLoading(true);
    setGameOver(false);

    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY,
      Anime_CATEGORY
    );
    
    // Note to self, set error handling.
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      // users answer
      const answer = e.currentTarget.value;
      // check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore( prev => prev + 1);
      // save answer in the array for users answers
      const AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, AnswerObject]);
    }
  }

  const nextQuestion = () => {
    // move on to the next question if not then to the last question
    const nextQuestion = number + 1;

    if (nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else {
      setNumber(nextQuestion);
    }
  }

  return (
    <>
    <QuizStyle/>
    <ThemeProvider theme={theme}>
    <Wrapper>
    <div className='top-bar'><div className='title'>Category Quiz</div></div>
    {/* <h1>React Category Quiz</h1> */}
    
    {/* <Divider variant="middle" /> */}
    <h1>A React Web App</h1>
    

    {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (

    <>
          
          <h3>Select a Category:</h3>
          <ButtonGroup color="primary" variant="contained" aria-label="outlined primary button group">
            <Button onClick={startCSTrivia}>Tech</Button>
            <Button onClick={startVehicleTrivia}>Vehicle's</Button>
            <Button onClick={startAnimeTrivia}>Anime</Button>
          </ButtonGroup>
          {/* <Button variant="contained" onClick={startCSTrivia}>
            Computer Science
          </Button>
          <Button variant="contained" onClick={startVehicleTrivia}>
              Vehicle
          </Button>
          <Button variant="contained" onClick={startAnimeTrivia}>
              Anime
          </Button> */}
    </>

    ) : null}

    {!gameOver ? <p className='score'>Score: { score }</p> : null }
    {/* {loading && <p>Loading Questions ...</p>} */}
    {loading && <CircularProgress />}
    
    {!loading && !gameOver &&  (
    <QuestionCard
      questionNr={number + 1}
      totalQuestions={TOTAL_QUESTIONS}
      question={questions[number].question}
      answers={questions[number].answers}
      userAnswer={userAnswers ? userAnswers[number] : undefined}
      callback={checkAnswer}
    />
    )}
    {!gameOver && !loading && 
    userAnswers.length === number + 1 && 
    number !== TOTAL_QUESTIONS - 1 ? (
      <Button color="primary" variant="contained" className='next' onClick={nextQuestion}>
      Next Question
      </Button>
    ) : null}
    </Wrapper>
    </ThemeProvider>
    </>
  );
}

export default App;
