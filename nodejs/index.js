// var b = require('./content');
// var d = require('./content1');
// var a = 25;
// b();
// console.log(d.firstname);
// console.log(d.lastname);
var http = require('http');
var fs = require('fs');
var book = [{id:1, bookname: 'book1' , price: 1000 },
    { id: 1, bookname: 'book2', price: 100 },
    { id: 1, bookname: 'book3', price: 50 }]
function handler(req, res) {
    switch (req.url) {
        case '/':
            res.write(fs.readFileSync('index.html'));
            res.end();
            break;
        case '/books':
            res.write(JSON.stringify(book));
            res.end();
            break;
        case '/products':
            res.write('list of products');
            res.end();
            break;
        default:
            res.write('welcome to node js ');
            res.end();
            break;
    }

}
var server = http.createServer(handler)

server.listen(3000,function(){
    console.log('listening to server 3000')
})