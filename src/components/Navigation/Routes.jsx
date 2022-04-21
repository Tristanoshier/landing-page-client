import { Route, Switch } from "react-router-dom";
import { Main } from "../Pages/Main";
import { Contact } from "../Pages/Contact";
import { Blog } from "../Pages/Blog";
import FocusedBlog from "../Pages/FocusedBlog";
import FocusedProject from "../Pages/FocusedProject";
import { Projects } from "../Pages/Projects";

export const Routes = props => {
  return (
    <div className="routes">
      <Switch>
        <Route exact path="/">
          <Main colorMode={props.colorMode} />
        </Route>
        <Route exact path="/Blog">
          <Blog darkMode={props.darkMode} colorMode={props.colorMode} />
        </Route>
        <Route exact path="/Projects">
          <Projects darkMode={props.darkMode} colorMode={props.colorMode} />
        </Route>
        <Route exact path="/Contact">
          <Contact darkMode={props.darkMode} colorMode={props.colorMode} />
        </Route>
        <Route exact path="/Focused/:post">
          <FocusedBlog darkMode={props.darkMode} colorMode={props.colorMode} />
        </Route>
        <Route exact path="/FocusedProject/:project">
          <FocusedProject
            darkMode={props.darkMode}
            colorMode={props.colorMode}
          />
        </Route>
      </Switch>
    </div>
  );
};
