import { heroes } from "../data/Hero";

export const getHeroesByPublicher = ( publisher : string ) => {

    const validPublicher = ['DC Comics', 'Marvel Comics'];

    if ( !validPublicher.includes(publisher) ){
        throw new Error(`Publishe ${publisher} no es correcto`);
    }

    return heroes.filter( hero => hero.publisher === publisher );
}