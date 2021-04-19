import { Route, Switch } from 'react-router-dom';
import { Main } from '../Pages/Main';
import { Interests } from '../Pages/Interests/Interests';
import { Contact } from '../Pages/Contact';
import Blog from '../Pages/Blog';
import FocusedBlog from '../Pages/FocusedBlog';
import FocusedProject from '../Pages/Interests/FocusedProject';
export const Routes = (props) => {
    return (
        <div className='routes'>
            <Switch>
                <Route exact path='/'><Main colorMode={props.colorMode} /></Route>
                <Route exact path='/Interests'><Interests darkMode={props.darkMode} colorMode={props.colorMode} /></Route>
                <Route exact path='/Blog'><Blog darkMode={props.darkMode} colorMode={props.colorMode} /></Route>
                <Route exact path='/Contact'><Contact darkMode={props.darkMode} colorMode={props.colorMode} /></Route>
                <Route exact path='/Focused/:post'><FocusedBlog darkMode={props.darkMode} colorMode={props.colorMode} /></Route>
                <Route exact path='/FocusedProject/:project'><FocusedProject darkMode={props.darkMode} colorMode={props.colorMode} /></Route>         
            </Switch>
        </div>
    )
}
