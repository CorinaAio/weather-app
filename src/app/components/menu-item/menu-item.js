import React from 'react';
import './menu-item.scss';


export default function({value, onClickHandler}) {
	return <span className="menu-item" onClick={onClickHandler}>{value}</span>
}