class NetworkUtility {
    ipAddr;

    constructor(ipAddr) {
        this.ipAddr = ipAddr;
    }

    sendRequest() {
        console.log("success!");
    }
}

let pingUtility = new NetworkUtility('4.2.2.2');
let dnsUtility = new NetworkUtility('8.8.8.8');

console.log(pingUtility);
console.log(dnsUtility);

console.log(pingUtility.__proto__);
console.log(NetworkUtility.prototype);

console.log(pingUtility.__proto__ === NetworkUtility.prototype);
console.log(dnsUtility.__proto__ === NetworkUtility.prototype);


