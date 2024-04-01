import { useEffect } from 'react'

//@ts-expect-error: TODO
function SearchPage({ routeParams }) {
	useEffect(() => {
		document.title = `Buscaste ${routeParams.query}`
		//Cambio echo posible error
	}, [routeParams.query])

	return <h1>Has buscado {routeParams.query}</h1>
}

export default SearchPage
