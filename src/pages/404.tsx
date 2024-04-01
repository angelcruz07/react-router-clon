import { Link } from '../Link'

export default function NotFoundPage() {
	return (
		<div>
			<h1>404</h1>
			<p>Page not found</p>
			<Link to='/'>Volver al inicio</Link>
		</div>
	)
}
