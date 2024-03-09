import { spawn } from "child_process";

/**
 * A function to start a process based on the operating system.
 *
 * @return {string} Error message if there's an issue getting the operating system
 */
function startProccess(windoww_command: string, linux_mac_command: string) {
    try {
        let command;
        if (process.platform === 'win32') {
            command = windoww_command;
        } else {
            command = linux_mac_command;
        }

        const childProcess = spawn(command, { shell: true, stdio: 'inherit' });

        if (!childProcess || !childProcess.stdout || !childProcess.stderr) {
            return 'Error getting the operating system';
        }

        childProcess.stdout.on('data', (data) => {
            process.stdout.write(data);
        });

    } catch (error) {
        console.error(error);
        return 'Error getting the operating system';
    }
}

console.log("OS:", process.platform);
startProccess('npm run start-windows', 'npm run start-linux-mac');
