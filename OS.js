const os = require('os');
const { pid, ppid } = require('process');

/*return /n in windows it mean new line */ 
// console.log(`hello ${os.EOL} bro`)
// ################################################################################################
//  i gurss its used for check what system is it and then do it
// console.log(os.arch())
// ################################################################################################
// this is for milli sconeds using cpu
// console.log(os.cpus())
// ################################################################################################
console.log(os.version())