const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			person: {},
			misFavoritos: [],
			planets: [],
			planet: {},
		},
		actions: {
			loadCharacters: async() => {
				try {
					const response = await fetch('https://swapi.dev/api/people')
					const data = await response.json()
					console.log(data.results)
					setStore({characters: data.results})
				} catch (error) {
					console.log(error)
					return false
				}
			},
			loadInfoCharacters: async(id) => {
				try {
					const response = await fetch(`https://swapi.dev/api/people/${id}`)
					const data = await response.json()
					console.log(data)
					setStore({person: data})
				} catch (error) {
					console.log(error)
					return false
				}
			},
			favoritos: (item) => {
				if (getStore().misFavoritos.includes(item)) {
					//Si ya existe lo borra
					let aux = []
					aux = getStore().misFavoritos.filter((favorito)=>favorito!= item)
					setStore({misFavoritos: aux})
				} else {
					setStore({misFavoritos: [...getStore().misFavoritos, item]})
				}
			},
			loadPlanets: async() => {
				try {
					const response = await fetch('https://swapi.dev/api/planets')
					const data = await response.json()
					console.log(data.results)
					setStore({planets: data.results})
				} catch (error) {
					console.log(error)
					return false
				}
			},
			loadInfoPlanets: async(id) => {
				try {
					const response = await fetch(`https://swapi.dev/api/planets/${id}`)
					const data = await response.json()
					console.log(data)
					setStore({planet: data})
				} catch (error) {
					console.log(error)
					return false
				}
			},
		}
	};
};

export default getState;
