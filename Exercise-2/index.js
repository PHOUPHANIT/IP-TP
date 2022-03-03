const { KhmerDate } = require('./lib')

const khmerDate = new KhmerDate(new Date('2023-03-03T23:38:15.330Z'));

console.log(khmerDate.getDate());