#!/usr/bin/env node
import { Command } from 'commander';

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
  
// 3. Parse the user's terminal input
program.parse(process.argv);