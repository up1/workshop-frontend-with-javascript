import { useState } from "react";

const DemoStateFn = (props) => {
	const [count, updateCount] = useState(10);
	const onClicked = (value) => updateCount(count+value)

	return( 
		<div>
			Counter = {count}
			<div>
				<button onClick={() => onClicked(1)}>Increase</button>
				<button onClick={() => updateCount(currentValue => currentValue+1)}>Increase 2</button>
			</div>
		</div>
	);
}

export default DemoStateFn;