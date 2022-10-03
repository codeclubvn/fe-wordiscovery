export enum EObject { Player, App }

export interface GameWord {
    word: string,
    createdBy: EObject
}