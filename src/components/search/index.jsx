import React from 'react';


const Search = ({ value, onChange }) => {
	return (
		<input
	      type="text"
	      name="query"
	      className="form-control my-3"
	      placeholder="Search your favourite property type"
	      value={value}
	      onChange={e => onChange(e.currentTarget.value)}
	    />
	)
}

export default Search;