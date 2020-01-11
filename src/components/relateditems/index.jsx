import React from 'react';


const RelatedItems = (propertyitem) => {
	return (
		<div className="relatedproperties">
				{ 
					propertyitem.map(item => (
						<SingleItem key={item.id} propertyitem={item} />	
					)) 
				}
		</div>
	)
}

export default RelatedItems;