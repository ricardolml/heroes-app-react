import React, { useMemo } from 'react'
import { Redirect, useParams } from 'react-router'
import { heroImages } from '../../helpers/HeroImages';
import { getHeroesById } from '../../selectors/getHeroById';

// import batman from '../../assets/heroes/dc-batman.jpg'; para importacion de recurso estatico

// const heroImages= require.context('../../assets/heroes', true);

type paramsURL = {
    heroeId : string;
}


export const HeroScreen = ( { history } : any )  => {

    const { heroeId } = useParams<paramsURL>();

    const hero = useMemo(() => getHeroesById(heroeId), [ heroeId ] );

    if( !hero ){
        return <Redirect to='/' />;
    }
    
    const {
        superhero,
        publisher,
        alter_ego,
        first_appearance,
        characters
    } =  hero ;

    const handleReturn = () => {
        if( history.length <= 2 ){
            return history.push('/');
        }
        history.goBack();
    }

    // console.log(heroImg(`./${heroeId}.jpg`));

    return (
        <div>
            <div className="row mt-5">
                <div className="col-4">
                    {/* desde public assets */}
                    {/* <img src={`../assets/heroes/${heroeId}.jpg`} alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" /> */}
                    {/* <img src={ heroImages(`./${heroeId}.jpg`).default } alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" /> */}
                    <img src={ `./assets/heroes/${heroeId}.jpg` } alt={superhero} className="img-thumbnail animate__animated animate__fadeInLeft" />
                </div>
                <div className="col-8 animate__animated animate__fadeIn">
                    <h3>{ superhero }</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"> <b> Alter Ego: </b> { alter_ego } </li>
                        <li className="list-group-item"> <b> Publisher </b> { publisher } </li>
                        <li className="list-group-item"> <b> First appearence </b> { first_appearance } </li>
                    </ul>

                    <h5>Characters</h5>
                    <p> { characters } </p>

                    <button className="btn btn-info" onClick={handleReturn} >
                        Return
                    </button>
                </div>
            </div>
        </div>
    )
}
