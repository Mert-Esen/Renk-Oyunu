const container = document.getElementById('container')
const Cember = 500
// Göktürk Software Development
for(let i = 0; i < Cember; i++) {
	const cember = document.createElement('div')
	
	cember.classList.add('cember')

	cember.addEventListener('mouseover', () => setColor(cember))
	cember.addEventListener('mouseout', () => removeColor(cember))

	container.appendChild(cember)
}// Göktürk Software Development

function setColor(element) {
	const color = ('#ffffff')
	element.style.background = color 
}// Göktürk Software Development

function removeColor(element) {
	const colorr = ('#1c1c1c')
	element.style.background = colorr
} // Göktürk Software Development