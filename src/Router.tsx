import { useEffect, useState, Children, isValidElement } from 'react'
import { EVENTS } from './lib/const'
import { match } from 'path-to-regexp'
import { RouterProps } from './types/interfaces'

export function Router({
	children,
	routes = [],
	defaultComponent: DefaultComponent = () => <h1>404</h1>
}: RouterProps) {
	const [currentPath, setCurrentPath] = useState(window.location.pathname)

	useEffect(() => {
		const onLocationChange = () => {
			setCurrentPath(window.location.pathname)
		}

		window.addEventListener(EVENTS.PUSHSATE, onLocationChange)
		window.addEventListener(EVENTS.POPSTATE, onLocationChange)

		return () => {
			window.removeEventListener(EVENTS.PUSHSATE, onLocationChange)
			window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
		}
	}, [])

	let routeParams = {}
	// add routes from children <Route /> components

	const routesFromChildren = Children.map(children, (child) => {
		if (isValidElement(child)) {
			const { props, type } = child
			// @ts-expect-error: TODO
			const { name } = type
			const isRoute = name === 'Route'
			return isRoute ? props : null
		}

		return null
	})

	const routesToUse = routes.concat(routesFromChildren)

	const Page = routesToUse.find(({ path }) => {
		if (path === currentPath) return true
		// Use path to regex to match the current path
		const matcherUrl = match(path, { decode: decodeURIComponent })
		const matched = matcherUrl(currentPath)
		if (!matched) return false
		//search/:query
		// Save params dinamic
		// marched.params.query === 'javascript'
		routeParams = matched.params
		return true
	})?.Component

	return Page ? (
		<Page routeParams={routeParams} />
	) : (
		// @ts-expect-error: TODO
		<DefaultComponent routeParams={routeParams} />
	)
}
