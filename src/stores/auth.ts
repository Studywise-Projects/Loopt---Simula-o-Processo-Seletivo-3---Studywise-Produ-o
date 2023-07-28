import { create } from 'zustand';

type State = {
  username: string;
  password: string;
  loggedIn: boolean;
};

type Action = {
  setUsername: (auth: State['username']) => void;
  setPassword: (auth: State['password']) => void;
  setLoggedIn: (auth: State['loggedIn']) => void;
};

const useAuthStore = create<State & Action>((set) => ({
  username: '',
  password: '',
  loggedIn: false,

  setUsername: (username) => set(() => ({ username: username })),
  setPassword: (password) => set(() => ({ password: password })),
  setLoggedIn: (loggedIn) => set(() => ({ loggedIn: loggedIn })),
}));

export default useAuthStore;
