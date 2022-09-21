import { makeAutoObservable, runInAction, reaction } from "mobx"
import words from 'an-array-of-english-words';

class EnglishStore {
    words = words

    constructor() {
        makeAutoObservable(this)
    }

    getRandomWord = () => {
        var word = this.capitalizeFirstLetter(words[Math.floor(Math.random() * words.length)])
        console.log('word', word)
        return word
    }
    capitalizeFirstLetter(value: string) {
        return value[0].toUpperCase() + value.slice(1);
    }
}

export const englishStore = new EnglishStore()