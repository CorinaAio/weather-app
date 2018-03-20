import React from 'react';
import MenuItem from '../menu-item/menu-item';

/*
	this component renders a list of menu items
*/
export default function(props) {
	let {items = new Map(), onClickHandler = () => {}, selectedItem, isSelected = () => false} = props;

	return (
		<div className="menu">
			{
				Array.from(items.entries()).map(([key, value]) => {
					return <MenuItem value={value} onClickHandler={onClickHandler.bind(this, key)} isSelected={isSelected(key)} />
				})
			}
		</div>
	);
	
}