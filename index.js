const store = Redux.createStore(ReduceCounter);

ReactDOM.render(
	<Counter
		store={store}
		onIncrement={() => store.dispatch({ type: 'INC' })}
		onDecrement={() => store.dispatch({ type: 'DEC' })}
	/>,
	document.getElementById('root')
)
