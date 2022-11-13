const board = document.querySelector('#board')
const colorList = ['#d72871', '#28d768', '#f2ca45', '#3b3de3', '#e64ca6']

const SQUARES_COUNT = 500

for (let i = 0; i < SQUARES_COUNT; i++) {
	const square = document.createElement('div')
	square.classList.add('square')

	square.addEventListener('mouseover', () => {
		getColor(square)
	})

	square.addEventListener('mouseleave', () => {
		noColor(square)
	})

	board.append(square)
}

function getRandomColor() {
	const index = Math.floor(Math.random() * colorList.length)
	return colorList[index]
}

function getColor(element) {
	const color = getRandomColor()
	element.style.background = `${color}`
	element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function noColor(element) {
	element.style.background = '#1d1d1d'
	element.style.boxShadow = `0 0 2px #000`
}