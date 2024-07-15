import  {useEffect, useState } from 'react';
import Options from '../src/components/Options/Options'
import Feedback from '../src/components/Feedback/Feedback'
import Description from './components/Description/Description';
import Notification from './components/Notification/Notification';


function App() {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const positivePercentage = Math.round((feedback.good/ totalFeedback) * 100);


  return (
    <div>
     <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} total={totalFeedback}/>
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} total={totalFeedback} positive_feedback={positivePercentage} />
      ) : (
        <Notification/>
      )}
    </div>
  );
}

export default App;
