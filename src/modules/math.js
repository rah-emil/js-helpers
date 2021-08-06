

export const multiply = (x, y) => {
	return x * y
}

export const toPrice = function(str) {
	return this.toLocaleString(undefined, {
		style: "currency",
		currency: "RUB"
	}) + str
}