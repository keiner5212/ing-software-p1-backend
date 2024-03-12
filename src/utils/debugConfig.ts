import Debug from 'debug';
Debug.enable('*');

// server debugger
const serverDebugger = Debug('server');

// controller debugger
const controllerDebugger = Debug('controller');

// db debugger
const dbDebugger = Debug('db');

// auth debugger
const authDebugger = Debug('auth');

// utils debugger
const utilsDebugger = Debug('utils');

// query debugger
const queryDebugger = Debug('query');


export { serverDebugger, controllerDebugger, dbDebugger, authDebugger, utilsDebugger, queryDebugger };
