import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Main } from '../Pages/Main';
import { Interests } from '../Pages/Interests/Interests';
import Blog from '../Pages/Blog';
import { Contact } from '../Pages/Contact';
import FocusedBlog from '../Pages/FocusedBlog';
export const Routes = (props) => {
    return (
        <div className='routes'>
            <Switch>
                <Route exact path='/'><Main darkMode={props.darkMode} /></Route>
                <Route exact path='/Interests'><Interests darkMode={props.darkMode} colorMode={props.colorMode} /></Route>
                <Route exact path='/Blog'><Blog darkMode={props.darkMode} /></Route>
                <Route exact path='/Contact'><Contact darkMode={props.darkMode} /></Route>
                <Route exact path='/Focused/:post'><FocusedBlog darkMode={props.darkMode} /></Route>         
            </Switch>
        </div>
    )
}
