import { create } from "zustand";

type State = {
  adminPassword: string;
};
type Action = {
  setAdminPassword: (password: State["adminPassword"]) => void;
};

export const useStore = create<State & Action>((set) => ({
  adminPassword: "",
  setAdminPassword: (password) => set(() => ({ adminPassword: password })),
}));
