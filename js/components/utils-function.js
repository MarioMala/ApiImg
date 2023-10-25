/** @format */
const imgBox = document.querySelector('.img-box')

const URL = 'https://picsum.photos/v2/list?limit=9'

const getData = async link => {
	try {
		const res = await fetch(link)
		const json = await res.json()
		const data = [...json]
		return data
	} catch (error) {
		console.error('Błąd połączenia:', error)
	}
}

export const showApi = data => {
	const imgContainer = document.createElement('div')
	imgContainer.classList.add('img-container')
	const img = document.createElement('img')
	img.classList.add('picture')
	img.src = `${data.download_url}`
	img.alt = `Zdjęcie autorstwa ${data.author}`
	const text = document.createElement('span')
	text.textContent = `Zdjęcia autorstwa: ${data.author}`
	imgContainer.append(img, text)
	imgBox.appendChild(imgContainer)
}

export const dataApi = await getData(URL)
