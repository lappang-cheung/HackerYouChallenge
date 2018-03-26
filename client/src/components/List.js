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

    items = () => {
        return(
            this.state.beers.map(
                beer => {
                    return(
                        <ListItem 
                            selectBeer = {() => this.selectBeer(beer)}
                            key = {beer.product_no}
                            beer= {beer}
                        />
                    )
                }
            )
        )
    }

    render()
    {
        return(
            <div className="list">
                <h1>This is the Beer List page</h1>
                <ul className="list__beer">
                    {this.items()}
                </ul>
            </div>
        )
    }
}

export default List;