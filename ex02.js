function run() {
    console.log("3초 뒤 실행 !! ")
}

console.log('시작');

setTimeout(run, 3000);

console.log('완료');