import { program } from 'commander'
import inquirer from 'inquirer'

program.version('0.0.1').description('Aplicación de consola')

const respuestas = [{
  type: 'input',
  name: 'name',
  message: '¿Cuál es tu nombre?'
},
{
  type: 'input',
  name: 'lastname',
  message: '¿Cuál es tu apellido?'
}]

program
  .command('save')
  .alias('s')
  .description('Guardar un archivo')
  .action(() => {
    inquirer.prompt(respuestas).then((answers) => {
      console.log(`hola: ${answers.name}`)
    })
  })

program.parse(process.argv)
