function taskA(a, b, callback) {
  setTimeout(() => {
    const res = a + b;
    callback(res)
  }, 5000);
}

taskA(1, 5, (res) => {
  console.log("A Task RESULT : ", res)
});
console.log("End");
