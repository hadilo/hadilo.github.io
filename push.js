var webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BEYUgtOppJDctkh6RleSWlp7ocDeWaD8MPokuRdDI0ZFpllGTja-qZ3bqw7egrE6JHbcEjKb5Eme6pdSmIjDtos",
    "privateKey": "YGvkRpMM5aWvSj8TSbB31aTQIC3Hl7L1mj05xJyzhNs"
}; 
 
webPush.setVapidDetails(
    'mailto:devhadi@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cR2MXzpxbVw:APA91bFaTzuBrrH7zRvUel7cwi9T2OEbmtoIxOhTJADWxWjT55rly0MSfhTWCFHXrjsWiNMZVFsh8AUETQSHet9ob03QW7acxx2nS1cBqhxlxebX4SofJL6YPVPQ0HrngC3PMo4rnsVM",
    "keys": {
        "p256dh": "BHt7HpcKq52kJpG3nt0qHn2QEX++1mid6p0nuX3/hcP3Z8a04j1EzOmF8OR+FSNvRpAsA1qT9mSD42BvGk10+8Q=",
        "auth": "RnKbHwLn4D2Kz26FonWxGg=="
    }
};
var payload = 'Selamat! Aplikasi Anda sudah dapat menerima push notifikasi!';
var options = {
    gcmAPIKey: '941065311714',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);