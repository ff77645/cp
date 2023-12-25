import {Command } from 'commander'


const program = new Command()

program
	.name('pm')
	.version('0.0.1')
	.description('Fake package manager')
	.command('install [name]', 'install one or more packages').alias('i')
	.command('search [query]', 'search with optional query').alias('s')
	.command('update', 'update installed packages', { executableFile: 'myUpdateSubCommand' })
	.command('list', 'list packages installed', { isDefault: true })

program.parse(process.argv)