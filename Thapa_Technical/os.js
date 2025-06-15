const os = require("os");
console.log(os.platform()); // Returns the operating system platform

console.log(os.arch()); // Returns the operating system CPU architecture
console.log(os.cpus()); // Returns information about the system's CPUs
console.log(os.freemem()); // Returns the amount of free system memory in bytes
console.log(os.totalmem()); // Returns the total amount of system memory in bytes
console.log(os.uptime()); // Returns the system uptime in seconds
console.log(os.homedir()); // Returns the home directory of the current user
console.log(os.tmpdir()); // Returns the default directory for temporary files
console.log(os.networkInterfaces()); // Returns network interfaces and their addresses
console.log(os.release()); // Returns the operating system release
console.log(os.hostname()); // Returns the hostname of the operating system
console.log(os.type()); // Returns the operating system name
console.log(os.endianness()); // Returns the endianness of the CPU ('BE' or 'LE')
console.log(os.loadavg()); // Returns the system load averages for the last 1, 5, and 15 minutes
console.log(os.constants); // Returns constants for various OS-related values
console.log(os.userInfo()); // Returns information about the current user
console.log(os.setPriority(0)); // Sets the priority of the current process (0 is default)
