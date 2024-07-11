const Feedback = ({ feedback, total }) => {
  const positivePercentage = Math.round((feedback.good/ total) * 100)
  ;

  return (
    <>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage}%</p>
    </>
  );
};

export default Feedback;