import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ beer, selectBeer }) => {

    const img_url = beer.image_thumb_url;
    const name = beer.name;
    const id = beer.id;

    if(img_url == null)
    {
        return(
            <li className="list__beer--item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <Link to={`/beer/${id}`}>
                    <div className="no-image">
                       <img className="beer-img" src="https://dx5vpyka4lqst.cloudfront.net/products/458331/images/thumb.png" alt="empty bottle" />
                    </div>
                </Link>
                <p>{name}</p>
            </li>
        )
    }
    else
    {
        return(
            <li className="list__beer--item col-lg-4 col-md-6 col-sm-12 col-xs-12">
                <Link to={`/beer/${id}`}>
                    <div className="image">
                        <img className="beer-img" src={img_url} alt={name}/>
                    </div>
                </Link>
                <p>{name} </p>
            </li>
        )
    }
}

export default ListItem;