import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { NavBar } from '../components/ui/NavBar';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { HeroScreen } from '../components/heroes/HeroScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { SearchScreen } from '../components/heroes/SearchScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <NavBar/>

            <div className='container mt-3'>
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroeId" component={HeroScreen} />                
                    <Route exact path="/dc/" component={DcScreen} />
                    <Route exact path="/search/" component={SearchScreen} />
                    <Redirect to="/marvel" />             
                </Switch>
            </div>
        </>
    )
}
