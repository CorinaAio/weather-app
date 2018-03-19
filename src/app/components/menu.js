import React from 'react';

export default function({items, onClickHandler = () => console.log("trololo")}) {
	return (
		items.map(item => <span onClick={onClickHandler}>{item}</span>)
	);
}