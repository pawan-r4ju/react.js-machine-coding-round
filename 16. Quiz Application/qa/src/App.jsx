import { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Lisbon"],
    answer: "Paris",
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    answer: "4",
  },
  {
    question: "What is the capital of Japan?",
    options: ["Seoul", "Tokyo", "Beijing", "Bangkok"],
    answer: "Tokyo",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleAnswerClick = (answer) => {
    setUserAnswers([...userAnswers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowResults(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      {showResults ? (
        <div>
          <h1 className="text-2xl mb-4">Quiz Results</h1>
          <p>
            You answered {userAnswers.filter((answer, index) => answer === questions[index].answer).length} out of {questions.length} questions correctly.
          </p>
          <button onClick={handleRestart} className="px-4 py-2 bg-blue-500 text-white rounded mt-4">
            Restart Quiz
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl mb-4">{questions[currentQuestion].question}</h1>
          <div className="flex flex-col gap-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(option)}
                className="px-4 py-2 bg-gray-200 rounded"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;