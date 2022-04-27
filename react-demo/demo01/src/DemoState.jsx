import { useState } from "react";

const DemoState = (props) => {
	const [count] = useState(10);
	return <div>Counter = {count}</div>
}

export default DemoState;