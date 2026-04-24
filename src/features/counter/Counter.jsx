import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "./counterSlice";
import Button from "../../components/Button";
import { useState } from "react";

function Counter() {
  const count = useSelector((currentState) => currentState.counter.count);
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(0);
  return (
    <>
      <div className="flex gap-5 p-10 items-center">
        <Button
          handleClick={() => {
            dispatch(counterActions.increment());
          }}
        >
          Increment
        </Button>
        <p>{count}</p>
        <Button
          handleClick={() => {
            dispatch(counterActions.decrement());
          }}
        >
          Decrement
        </Button>
      </div>

      <div className="flex gap-4 p-10">
        <input
          value={amount}
          onChange={(event) => {
            setAmount(event.target.value);
          }}
          type="number"
          placeholder="Enter amount to increment by"
          className="bg-slate-300 px-2 rounded-sm"
        />
        <Button
          handleClick={() => {
            dispatch(counterActions.incrementByAmount({ amount }));
          }}
        >
          Increment by Amount
        </Button>
      </div>

      <Button
        handleClick={() => {
          dispatch(counterActions.reset());
          setAmount(0)
        }}
      >
        Reset
      </Button>
    </>
  );
}

export default Counter;
