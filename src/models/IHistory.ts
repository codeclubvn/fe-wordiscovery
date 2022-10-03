import { GameWord } from "."

export interface IHistory {
  score: number
  createdAt: number
  gameProgress: GameWord[]
}
  