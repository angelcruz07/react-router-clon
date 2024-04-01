import { describe, it, expect, beforeEach, vi } from 'vitest'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Router } from '../Router'
import { getCurrentPath } from '../lib/utils'
import { Link } from '../Link'
import { Route } from '../Route'

vi.mock('../lib/utils.ts', () => ({
	getCurrentPath: vi.fn()
}))

describe('Router', () => {
	beforeEach(() => {
		cleanup()
		vi.clearAllMocks()
	})

	it('should render without problems', () => {
		render(<Router routes={[]} />)
		expect(true).toBeTruthy()
	})

	it('should render 404 id not routes match', () => {
		render(<Router routes={[]} defaultComponent={() => <h1>404</h1>} />)
		expect(screen.getByText('404')).toBeTruthy()
	})

	it('should render the component of the first route that matches', () => {
		//@ts-expect-error: TODO
		getCurrentPath.mockReturnValue('/about')

		const routes = [
			{
				path: '/home',
				Component: () => <h1>Home</h1>
			},
			{
				path: '/about',
				Component: () => <h1>About</h1>
			}
		]

		render(<Router routes={routes} />)
		expect(screen.getByText('About')).toBeTruthy()
	})
	it('should navigate using Links'),
		async () => {
			//@ts-expect-error: TODO
			getCurrentPath.mockReturnValueOnce('/')

			render(
				<Router>
					<Route
						path='/'
						Component={() => {
							return (
								<>
									<h1>Home</h1>
									<Link to='/about'>Go to about</Link>
								</>
							)
						}}
					/>
					<Route path='/about' Component={() => <h1>About</h1>} />
				</Router>
			)
			const button = screen.getByText(/Go to about/)
			fireEvent.click(button)

			const aboutTitle = await screen.findByText('About')
			console.log(screen.debug())
			expect(aboutTitle).toBeTruthy()
		}
})