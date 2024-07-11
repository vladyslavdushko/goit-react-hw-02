import clsx from "clsx";
import styles from './Options.module.css'
function Options({ updateFeedback, resetFeedback, total }) {

  return (
    <div className={styles.container}>
      <button onClick={() => updateFeedback('good')}>Good</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button onClick={() => updateFeedback('bad')}>Bad</button>
      <button className={clsx(total ? 0 : styles.reset)} onClick={resetFeedback}>Reset</button>
    </div>
  );
}

export default Options;