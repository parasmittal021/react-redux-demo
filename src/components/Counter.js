import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store";
const Counter = () => {
  const counterValue = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleMethod());
  };
  const dispatch = useDispatch();
  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };
  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };
  const increment = () => {
    dispatch(counterActions.increase(10));
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counterValue}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increment}>Increment by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
