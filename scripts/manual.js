const readline = require('readline')
const chalk = require('chalk')

const package = require('../package.json')

const blank = '\n'.repeat(process.stdout.rows)
console.log(blank)
readline.cursorTo(process.stdout, 0, 0)
readline.clearScreenDown(process.stdout)

console.log(chalk.bold('  ' + package.name))
console.log('')
console.log(chalk.bold('  SCRIPTS'))
console.log('')
console.log(chalk.bold('  - todo') + ': list all TODO, FIXME, HACK in the source code')
console.log('')
console.log('')
console.log('')
