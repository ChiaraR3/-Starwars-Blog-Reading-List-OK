const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: ["name"],
			urls: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFav: name => {
				setStore({ favorites: [...getStore().favorites, name] });
			},
			addUrl: url => {
				setStore({ urls: [...getStore().urls, url] });
			},
			deleteFavorite: name => {
				let store = getStore();
				let index = store.favorites.indexOf(name);

				const arr = store.favorites.filter(function(item) {
					return item !== name;
				});
				setStore({ favorites: arr });
			}
		}
	};
};

export default getState;
