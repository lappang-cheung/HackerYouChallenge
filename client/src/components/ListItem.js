import React from 'react';
import { Link } from 'react-router-dom';

const ListItem = ({ beer, selectBeer }) => {

    const img_url = beer.image_thumb_url;
    const name = beer.name;
    const style = beer.style;
    const varietal = beer.varietal;
    const tertiaryCategory = beer.tertiaryCategory;
    const id = beer.id;

    if(img_url == null)
    {
        return(
            <li className="list__beer--item">
                <Link to={`/beer/${id}`}>
                    <div className="no-image">
                        <p>{name}</p>
                    </div>
                </Link>
                <p>{tertiaryCategory}</p>
                <p>{style}</p>
                <p>{varietal}</p>
            </li>
        )
    }
    else
    {
        return(
            <li className="list__beer--item">
                <Link to={`/beer/${id}`}>
                    <div className="image">
                        <img className="beer-img" src={img_url}/>
                        <p>{name}</p>
                    </div>
                </Link>
                <p>{tertiaryCategory}</p>
                <p>{style}</p>
                <p>{varietal}</p>
            </li>
        )
    }
}

export default ListItem;