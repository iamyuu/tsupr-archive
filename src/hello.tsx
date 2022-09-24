export interface HelloProps {
	name?: string;
}

export function Hello(props: HelloProps) {
	return <h1>Hello {props.name ?? 'world'}</h1>;
}
