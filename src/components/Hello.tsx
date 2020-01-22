import * as React from 'react';
import './style.css';

export interface HelloProps {
	compiler: string;
	framework: string;
}

// Function component
// export const Hello = (props: HelloProps) =>
// 	<h1>
// 		Hello from {props.compiler} and {props.framework}!
// 	</h1>;

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
	render() {
		return <h1>Hello Denis, from {this.props.compiler} and {this.props.framework}!</h1>;
	}
}