import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { DropdownButton, Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>
			<DropdownButton id="dropdown-item-button-Warning " title={" Favorite " + store.favorites.length}>
				{store.favorites.length > 0 ? (
					store.favorites.map((fav, index) => {
						return (
							<Dropdown.Item key={index}>
								<p>{fav}</p>
								<i
									className="far fa-trash-alt"
									onClick={() => {
										actions.deleteItem(index);
									}}
								/>
							</Dropdown.Item>
						);
					})
				) : (
					<Dropdown.Item>Empty</Dropdown.Item>
				)}
			</DropdownButton>
		</nav>
	);
};
