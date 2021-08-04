import React from 'react'
import Image from 'next/image'

const Menu = ({items}) => {
	return (
		<div className="item">
			{items.map(item => (
                   <div className="item-con" key={item.id}> 
				     <div className="item-container">
                         <Image
						    src={item.image}
                                alt={item.title}
                                width={500}
                                height={500}
								placeholder='blur'
						 />
						 <h2>{item.title}</h2>
						 <p>{item.description}</p>
					</div>

					</div>
			))}
			
		</div>
	)
}

export default Menu
