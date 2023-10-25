/** @format */

import { dataApi, showApi } from './components/utils-function.js'
const btn = document.querySelector('.btn')

const data = [...dataApi]

const showImg = () => {
	btn.style.display = 'none'
	data.forEach(item => {
		showApi(item)
	})
}

btn.addEventListener('click', showImg)
