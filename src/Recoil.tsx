import { atom, useRecoilState, selector, useResetRecoilState } from "recoil";

const countState = atom({
  key: "countState",
  default: 0,
});

const Recoil = () => {
  const [count, setCount] = useRecoilState(countState);
  const resetCount = useResetRecoilState(countState);

  const increaseCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <header>
        <p>
          <button type="button" onClick={increaseCount}>
            count is: {count}
          </button>

          <button onClick={resetCount}>reset</button>
        </p>
      </header>
    </div>
  );
};

export default Recoil;
