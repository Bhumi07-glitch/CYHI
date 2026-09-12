import path from 'node:path';
import { promisify } from 'node:util';
import { exec as execCallback } from 'node:child_process';
const exec = promisify(execCallback);

/**
 * Executes a terminal command and returns the output.
 * @param {string} command - The terminal command to run.
 * @returns {Promise<string>} - The command output (stdout).
 */

async function runCommand(command) {
  try {
    // Wait for the command to finish executing
    const { stdout, stderr } = await exec(command);

    // If the command writes to stderr (even if it didn't fail completely)
    if (stderr) {
      console.warn(`Command warning: ${stderr}`);
    }

    return stdout.trim(); // Return the output, removing trailing newlines
  } catch (error) {
    console.error(`Command failed: ${command}\nError: ${error.message}`);
    throw error; // Re-throw the error if you want the calling code to handle it
  }
}


async function projectFolder(project_name) {
  try {
    console.log("Creating an Project folder ");
    // const dire = await runCommand('cd')
    const file = `mkdir "${project_name}"`
    const result = await runCommand(file)
    console.log(`Created an Project folder ${result}`);
  }
  catch (err) {
    console.log("Handled error in main function.");
  }
}

async function frontEndFolder(project_name = '') {
  try {
    console.log("Creating an FrontEnd folder ");
    // const dire = await runCommand('cd')
    const folderPath = project_name ? path.join(project_name, 'FrontEnd') : 'FrontEnd';
    const file = `mkdir "${folderPath}"`;
    const result = await runCommand(file);
    console.log(`Created an FrontEnd folder ${result}`);
  }
  catch (err) {
    console.log("Handled error in main function.");
  }
}

async function backEndFolder(project_name = '') {
  try {
    console.log("Creating an backEndFolder ");
    // const dire = await runCommand('cd')
    const folderPath = project_name ? path.join(project_name, 'BackEnd') : 'BackEnd';
    const file = `mkdir "${folderPath}"`;
    const result = await runCommand(file);
    console.log(`Created an BackEnd folder ${result}`);
  }
  catch (err) {
    console.log("Handled error in main function.");
  }
}

export { frontEndFolder, backEndFolder, projectFolder }