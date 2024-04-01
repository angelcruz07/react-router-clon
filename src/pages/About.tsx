import { Link } from '../Link'

type Languaje = 'es' | 'en'

interface Translation {
	title: string
	button: string
	description: string
}

const i18n: Record<Languaje, Translation> = {
	es: {
		title: 'Sobre nosotros',
		button: 'Ir a la home',
		description: 'Hola me llamo angel y soy programador'
	},
	en: {
		title: 'About us',
		button: 'Go to home',
		description: 'Hello my name is angel and I am a programmer'
	}
}

const usei18n = (lang: Languaje) => {
	return i18n[lang] || i18n.en
}

export default function AboutPage({ routeParams }) {
	const i18n = usei18n(routeParams.lang ?? 'es')

	return (
		<div>
			<h2>{i18n.title}</h2>
			<p>{i18n.description}</p>
			<Link to={'/'}>{i18n.button}</Link>
		</div>
	)
}
