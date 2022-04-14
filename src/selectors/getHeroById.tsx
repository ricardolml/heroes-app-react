import { heroes } from "../data/Hero";

export const getHeroesById = ( id : string ) => {
    return heroes.find( hero => hero.id === id );
}