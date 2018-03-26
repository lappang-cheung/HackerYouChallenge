import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import List from './List';
import Page from './Page';

const Main = () => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={List} />
                    <Route path="/beer/:id" exact component={Page} />
                </Switch>
            </BrowserRouter>
        </div>
    )
};

export default Main;