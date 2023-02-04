// const { exec } = require('child_process')

const { exec } = require('child_process')

require('dotenv').config()

// const readline = require('readline');

// function askQuestion(query) {
//     const rl = readline.createInterface({
//         input: process.stdin,
//         output: process.stdout,
//     });

//     return new Promise(resolve => rl.question(query, ans => {
//         rl.close();
//         resolve(ans);
//     }))
// }


// const ans = await askQuestion("Are you sure you want to deploy to PRODUCTION? ");

// console.log(process.argv)
return exec(process.argv[2])