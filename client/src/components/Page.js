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
            <div className="product row">
                <div className="product__left col-lg-6 col-md-6">
                    <img className="product__left--image" src={this.state.beer.image_thumb_url} alt={this.state.beer.name}/>
                </div>
                <div className="product__right col-lg-6 col-md-6">    
                    <h1 className="product__right--title">{this.state.beer.name}</h1>
                    <p className="product__right--paragraph">Available in these store:</p>
                    <ul className="product__right--list">
                        {this.state.stores.map((store) => {
                            return <li className="items" key={store.name}>{store.name}</li>})
                         }
                    </ul>
                </div>
            </div>
        )
    }
}

export default Page;