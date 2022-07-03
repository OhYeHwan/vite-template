import create from "zustand";

interface CountState {
  count: number;
  increaseCount: () => void;
  setNumber: (input: number) => void;
}

const useStore = create<CountState>((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  setNumber: (input: number) => set({ count: input }),
}));

const Zustand = () => {
  const { count, increaseCount, setNumber } = useStore();

  return (
    <div>
      <header>
        <p>
          <button type="button" onClick={increaseCount}>
            count is: {count}
          </button>
          <button onClick={() => setNumber(0)}>reset</button>
        </p>
      </header>
    </div>
  );
};

export default Zustand;
