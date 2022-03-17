const args = process.argv
const prepPackage = require('./solutions');

const usage = function() {
    const usageText = `
    Node CLI to run solutions for testing
    usage:
        npm test <solution name> <function args>
     `
    console.log(usageText)
  }

  function errorLog(error) {
    console.error(error)
  }
  
  const commands = ['help', 'sumOfMultiplesOfThreeOrFive', 'sumOfEvenFibNumbers']
  const fnArgs = args[args.length - 1]

  if (commands.indexOf(args[2]) === -1) {
    errorLog('invalid command passed')
    usage()
  }else if (commands.indexOf(args[2]) === 0){
    usage()
  }else{
    const packageToRun = args[2]
     const fn = prepPackage[packageToRun]
     console.log(fn(fnArgs));
  }
    