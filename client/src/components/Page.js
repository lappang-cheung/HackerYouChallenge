import React, {Component} from 'react';
import axios from 'axios';

class Page extends Component{ 
    constructor(props){
        super(props);
        this.state = {
            stores: [],
            beer: []
        }
    }

    componentWillMount(){
        const domain = process.env.REACT_APP_DOMAIN || 'localhost:8080'
        let id = this.props.match.params.id;
        
        axios.get(`/beer/store/${id}`).then((res) => {
            this.setState({stores: res.data.result});
        }).catch(error => {
            console.log(error);
        }).then(axios.get(`/beer/${id}`).then((res) => {
            this.setState({beer: res.data.result});
        }).catch(error => {
            console.log(error)
        }))       
    }

    render(){
        return(
            <div>
                <h1>{this.state.beer.name}</h1>
                <img src={this.state.beer.image_thumb_url} />
                <p>Available in these store:</p>
                <ul>
                    {this.state.stores.map((store) => {return <li>{store.name}</li>}) }
                </ul>
            </div>
        )
    }
}

export default Page;