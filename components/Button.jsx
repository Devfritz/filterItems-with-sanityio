import React from 'react'

const Button = ({filterItems,categories,selectButton}) => {
	return (
		<div className='buttons'>
			{categories.map((cat,k) => {
					 console.log(cat)
			 return (
			
				<button key={k} className="btn"  type="button" onClick={() => filterItems(cat)}>{cat}</button>
			 )	
			})}
			
			
		</div>
	)
}

export default Button
