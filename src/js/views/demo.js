import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [detail, setDetail] = useState([]);
	const params = useParams();

	async function getDetails() {
		const response = await fetch(store.details);
		console.log(store.details, "HOLA");

		const responseJson = await response.json();
		console.log(responseJson, "aaaa");
		setDetail(responseJson.result.properties);
		console.log(responseJson.result.properties, "AAA");
	}
	useEffect(() => {
		getDetails();
	}, []);
	return (
		<div className="container">
			<ul className="list-group">
				<p> NAME: {detail.name}</p>
				<p> HEIGHT: {detail.height}</p>
				<p> HAIR COLOR: {detail.hair_color}</p>
				<p> SKIN COLOR: {detail.skin_color}</p>
				<p> EYE COLOR: {detail.eye_color}</p>
				<p> GENDER: {detail.gender}</p>
				<p>BIRTH YEAR: {detail.birth_year}</p>
			</ul>
			<br />
			<Link to="/">
				<button
					className="btn btn-primary"
					onClick={() => {
						actions.deleteDetails(detail);
					}}>
					Back home
				</button>
			</Link>
		</div>
	);
};
