var cheerio = require('cheerio');
var express = require('express');
var fs = require('fs');
var request = require('request');

var app = express();

app.get('/', function(req, res) {
    url = 'https://www.timeanddate.com/sun/@2638853';

    request(url, function(error, response, html) {
        if(error) {
            res.send('Error');
        }
        var $ = cheerio.load(html);
        var data = {};

        console.log($('#as-monthsun'));

        fs.writeFile('data.json', JSON.stringify(data, null, 4), function(err) {
            if(!err) {
                res.send('Win');
            }
        });
    });
});

app.listen('8081');

exports = module.exports = app;
