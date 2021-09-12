import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

const PeopleCard = () => {
	const [people, setPeople] = useState([]);
	const { store, actions } = useContext(Context);
	const [characterExist, setCharacterExist] = useState(false);

	async function getPerson() {
		const response = await fetch("https://www.swapi.tech/api/people");

		const responseJson = await response.json();
		console.log(responseJson, "!!!!!!");
		setPeople(responseJson.results);
		console.log(responseJson.results, "????");
	}
	useEffect(() => {
		getPerson();
	}, []);

	return (
		<div className="container">
			<h1>PEOPLE</h1>
			<div className="row flex-nowrap ">
				{people.map(person => {
					console.log(person);
					return (
						<div className="card col-3 m-4" key={person.uid}>
							<img className="card-img-top" src=".../100px200/" alt="Card image cap" />
							<h5>{person.name}</h5>
							<div className="card-body">
								<p className="card-text">
									This is a longer card with supporting text below as a natural lead-in to additional
									content. This content is a little bit longer.
								</p>
								<button
									onClick={() => {
										actions.addFav(person.name);
									}}>
									FAV
								</button>
								<Link to="/demo">
									<button
										onClick={() => {
											actions.addDetails(person.url);
										}}>
										MORE
									</button>
								</Link>
								<p className="card-text">
									<small className="text-muted">Last updated 3 mins ago</small>
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default PeopleCard;
