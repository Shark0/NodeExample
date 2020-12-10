const redis = require("redis");
const client = redis.createClient();

let findOnlineUserCount = () => {
    return new Promise(
        (resolve, reject) => {
            client.hlen('online_player', (error, result) => {
                if(error) {
                    reject(error)
                } else {
                    resolve(result);
                }
            });
        });
}

let findOnlineUser = () => {
    return new Promise(
        (resolve, reject) => {
            client.hgetall('online_player', (error, result) => {
                if(error) {
                    reject(error)
                } else {
                    resolve(result);
                }
            });
    });
}
const asyncFindOnlineUserList = async () => {
    let onlineUserCount = await findOnlineUserCount();
    let onlineUserList = await findOnlineUser();
    console.log('onlineUserCount: %d', onlineUserCount);
    console.log('onlineUserList: %j', onlineUserList);
    let result = {};
    result.onlineUserCount = onlineUserCount;
    result.onlineUserList = onlineUserList;
    return result;
}

asyncFindOnlineUserList().then(result => {
    console.log('result: %j', result);
    
}).catch(error => {
    console.log(error);
})


