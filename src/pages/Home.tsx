import { Link } from '../Link'

export default function HomePage() {
	return (
		<div>
			<h1>Home Page</h1>
			<p>Esto es un ejemplo</p>
			<Link to={'/about'}>ver mas sobre nosotros</Link>
		</div>
	)
}
