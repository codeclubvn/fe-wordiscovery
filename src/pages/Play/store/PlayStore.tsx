import { makeAutoObservable } from "mobx"
import words from 'an-array-of-english-words';
import { capitalizeFirstLetter } from "../../../utils";
import { createContext } from "react";

export enum EStatus { Menu, Playing, GameOver }

const MAX_TURN_NUMBER = 3

export class PlayStore {
    score: number = 0
    status: EStatus = EStatus.Menu

    currentWord: string = ''
    currentAnswer: string = ''
    previousAnswers: string[] = []

    turns: number = MAX_TURN_NUMBER

    constructor() {
        makeAutoObservable(this)
    }

    setCurrenAnswer = (value: string) => {
        this.currentAnswer = value
    }

    changeScore = () => {
        this.score++;
    }

    getRandomWord = () => {
        var word = capitalizeFirstLetter(words[Math.floor(Math.random() * words.length)])
        console.log('word', word)
        this.currentWord = word
    }

    checkAnswer = () => {
        const rs = this.currentWord[this.currentWord.length - 1]?.toLowerCase() == this.currentAnswer[0]?.toLowerCase()

        if (rs) {
            this.score++
        } else {
            this.score--
        }
        
        this.getRandomWord()
        this.currentAnswer = ''

        if(this.score < 0){
            this.resetStates()
            this.status = EStatus.GameOver
        }
    }

    resetStates = () => {
        this.currentWord = ''
        this.currentAnswer = ''
        this.previousAnswers = []
        this.score = 0
    }

    onStartGame = () => {
        this.getRandomWord()
        this.status = EStatus.Playing
    }
}

export const playStore = new PlayStore()
export const PlayContext = createContext<PlayStore>(playStore)