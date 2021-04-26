export interface User {
    email: string
    firstname: string,
    lastname: string,
    account: Account
}

export interface Account {
    username: string,
    characters: Character[]
}

export interface Character {
    name: string
    level: number
    hp: number,
    mana: number
}