import axios from "axios"
import { readFileSync } from "fs"
import format from "../../utilities/formatTemplate"
export default async (user: string) => {
	const { data } = await axios.get(
		`https://www.codewars.com/api/v1/users/${user}`
	)
	const template = readFileSync(
		process.cwd() + "/src/templates/codewars/badge.svg"
	)
	return format(template.toString(), {
		userName: data.username,
		userRank: -data.ranks.overall.rank + "",
		rankColor: [
			"",
			"#866cc7",
			"#866cc7",
			"#1f87e7",
			"#1f87e7",
			"#e4b013",
			"#e4b013",
			"#ffffff",
			"#ffffff"
		][-data.ranks.overall.rank],
		score: data.ranks.overall.score
	})
}
