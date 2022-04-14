import React from 'react';
import { Link } from 'react-router-dom';
import { heroImages } from '../../helpers/HeroImages';


export const HeroCard = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
    characters,
}: any): JSX.Element => {

    return (
        <div className="col">
            <div className="card mb-3" style={{ maxWidth: 540 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`./assets/heroes/${id}.jpg`} className='img-fluid rounded-start' alt={superhero} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-tittle"> {superhero} </h5>
                            <p className="card-text">
                                {alter_ego}
                            </p>
                            {
                                (alter_ego !== characters)
                                && <p> {characters} </p>
                            }

                            <p className="card-text"> <small className="text-muted"> {first_appearance} </small> </p>

                            <Link to={`./hero/${id}`}  >Ver mas...</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
