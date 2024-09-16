require("dotenv").config()

const apiKey = process.env.API_KEY

async function getImage(query) {
	const endpoint = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${query}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
	const response = await fetch(endpoint)
	const data = await response.json()
	let rando = Math.floor(Math.random() * (24 - 0))
	let wantedImg = data.data[rando].embed_url
	console.log(wantedImg)
	return wantedImg
}

getImage("tombstone")
