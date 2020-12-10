const redis = require("redis");
const client = redis.createClient();

client.hset('online_player', 'shark1', 1);
client.hset('online_player', 'shark2', 2);
client.hset('online_player', 'shark3', 3);

client.hget('online_player', 'shark1', (err, res) => {
    console.log(res);
});
client.hget('online_player', 'shark2', (err, res) => {
    console.log(res);
});

client.hget('online_player', 'shark3', (err, res) => {
    console.log(res);
});

client.hgetall('online_player', (err, res) => {
    console.log(res);
});