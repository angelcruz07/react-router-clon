import { FC } from 'react'

export interface RouterProps {
	routes?: Route[]
	defaultComponent?: FC
	children?: React.ReactNode
}

export interface LinkProps {
	target?: string
	to: string
	props?: React.HTMLProps<HTMLAnchorElement>
	children: React.ReactNode
}

export interface Translation {
	title: string
	button: string
	description: string
}
