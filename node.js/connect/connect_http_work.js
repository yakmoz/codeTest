var connect = require('connect');
var __dirName = 'node.js/';

// var appServ = connect.createServer().use(connect.static(__dirName+'public'));  connect.createServer ..  deprecated
var appServ = connect().use(connect.static(__dirName+'public'));
appServ.listen(process.env.C9_PORT);
