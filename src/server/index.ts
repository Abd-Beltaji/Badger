import express from "express"
import codeWarsStatsTemplate from "../generators/codewars/stats"
import codeWarsBadgeTemplate from "../generators/codewars/badge"

const app = express()

app.get("/codewars/stats/:user", async (req, res) => {
	const template = await codeWarsStatsTemplate(req.params.user)
	res.set(200).type("image/svg+xml").end(template)
})

app.get("/codewars/badge/:user", async (req, res) => {
	const template = await codeWarsBadgeTemplate(req.params.user)
	res.set(200).type("image/svg+xml").end(template)
})
app.get("*", (req, res) => {
	res.send("Hello World!")
})
const port = process.env.PORT || 8080
app.listen(port, () => {
	console.log(`App started on port : ${port}`)
})
