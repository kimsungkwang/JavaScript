function taskA(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a + b;
      resolve(res);
    }, 5000);
  });
}

function taskB(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * 2;
      resolve(res);
    }, 6000);
  });
}

function taskC(a) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const res = a * -1;
      resolve(res);
    }, 2000);
  });
}

taskA(5, 1)
  .then((a_res) => {
    console.log("Task A RESULT : ", a_res);
    return taskB(a_res);
  })
  .then((b_res) => {
    console.log("Task B RESULT : ", b_res);
    return taskC(b_res)
  })
  .then((c_res) => {
    console.log("Task C RESULT : ", c_res);
  });



  
// taskA(5, 1).then((a_res) => {
//   console.log("ask A RESULT : ", a_res);
//   taskB(a_res).then((b_res) => {
//     console.log("TASK B RESULT : ", b_res);
//     taskC(b_res).then((c_res) => {
//       console.log("TASK C RESULT : ", c_res);
//     });
//   });
// });

// taskA(3, 4, (a_res) => {
//   console.log("Task A RESULT : ", a_res);
//   taskB(a_res, (b_res) => {
//     console.log("TASK B RESULT : ", b_res);
//     taskC(b_res, (c_res) => {
//       console.log("TASK C RESULT : ", c_res);
//     });
//   });
// });

// console.log("End");
