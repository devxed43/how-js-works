// ====== HOW JS WORKS =======

// program:
// allocate memory
// parse(read)/execute(run) scripts

// chrome -> v8 js engine -> turns js into machine code

// memory heap: memory allocation

// call stack: parse and execute scripts. where we are

// memory leak: variables/data laying around
const a = 1;
const b = 2;
const c = 3;

// call stack - FIFO Process
// console.log("1"); // first

// console.log("1"); // first
// console.log("2"); // second goes under first

// console.log("1"); // first
// console.log("2"); // second goes under first
// console.log("3"); // third goes under second

const one = () => {
  const two = () => {
    console.log("4");
  };
  two();
};

// console.log(one());

// ========= process=========:

// console.log('4')
// two() goes under one
// one()

// javascript is a single threaded language that can be non-blocking

// single thread -> call stack
// new functions go below the last function

// ============= NON BLOCKING JS ===============
// async js
// img processing, api calls over network

// console.log("1");
// setTimeout(() => {
//   console.log("took" + " " + "2" + " " + "seconds");
// }, 2000);
// console.log("3");

// 1, 3, 2

// ============ JS RUNTIME ENVIRONMENT ================
// ============ 12 steps ==============================
// summary: call stack, call back, call stack
// purpose: we can display the content and in the background we can fetch the tweets.
// included in browser
// web api, callback queue, event loop

// ===== call stack
// step 1:
console.log("1");

// step 2:
setTimeout(() => {
  console.log("took" + " " + "2" + " " + "seconds");
}, 2000);

// step 7:
console.log("3"); // goes under console.log('1')

// step 3: web api is triggered

// step 4: pops setTimeout() out of the call stack, puts in web api

// =========  web api
// step 5: timer of 2 seconds goes off
setTimeout(() => {
  console.log("took" + " " + "2" + " " + "seconds");
}, 2000);

// step 6: call stack is empty so it does the console.log('3')

// ========= callback queue
// step 8: the runtime sees that console.log('1') and console.log('3') are done.
// pops the setTimeout into the callback queue
setTimeout(() => {
  console.log("took" + " " + "2" + " " + "seconds");
}, 2000);

// step 9: now that setTimeout timer is up, it sees there's a console.log('2')

// step 10: it sees that setTimeout is done,

// ============= event loop
// step 11:
// asks if call stack is empty, if yes,
// checks callback queue, if yes,
// puts callback into the callstack
// the callstack displays console.log('2')
// one done, pops it off the callstack
