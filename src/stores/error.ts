import { create } from 'zustand';

type State = {
  error: string;
};

type Action = {
  setError: (error: State['error']) => void;
};

const useErrorStore = create<State & Action>((set) => ({
  error: '',

  setError: (error) => set(() => ({ error: error })),
}));

export default useErrorStore;
