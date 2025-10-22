import { spawn } from 'child_process';

// Start the Next.js development server
const devProcess = spawn('next', ['dev'], {
    stdio: 'inherit',
    shell: true,
});

// Exit the wrapper process when Next.js exits
devProcess.on('close', (code) => {
    process.exit(code ?? 1);
});
