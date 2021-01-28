import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Main } from '../Pages/Main';
import { About } from '../Pages/About';
import { Coding } from '../Pages/Coding';
import { Music } from '../Pages/Music';
import { Blog } from '../Pages/Blog';
import { Contact } from '../Pages/Contact';

export const Routes = (props) => {
    return (
        <div>
            <Switch>
                <Route exact path="/"><Main darkMode={props.darkMode} /></Route>
                <Route exact path="/About"><About /></Route>
                <Route exact path="/Coding"><Coding /></Route>
                <Route exact path="/Music"><Music /></Route>
                <Route exact path="/Blog"><Blog /></Route>
                <Route exact path="/Contact"><Contact /></Route>
            </Switch>
        </div>
    )
}
