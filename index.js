// This
console.log("Global")
console.log(this);

function logDelarationThis() {
    console.log("Declaration:")
    console.log(this);
}

const logExpressionThis = function() {
    console.log("Expression:");
    console.log(this);
}
var ipAddr = '192.168.1.1';
const util = {
    ipAddr: '8.8.8.8',
    logIpAddr() {
        console.log(`IP Address: ${this.ipAddr}`)
    },
    checkBrowser: function() {
        console.log(window.navigator.userAgent);
    },
    logThis() {
        console.log(this);
    }
}

logDelarationThis();
logExpressionThis();
util.checkBrowser();
util.logThis();
util.logIpAddr();