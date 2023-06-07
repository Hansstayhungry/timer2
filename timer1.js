// get input from command line
const args = process.argv.slice(2);

const timer = function(args) {
  for (let i = 0; i < args.length; i++) {
    const seconds = Number(args[i]);

    // verify it is number
    if (isNaN(seconds)) {
      process.stdout.write(`Invalid: ${args[i]}\n`);
    } else if (seconds <= 0) {
      process.stdout.write(`Skipping: ${seconds}\n`);
    } else setTimeout(() => {
      process.stdout.write(`Alarm at ${seconds} seconds!\n`);
      // beep sound
      process.stdout.write('\x07');
    }, seconds * 1000);
  }
};

timer(args);