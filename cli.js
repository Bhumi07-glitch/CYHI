#!/usr/bin/env node
import { Command } from 'commander';
import { frontEndFolder, backEndFolder, projectFolder } from './command.js';
const program = new Command();

// 1. Basic configuration
program
  .name('my-cli')
  .description('A simple CLI built with Commander.js')
  .version('1.0.0');

// 2. Define a command, arguments, and options
program
  .command('greet')
  .description('Greet a user by name')
  .argument('<name>', 'The name of the person to greet') // < > means required
  .option('-u, --uppercase', 'Print the greeting in uppercase')
  .action((name, options) => {
    let message = `Hello, ${name}!`;
    if (options.uppercase) {
      message = message.toUpperCase();
    }
    console.log(message);
  });
program
  .command('project')
  .description('Creates a project folder')
  .argument('<name>', 'The name of the project') // < > means required
  .option('-f, --front', 'Creates a FrontEnd folder')
  .option('-b, --back', 'Creates a BackEnd folder')
  .option('--fb, --frontandback', 'Creates FrontEnd and BackEnd folders')
  .action(async (name, options) => {
    await projectFolder(name);
    if (options.frontandback || (options.front && options.back)) {
      await frontEndFolder(name);
      await backEndFolder(name);
    }
    else if (options.front) {
      await frontEndFolder(name);
    }
    else if (options.back) {
      await backEndFolder(name);
    }
    else {
      console.log('No option selected');
    }
  });


// 3. Parse the user's terminal input
program.parse(process.argv);