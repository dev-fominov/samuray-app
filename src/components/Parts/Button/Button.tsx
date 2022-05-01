import React from "react";

type ButtonType = {
	name: string
	callBack: ()=>void
}

function Button(props: ButtonType) {

	const onClickHandler = () => {
		props.callBack()
	}
	return (
		<>
			<button onClick={onClickHandler}>{props.name}</button>
		</>
	)
}

export default Button