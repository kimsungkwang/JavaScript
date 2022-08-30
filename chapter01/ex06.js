function isPositive(number, resolve, reject) {
  setTimeout(() => {
    if (typeof number === "number") {
      // 비동기 성공 -> resolve
      resolve(number >= 0 ? "양수" : "음수");
    } else {
      // 실패 -> reject
      reject("주어진 값이 숫자형이 아닙니다. ");
    }
  }, 2000);
}

isPositive(
  10,
  (res) => {
    console.log("성공 : ", res);
  },
  (err) => {
    console.log("실패 : ", err);
  }
);
