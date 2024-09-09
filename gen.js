let totalchars = 0

const vowels = ['a', 'e', 'i', 'o', 'u', 'y']
const consenants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 't', 'v', 'w', 'x', 'z']

function namegen(maxchars = 6) {
	// at random, in 2s, gimme 2 vowels and consenants
	const startwith = Math.random() * 2 + 1 // 1 = vowels, 2 = consenants
	let doVowel = false
	if (startwith === 1) doVowel = true
	let chars = 0
	let result = ''

	while (chars < maxchars) {
		let newamount = Math.floor(Math.random() * 2 + 1)
		chars += newamount
		if (doVowel === true) result += getVowels(newamount)
		else result += getConsenants(newamount)
		doVowel = !doVowel
	}
	console.log(result)
	if (totalchars > maxchars) return result
}

function getVowels(amount) {
	let result = ''
	for (let i = 0; i < amount; i++) {
		result += vowels[Math.floor(Math.random() * vowels.length)]
	}
	return result
}
function getConsenants(amount) {
	let result = ''
	for (let i = 0; i < amount; i++) {
		result += consenants[Math.floor(Math.random() * consenants.length)]
	}
	return result
}

namegen(6)
