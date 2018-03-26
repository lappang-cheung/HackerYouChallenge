import React, { Component } from 'react';
import axios from 'axios';

import ListItem from './ListItem';

class List extends Component
{

    state = {
        beers: [],
        store: []
    }

    componentWillMount()
    {
        axios.get('/list').then((res) => {
            this.setState({ beers: res.data.result });

        }).catch(err => {
            console.log(err);
        });
    }

    render()
    {
        return(
            <div>
                <h1>This is the Beer List page</h1>
                <ListItem />
            </div>
        )
    }
}

export default List;