module.exports = ()=>
Math.floor((Math.random()) * 0x10000)
.toString(16)
.substring(1);