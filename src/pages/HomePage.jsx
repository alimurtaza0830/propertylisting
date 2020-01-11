import React, { Component, Fragment } from 'react';
import ItemList from '../components/itemlist';
import Search from '../components/search';
import { fetchData } from '../services/DataFetchService';

class HomePage extends Component {
	
	state = {
		propertyitems: [],
		searchQuery: "",
	}

	async componentDidMount() {
		const propertyitems = await fetchData();
		this.setState({ propertyitems: propertyitems });
	}

	handleSearch = query => {
		this.setState({ searchQuery: query });
	}

	getSearchData = () => {
		const { searchQuery, propertyitems: allProperties } = this.state;
		let filtered = allProperties;
		if ( searchQuery ) 
			filtered = allProperties.filter(p => 
				p.type.toLowerCase().startsWith(searchQuery.toLowerCase()));
		return filtered;
	}

	render() {
		const { searchQuery } = this.state;
    	const  filtered  = this.getSearchData();
   
	    return (
	    	<Fragment>
	    		<div className="container">
	    			<Search value={searchQuery} onChange={this.handleSearch}/>
	        		<ItemList propertyitems={filtered}/>
	    		</div>
	    	</Fragment>
	    );
	}
};
export default HomePage;
