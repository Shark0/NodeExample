let runPromise = async (someone, timer, success = true) => {
    console.log(`${someone} 開始跑開始`);
    return new Promise((resolve, reject) => {
        // 傳入 resolve 與 reject，表示資料成功與失敗
        if (success) {
            setTimeout(function () {
                // 3 秒時間後，透過 resolve 來表示完成
                resolve(`${someone} 跑 ${timer / 1000} 秒時間(fulfilled)`);
            }, timer);
        } else {
            // 回傳失敗
            reject(`${someone} 跌倒失敗(rejected)`)
        }
    });
}

let mingRun = await runPromise('小明', 2000)
console.log('跑完了:', mingRun);

let auntieRun = await runPromise('漂亮阿姨', 2500);
console.log('跑完了:', auntieRun);

let allRun = await Promise.all([runPromise('小明', 3000), runPromise('漂亮阿姨', 2500)]);
console.log(allRun);

let mingRun = await runPromise('小明', 2000, false);
// 小明 開始跑開始
// 小明 跌倒失敗(rejected)
// 以下錯誤不執行
console.log('跑完了:', mingRun);