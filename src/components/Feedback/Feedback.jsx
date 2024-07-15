const Feedback = ({ feedback, total, positive_feedback }) => {

  return (
    <>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive_feedback}%</p>
    </>
  );
};

export default Feedback;