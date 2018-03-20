import React from 'react';
import MenuItem from '../menu-item/menu-item';
import './menu.scss';

export default function({items = new Map(), onClickHandler = () => console.log("trololo")}) {

	return (
		<div className="menu">
			{
				Array.from(items.entries()).map(([key, value]) => <MenuItem value={value} onClickHandler={onClickHandler.bind(this, key)} />)
			}
		</div>
	);
	
}