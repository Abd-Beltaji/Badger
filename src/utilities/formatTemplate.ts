export default (template: string, args: { [key: string]: string }) => {
	for (let key of Object.keys(args))
		template = template.replace(new RegExp(`\\$\\{${key}\\}`, "gm"), args[key])
	return template
}
