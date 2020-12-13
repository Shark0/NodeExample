const redis = require("redis");
const client = redis.createClient(6050, 'localhost', {});

let findOnlineAccountCount = () => {
    return new Promise(
        (resolve, reject) => {
            client.hlen('online_account', (error, result) => {
                if(error) {
                    reject(error)
                } else {
                    resolve(result);
                }
            });
        });
}

let findOnlinePlayer = (playerRid) => {
    return new Promise(
        (resolve, reject) => {
            client.hgetall('Player:' + playerRid, (error, result) => {
                if(error) {
                    reject(error)
                } else {
                    resolve(result);
                }
            });
        });
}

const asyncFindPlayerArray = async (playerRidArray) => {
    let playerArray = [];
    for (let i = 0; i < playerRidArray.length; i++) {
        let playerRid = playerRidArray[i];
        let player = await findOnlinePlayer(playerRid);
        playerArray.push(player);
    }
    return playerArray;
}

let findOnlinePlayerArray = (start, length, account) => {
    return new Promise(
        (resolve, reject) => {
            if(account) {
                client.hget('online_account', account, (error, result) => {
                    if(error) {
                        reject(error)
                    } else {
                        let playerRidArray = [];
                        playerRidArray.push(result);
                        asyncFindPlayerArray(playerRidArray)
                            .then(playerArrayResult => {
                                resolve(playerArrayResult);
                            })
                            .catch(playerArrayError => {
                                reject(playerArrayError)
                            });
                    }
                });
            } else {
                client.hgetall('online_account', (error, result) => {
                    if(error) {
                        reject(error)
                    } else {
                        console.log(result);
                        let pagePlayerRidArray = [];
                        let counter = 0;
                        let end = start + length;
                        let playerRidArray = Object.values(result);
                        playerRidArray.forEach(playerRid => {
                            if(counter >= start && counter < end) {
                                pagePlayerRidArray.push(playerRid);
                            }
                            counter ++;
                        });

                        console.log(pagePlayerRidArray);
                        asyncFindPlayerArray(pagePlayerRidArray)
                            .then(playerArrayResult => {
                                resolve(playerArrayResult);
                            })
                            .catch(playerArrayError => {
                                reject(playerArrayError)
                            });
                    }
                });
            }
    });
}


const asyncFindOnlinePlayerArray = async (start, length, account) => {
    let onlineUserCount = await findOnlineAccountCount();
    let onlineUserList;
    if(onlineUserCount === 0) {
        onlineUserList = [];
    } else {
        if(length) {
            onlineUserList = await findOnlinePlayerArray(start, length, account);
        } else {
            onlineUserList = await findOnlinePlayerArray(start, onlineUserCount, account);
        }
    }
    let result = {};
    result.onlineUserCount = onlineUserCount;
    result.onlineUserList = onlineUserList;
    return result;
}

asyncFindOnlinePlayerArray(0, 10, null).then(result => {
    console.log('result: %j', result);
    client.quit();
}).catch(error => {
    console.log(error);
    client.quit();
})