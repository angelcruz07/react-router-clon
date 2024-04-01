import { EVENTS } from './const'

export function navigate(href: string) {
	window.history.pushState({}, '', href)
	// Crear un evento personalizado
	const navigationEvent = new Event(EVENTS.PUSHSATE)
	window.dispatchEvent(navigationEvent)
}
