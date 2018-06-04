import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import AppPage from '../containers/app';
import MainPage from '../containers/main';
import NotFoundPage from '../containers/notFound';

let rootPath = "/react-webpack-boilerplate/dist/";
let checkParams = ({match}) => {
    if (match.params.name) {
        return <Redirect to={rootPath + "404"} />;
    }
};

const appRoutes = () => (
    <Router>
        <AppPage>
            <Switch>
                <Route exact path={rootPath} component={MainPage}/>
                <Route path={rootPath + "test:id(\d+)/:name?"} render={checkParams} />
                <Route path={rootPath + "*"} component={NotFoundPage} />
            </Switch>
        </AppPage>
    </Router>
);

export default appRoutes;
