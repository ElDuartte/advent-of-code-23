// this is to use regex
const fs = require('fs')

// for more info look at the python version of this code

function grabNum(values){
  return parseInt(values[values.length - 1]) + 10 * parseInt(values[0]);
}

function main(){
  let result = 0;

  try{
    const data = fs.readFileSync('./day-1-1.txt', 'utf8');
    const lines = data.split('\n');

    for(const line of lines){
      const digits = line.match(/\d/g);
      if(digits){
        result += grabNum(digits);
      }
    }
    console.log(result);
  }catch(err){
    console.error(err);
  }
}

main();
