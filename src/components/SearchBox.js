import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
	return (
		<div className='pa2'>
			<input 
			className='tc pa3 ba b--washed-red bg-washed-yellow'
			type='search' 
			placeholder='Search Cato' 
			onChange={searchChange}
			 />
		 </div>
	);
}

export default SearchBox;