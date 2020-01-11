import React from 'react';
import {Link} from 'react-router-dom';
import { getFormattedValue } from '../../utils/helperFunctions';
import './style.scss';

const SingleItem = ({ propertyitem }) => {
	return (
		<div className="col-xs-12 col-sm-6 col-md-4 col-lg-3" key={propertyitem.id}>
			<div className="card my-2 stylishcard">
			  	<img src={propertyitem.imgUrl} className="card-img-top" alt="samplePicture" />
				  <div className="card-body">
				    <h5 className="ca rd-title">{propertyitem.type}</h5>
				    <p className="card-text">City: {propertyitem.location}</p>
					    {
					    	(propertyitem.available_for_rent) ? 
								<p className="card-text">Rent Price: {getFormattedValue(propertyitem.monthly_rent)}</p> 
							: 	<p className="card-text">Sale Price: {getFormattedValue(propertyitem.sale_price)}</p>
					    }
				    <Link className="btn btn-primary btn-sm" to={`/itemlist/${propertyitem.id}`}>View Details</Link>
				  </div>
			</div>
		</div>
	)
}

export default SingleItem;