import React, { useMemo } from 'react';
import { getHeroesByPublicher } from '../../selectors/getHeroesByPublisher';
import { Hero } from '../../interfaces/Hero.interface';
import { HeroCard } from './HeroCard';

type PublisherType = {
    publisher: string
}

export const HeroList = ( { publisher } : PublisherType ) => {

    const heroes: Hero[] = useMemo(() => getHeroesByPublicher(publisher), [ publisher ] );

    return (
        <div className='row row-cols-1 row-cols-md-4 g-4 animate__animated animate__fadeIn'>
            {
                heroes.map( (hero: Hero) => (
                    // <HeroCard key  />
                    <HeroCard key={hero.id} {...hero}  />
                ))
            }
        </div>
    )
}
