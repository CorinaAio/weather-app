import React from 'react';
import classnames from 'classnames';

/*
	dummy component that renders the name of the city in the menu
*/
export default function({value, onClickHandler, isSelected}) {

	function getClasses() {
		return classnames('menu-item', {'selected': isSelected});
	}
	
	return <span className={getClasses()} onClick={onClickHandler}>{value}</span>
}