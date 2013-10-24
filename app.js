/**
 * wechat simsimi
 *
 * Powered by simsimi api and Node.js (wechat && connect && get)
 *
 * Author: fantasyshao(me@fantasyshao.com)
 * 
 */

var connect = require('connect');
var get = require('get');
var wechat = require('wechat');
var config = require('./config.js');

var app = connect();

app.use(connect.query());
app.use('/', wechat(config.token, wechat.text(function(message, req, res) {
    var input = (message.Content || '').trim();

    var simsimiUrl = "http://sandbox.api.simsimi.com/request.p?" +
                        "key=" + config.simsimiKey +
                        "&lc=ch&ft=0.0&text=" + input;

    var replyMessage = '';

    get({ uri: simsimiUrl }).asString(function(err, data) {
        replyMessage = JSON.parse(data).response;
        console.log(replyMessage);
        res.reply(replyMessage);
    });

    // console.log(replyMessage);
    // res.reply(replyMessage);

}).location(function(message, req, res) {
    res.reply('给伦家看你在哪里看啥捏→ →');
}).image(function(message,req, res) {
    res.reply('+_+  看不懂图片啦……还是和俺说话吧');
}).voice(function(message, req, res) {
    res.reply('才不给你听人家的声音呢……我和羞射滴');
}).event(function(message, req, res) {
    if(message.Event == 'subscribe') {
        res.reply('(*^__^*) 感谢关注啊，可以跟我对话哦~~');
    }
})));

var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log('Listening...');
});