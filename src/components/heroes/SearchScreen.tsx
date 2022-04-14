import React, { useMemo } from 'react';
import queryString from 'query-string';
import { useLocation } from 'react-router';
import { HeroCard } from './HeroCard';
import { useForm } from '../../hook/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';

export const SearchScreen = ({ history }: any) => {

    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);


    const [values, handleInputChange] = useForm({
        searchText: q
    });

    const { searchText }: any = values;

    const heroesFilter = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e: any) => {
        e.preventDefault();

        if (searchText === '') {
            return;
        }
        history.push(`?q=${searchText}`);
    }

    return (
        <div>
            <h1>Search Screen</h1>
            <hr />
            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSearch}>
                        <input type="text" placeholder="Buscar Hero" className="form-control" name='searchText' value={searchText} onChange={handleInputChange} />

                        <button type="submit" className="btn btn-primary  mt-2" >
                            Buscar
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4> Resultados </h4>
                    {
                        (q !== '' && heroesFilter.length === 0)
                        &&
                        (< div className="alert alert-danger" role="alert">
                            No se encontraron heroes con la busqueda { searchText }
                        </div>)
                    }
                    {
                        heroesFilter.map(hero => (
                            <HeroCard key={hero.id} {...hero} />
                        ))
                    }
                </div>
            </div>
        </div >
    )
}
