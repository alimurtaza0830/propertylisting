import React, { Fragment } from 'react';
import SingleItem from '../singleitem';
import {fetchData} from '../../services/DataFetchService';
import { getFormattedValue } from '../../utils/helperFunctions'; 

// import component styles
import './style.css';


const ItemDetails = (props) => {
	const currId = parseInt(props.match.params.id);
	const list = fetchData();
	const currentItem = list.find(item => item.id === currId);
	const relatedItems = list.filter(relitem => 
		relitem.type === currentItem.type
		// if you need location based filter enable the following
		// && relitem.location === currentItem.location
	);

	return (
		<Fragment>
			<div className="row">
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
					<div className="img-wrapper my-3">
						<img src={currentItem.imgUrl} alt="samplePicture" className="img-fluid" />
					</div>
				</div>
				<div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 my-3">
					<div className="desc-wrapper">
						<div className="row">
							<div className="col">
								<h2>{currentItem.type}</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-8">
								<div className="description">
									<p>
										<span>
											<strong>Located in: </strong>
										</span>
										{currentItem.location}
									</p>
									<p>	
										{ 
											(currentItem.available_for_rent) 
											? <span className="badge badge-primary">Available for Rent </span> 
											: null 
										}
									</p>
								<p><strong>Description: </strong>{currentItem.description}</p>
								</div>
							</div>
							<div className="col-sm-4 col-md-4">
								<ul className="list-group">
								  <li className="list-group-item"><strong>ID: </strong>{currentItem.id}</li>
								  {
								  	(currentItem.available_for_rent)
								  	? <li className="list-group-item"><strong>Rent: </strong>{getFormattedValue(currentItem.monthly_rent)}</li>
								  	: <li className="list-group-item"><strong>Sale Price: </strong>{getFormattedValue(currentItem.sale_price)}</li>
								  }
								  <li className="list-group-item"><strong>Contact Person: </strong>{currentItem.contact_person} <span>{currentItem.agent_email}</span></li>
								  
								</ul>
							</div>
						</div>
					</div>

				</div>
			</div>
				<div className="row">
					<div className="col-md-12">
						<div className="py-5 text-center">
							<h5> Related Property List </h5>
						</div>
					</div>
				</div>
				<div className="row">
					{
						relatedItems.map(item => (
							<SingleItem key={item.id} propertyitem={item} />
						))
					}
				</div>
		</Fragment>
	)
}

export default ItemDetails;