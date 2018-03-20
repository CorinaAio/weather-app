import React from 'react';
import classnames from 'classnames';

import './menu-item.scss';


export default function({value, onClickHandler, isSelected}) {

	function getClasses() {
		return classnames('menu-item', {'selected': isSelected});
	}
	
	return <span className={getClasses()} onClick={onClickHandler}>{value}</span>
}