declare module '*.css'{
	interface IClassNames{
		[classname: string]: string
	}
	const classname: IClassNames;
	export = classname
}

declare module '*.scss'{
	interface IClassNames{
		[classname: string]: string
	}
	const classname: IClassNames;
	export = classname
}