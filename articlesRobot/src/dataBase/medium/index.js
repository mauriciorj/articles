var Crawler = require("crawler");
var CheckLinks = require("./checkLinks");

// This crawler is just to find all links starting on the link provieded at bottom
var c = new Crawler({
  maxConnections: 5,
  // This will be called for each crawled page
  callback: function (error, res, done) {
    if (error) {
      console.log(error);
    } else {
      var $ = res.$;
      $("a").each(function (index, a) {
        CheckLinks(a.attribs.href);
      });
    }
    done();
  },
});

// Queue URLs with custom callbacks & parameters
c.queue("https://medium.com/topic/javascript");