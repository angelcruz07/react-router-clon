import { navigate } from './utils'
import { BUTTON } from './const'
import { LinkProps } from './types/interfaces'

export function Link({ children, target, to, ...props }: LinkProps) {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		const isMainEvent = e.button === BUTTON.PRIMARY //primary click
		const isKeyboardEvent = e.metaKey || e.ctrlKey || e.altKey || e.shiftKey
		const isManageEvent = target === undefined || target === '_self'

		if (isMainEvent && !isKeyboardEvent && isManageEvent) {
			e.preventDefault()
			navigate(to) // navegacion con SPA
			window.scrollTo(0, 0) // scroll to top
			//De lo contrario, se comporta como un enlace normal
		}
	}

	return (
		<a onClick={handleClick} href={to} target={target} {...props}>
			{children}
		</a>
	)
}
