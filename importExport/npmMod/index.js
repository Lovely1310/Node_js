const chalk = require('chalk');
const validator = require("validator");
console.log(chalk.blue.underline.inverse("hello world"));
console.log(chalk.keyword('red')("hello world"));
console.log(chalk.green.underline.inverse("success"));

const res = validator.isEmail("monika9899@gmail.com");
console.log(res);
console.log(res?chalk.greenBright.inverse(res):chalk.redBright.inverse(res));
