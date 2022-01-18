import React, { useState } from 'react';
import Question from './components/question';
import questionData from './data';

const App = () => {
  const [questions, setQuestions] = useState(questionData);

  return (
    <main>
      <div className='container'>
        <h3>Questions and Answers about Login</h3>

        <section className='info'>
          {
            questions.map((question) => {
              return (
                <Question key={question.id} {...question} />
              );
            })
          }
        </section>
      </div>
    </main>
  );
}

export default App;

