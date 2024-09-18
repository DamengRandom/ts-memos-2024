// Normally we define the enum and use it, so now, we might consider to try something new ~~
enum LEVELS {
  DEBUG = "DEBUG",
  LOG = "LOG",
  ERROR = "ERROR",
  HELP = "HELP",
}

type LogLevel = keyof typeof LEVELS;

function log(message: string, level: LogLevel) {
  console.log(`${LEVELS[level]}: ${message}`);
}

log("Can pass like this format: ", LEVELS.DEBUG);
log("Can pass like string: ", "DEBUG");

// If you define level like LEVELS, you will get error when pass like a string format:
// function levelLog(message: string, level: LEVELS) {
//   console.log(`${LEVELS[level]}: ${message}`);
// }

// levelLog("Can pass like string: ", "DEBUG"); // error detected ~~

// Define as a const (Better when typescript transpile to javascript, less code generated !!!!)
// Check video: https://www.youtube.com/watch?v=jjMbPt_H3RQ&list=PLIvujZeVDLMx040-j1W4WFs1BxuTGdI_b&index=25

const LEVELS_AS_CONST = {
  DEBUG: "DEBUG",
  LOG: "LOG",
  ERROR: "ERROR",
  HELP: "HELP",
} as const;

type ConstLogLevel = keyof typeof LEVELS_AS_CONST;

function constLog(message: string, level: ConstLogLevel) {
  console.log(`${LEVELS_AS_CONST[level]}: ${message}`);
}

constLog("Can pass like a string or a const value: ", LEVELS_AS_CONST.DEBUG);
constLog("Can pass like a string or a const value: ", "DEBUG");
