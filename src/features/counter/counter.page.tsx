import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counter.slice";

function CounterPage() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1> Counter page</h1>

      <p className="text-white text-3xl">{count}</p>

      <div className="space-x-4">
        <button
          className="bg-red-400 py-3 px-5"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          -
        </button>
        <button
          className="bg-red-400 py-3 px-5"
          onClick={() => {
            dispatch(increment());
          }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default CounterPage;
