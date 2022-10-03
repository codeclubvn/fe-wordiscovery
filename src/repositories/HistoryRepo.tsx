import { IHistory } from "../models"

const HistoryKey = 'history'

 class HistoryRepo {
    getHistory = (): IHistory[] => {
        const items: IHistory[] = JSON.parse(localStorage.getItem(HistoryKey) ?? '[]');

        return items
    }
    setHistory = (items: IHistory[]): void => {
        localStorage.setItem(HistoryKey, JSON.stringify(items));
        // return items
    }
    addHistory = (item: IHistory): void => {
        var histories = this.getHistory()
        histories.push(item)
        this.setHistory(histories)
    }
    resetHistory=()=>{
        localStorage.removeItem(HistoryKey)
    }
}

export const historyRepo = new HistoryRepo();