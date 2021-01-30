export type PokemonCardProps = {
    pokemon: Pokemon,
    opened: boolean,
    open: () => void,
}

export type Pokemon = {
    id: string,
    abilities: string[],
    stats: {
        hp: number,
        attack: number,
        defense: number,
        specialAttack: number,
        specialDefense: number,
        speed: number
    },
    type: PokemonType,
    img: string,
    name: string,
    base_experience: number,
    height: number,
    values: {
        top: string | number,
        right: string | number,
        bottom: string | number,
        left: string | number
    }
}

export enum PokemonType {
    FLYING = 'flying',
    POISON = 'poison',
    ELECTRIC = 'electric',
    GRASS = 'grass',
    FIRE = 'fire',
}