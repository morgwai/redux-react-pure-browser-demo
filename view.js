class Counter extends React.Component {

	constructor(props) {
		super(props);
		this.state = { counterValue: props.store.getState() };
		props.store.subscribe(() => this.setState({ counterValue: props.store.getState() }));
	}

	render() {
		return (<p>
			counterValue: {this.state.counterValue} &nbsp;
			<button onClick={this.props.onIncrement}>+</button> &nbsp;
			<button onClick={this.props.onDecrement}>-</button>
		</p>)
	}
}
