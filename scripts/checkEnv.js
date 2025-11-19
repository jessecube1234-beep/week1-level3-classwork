/**
 * Small Node.js script used only in the terminal.
 * Its job is to verify the environment and to show
 * students how 'node' executes JavaScript files.
 */

console.log("=== Node.js environment check ===");

// Node version (useful to debug version-related issues)
console.log("Node version:", process.version);

// Current working directory (the folder where the script is executed)
console.log("Current working directory:", process.cwd());

// Any extra arguments passed to this script (after the file name)
console.log("Arguments passed to this script:", process.argv.slice(2));

console.log("Arguments Object:", process.argv)

// Platform information (e.g., 'darwin', 'win32', 'linux')
console.log("Platform:", process.platform);

// Print the process object
// console.log("Process Object:", process);