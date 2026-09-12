import { intro, outro, select } from '@clack/prompts';

async function askQuestion() {
    intro(`Starting Setup`);

    const projectType = await select({
        message: 'Pick a project type.',
        options: [
            { value: 'ts', label: 'TypeScript' },
            { value: 'js', label: 'JavaScript' },
        ],
    });

    outro(`You chose ${projectType}. Setup complete!`);
}

async function projectOptions() {

    const projectType = await select({
        message: 'Pick a project type.',
        options: [
            { value: 'front', label: 'FrontEnd' },
            { value: 'back', label: 'BackEnd' },
            { value: 'frontandback', label: 'FrontEnd and BackEnd' },
        ],
    });

    outro(`You chose ${projectType}. Setup complete!`);
    return projectType;
}


// askQuestion();
export { projectOptions }