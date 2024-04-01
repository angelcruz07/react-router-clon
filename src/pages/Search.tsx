import { useEffect } from 'react'

function SearchPage({ routeParams }) {
	useEffect(() => {
		document.title = `Buscaste ${routeParams.query}`
	}, [])

	return <h1>Has buscados {routeParams.query}</h1>
}

export default SearchPage
