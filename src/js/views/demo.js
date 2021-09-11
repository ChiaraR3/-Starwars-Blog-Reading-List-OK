import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.scss";

export const Demo = () => {
	const { store, actions } = useContext(Context);
	const [url, setUrl] = useState([]);

	async function getUrl() {
		const response = await fetch("https://www.swapi.tech/api/people");

		const responseJson = await response.json();
		console.log(responseJson, "!!!!!!");
		setUrl(responseJson.results.url);
		console.log(responseJson.results.url, "????");
	}
	useEffect(() => {
		getUrl();
	}, []);
	return (
		<div className="container">
			<ul className="list-group">
				{store.urls.map((url, index) => {
					return (
						<ul key={index}>
							<p> {url}</p>
						</ul>
					);
				})}
			</ul>
			<br />
			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
