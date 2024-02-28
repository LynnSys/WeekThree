var log = function (message) {
    console.log(message);
};
var doLog = function () { return console.log(message); };
var message = "hello world";
doLog();
log(message);
