import { cpus } from 'os';
import chalk from 'chalk';


const cpuInfos = cpus();

console.log(chalk.red(JSON.stringify(cpuInfos, null, 2)));



