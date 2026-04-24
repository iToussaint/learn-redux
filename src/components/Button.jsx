function Button({ children, handleClick }) {
  return (
    <button onClick={handleClick} className="bg-slate-600 text-slate-200 p-2 rounded-sm ">
      { children }
    </button>
  );
}

export default Button;
