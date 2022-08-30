function taskA(a, b, callback) {
  setTimeout(() => {
    const res = a + b;
    callback(res);
  }, 5000);
}

function taskB(a, callback) {
  setTimeout(() => {
    const res = a * 2;
    callback(res);
  }, 6000);
}

taskA(1, 5, (res) => {
  console.log("A Task RESULT : ", res);
});

taskB(8, (res) => {
  console.log("B TASK RESULT : ", res);
});
console.log("End");
