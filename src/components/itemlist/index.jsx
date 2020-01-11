import React from 'react';
 import SingleItem from '../singleitem';


const ItemList = ({ propertyitems }) => {

	return (
		<div data-test="listingComponent" className="row">
			{ 
				propertyitems.map(item => (
					<SingleItem key={item.id} propertyitem={item} />	
				)) 
			}
		</div>
	)
}

export default ItemList;