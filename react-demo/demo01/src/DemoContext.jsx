import { createContext, useContext } from "react";

// 1. Create context
const MyContext = createContext("demo context");

const DemoContext = (props) => {
	const myValue = "Hello from context";
	// 2. Provider
	return(
		<MyContext.Provider value={myValue}>
			<ChildComponent/>
		</MyContext.Provider>
	);
}

const ChildComponent = () => {
	// 3. Consumer
	const value = useContext(MyContext);
	return(
		<div>{value}</div>
	);
}

export default DemoContext;