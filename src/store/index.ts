/* eslint-disable no-unused-vars */
import create from "zustand";
import { devtools } from "zustand/middleware";
import { filterPlayers } from "../helpers";

interface MatchState {
  players: string[];
  location: string;
  date: Date;
  creator: string;
  max_players: number;
  random: boolean;
  setLocation: (location: string) => void;
  setPlayers: (players: string[]) => void;
  setDate: (date: Date) => void;
  setCreator: (creator: string) => void;
  setMaxPlayers: (max_players: number) => void;
  setRandom: (random: boolean) => void;
}

export const matchStore = create<MatchState>(
  devtools(
    (set) => ({
      players: [],
      location: "",
      date: new Date(),
      creator: "",
      max_players: 2,
      random: true,
      colors: ["#ffffff", "#2C3590"],
      setLocation: (location) => set(() => ({ location })),
      setPlayers: (players) => set(() => ({ players: filterPlayers(players) })),
      setDate: (date) => set(() => ({ date })),
      setCreator: (creator) => set(() => ({ creator })),
      setMaxPlayers: (max_players) => set(() => ({ max_players })),
      setRandom: (random) => set(() => ({ random })),
    }),
    "matchStore"
  )
);
