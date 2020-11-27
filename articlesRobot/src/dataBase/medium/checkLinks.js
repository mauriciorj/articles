var Crawler = require("crawler");

const CheckLinks = (link) => {
// This crawler is just to find all links starting on the link provieded at bottom
var c = new Crawler({
    "maxConnections": 5,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;
            // $ is Cheerio by default
            //a lean implementation of core jQuery designed specifically for the server
            console.log('-------------------------------------------------------------')
            console.log($("h1").text())

        }
        done();
    }
});

// Queue URLs with custom callbacks & parameters
c.queue(link);
}

module.exports = CheckLinks;