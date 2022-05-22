const smallerSquare = [
	[ 1, 2, 3, 4 ],
	[ 5, 6, 7, 8 ],
	[ 9, 10, 11, 12 ],
	[ 13, 14, 15, 16 ]
];


function unroll (squareArray) {
	// if the array is empty. exit
	if(squareArray.length === 0) return;

	let newArray = [];

	while(squareArray.length > 0) {
		// make var for top row
		newArray = [ ...newArray, squareArray.shift() ];

		// get the right column
		newArray = [ ...newArray, squareArray.map(row => row.pop()) ];

		// take a reverse of the  bottom row 
		let bottomRow = squareArray.pop();

		if(bottomRow !== undefined) {
			newArray = [ ...newArray, bottomRow.reverse() ];
		}
		// // reverse the left col
		newArray = [ ...newArray, squareArray.map(row => row.shift()).reverse() ];
	}
	// flatten and return the new Array
	return newArray.flat();
}


console.log(unroll(smallerSquare));
// module.exports = unroll;
