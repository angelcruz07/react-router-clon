import { lazy, Suspense } from 'react'
import { Router } from './Router.tsx'
import NotFoundPage from './pages/404'
import SearchPage from './pages/Search'
import { Route } from './Route.tsx'

// Add lazy load
const LazyHomePage = lazy(() => import('./pages/Home.tsx'))
const LazyAboutPage = lazy(() => import('./pages/About.tsx'))

//Use second form to routes
const appRoutes = [
	{
		path: '/:lang/about',
		Component: LazyAboutPage
	},
	{
		path: '/search/:query',
		Component: SearchPage
	}
]

function App() {
	return (
		<main>
			<Suspense fallback={null}>
				<Router routes={appRoutes} defaultComponent={NotFoundPage}>
					<Route path='/' Component={LazyHomePage} />
					<Route path='/about' Component={LazyAboutPage} />
				</Router>
			</Suspense>
		</main>
	)
}

export default App
