import { makeAutoObservable, autorun } from "mobx"
import words from 'an-array-of-english-words';
import { capitalizeFirstLetter } from "../../../utils";
import { createContext } from "react";

export enum EStatus { Menu, Playing, GameOver }
export enum EError { None, NotValidWord, TimeOut, Duplicated, WrongRule }
export enum EObject { Player, App }

export interface GameWord {
    word: string,
    createdBy: EObject
}

const MAX_TURN_NUMBER = 3
const MAX_TIME = 10

const errors = {
    [EError.None]: 'none',
    [EError.NotValidWord.toString()]: 'từ không hợp lệ',
    [EError.TimeOut]: 'hết giờ',
    [EError.Duplicated]: 'từ trùng',
    [EError.WrongRule]: 'sai luật',
}

export class PlayStore {
    constructor() {
        makeAutoObservable(this)
    }

    score: number = 0
    status: EStatus = EStatus.Menu
    errorStatus: EError = EError.None
    timeLeft: number = MAX_TIME
    refreshIntervalId: any
    currentWord: string = ''
    currentAnswer: string = ''
    previousAnswers: string[] = []
    turns: number = MAX_TURN_NUMBER
    gameProgress: GameWord[] = []

    get percentage() {
        return this.timeLeft / MAX_TIME * 100
    }

    get errorMsg() {
        return errors[this.errorStatus.toString()]
    }

    setCurrenAnswer = (value: string) => {
        this.currentAnswer = value
    }

    changeScore = () => {
        this.score++;
    }

    getRandomWord = () => {
        var word = capitalizeFirstLetter(words[Math.floor(Math.random() * words.length)])
        this.currentWord = word
        this.gameProgress.push({
            word: this.currentWord,
            createdBy: EObject.App
        } as GameWord)
    }

    clearInterval = () => clearInterval(this.refreshIntervalId)

    countDown = () => this.timeLeft = this.timeLeft - 1

    onGameOver = (errorStatus: EError) => {
        this.errorStatus = errorStatus
        this.status = EStatus.GameOver
        this.clearInterval()
    }

    checkValidWord = () => {
        const isValidEnglishWord = words.includes(this.currentAnswer)
        if (!isValidEnglishWord) {
            this.onGameOver(EError.NotValidWord)
        }
        return isValidEnglishWord
    }

    checkRule = () => {
        const isMatchRule = this.currentWord[this.currentWord.length - 1]?.toLowerCase() === this.currentAnswer[0]?.toLowerCase()
        if (!isMatchRule) {
            this.onGameOver(EError.WrongRule)
        }
        return isMatchRule
    }

    checkDuplicate = () => {
        console.log('previousAnswers', this.previousAnswers)
        const isDuplicated = this.previousAnswers.includes(this.currentAnswer)
        if (isDuplicated) {
            this.onGameOver(EError.Duplicated)
        }
        return isDuplicated
    }

    onRightAnswer = () => {
        this.gameProgress.push({
            word: this.currentAnswer,
            createdBy: EObject.Player
        } as GameWord)
        this.previousAnswers.push(this.currentAnswer)
        this.score++
        this.getRandomWord()
        this.currentAnswer = ''
        this.timeLeft = MAX_TIME
    }

    checkAnswer = () => {
        if (!this.checkValidWord()) return;
        if (!this.checkRule()) return;
        if (this.checkDuplicate()) return;

        this.onRightAnswer()
    }

    resetStates = () => {
        this.currentWord = ''
        this.currentAnswer = ''
        this.previousAnswers = []
        this.score = 0
        this.timeLeft = MAX_TIME
        this.errorStatus = EError.None
    }

    onStartGame = () => {
        this.resetStates()
        this.getRandomWord()

        this.refreshIntervalId = setInterval(() => {
            if (this.timeLeft <= 0) {
                this.status = EStatus.GameOver
                this.errorStatus = EError.TimeOut
                this.clearInterval()
            }
            this.countDown()
        }, 1000);
        this.status = EStatus.Playing
    }
}

export const playStore = new PlayStore()
export const PlayContext = createContext<PlayStore>(playStore)