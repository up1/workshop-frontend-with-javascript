import { useState } from "react";

const DemoStateFn = (props) => {
	const [count, updateCount] = useState(10);
	const onClicked = () => updateCount(count+1)

	return( 
		<div>
			Counter = {count}
			<div>
				<button onClick={onClicked}>Increase</button>
			</div>
		</div>
	);
}

export default DemoStateFn;