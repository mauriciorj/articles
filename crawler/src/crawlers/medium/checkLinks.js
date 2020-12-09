var Crawler = require("crawler");
var urlCheck = require("../utils/urlCheck");
const fs = require("fs");

const CheckLinks = (link) => {
  // This crawler is just to find all links starting on the link provieded at bottom
  var c = new Crawler({
    maxConnections: 5,
    // This will be called for each crawled page
    callback: function (error, res, done) {
      if (error) {
        console.log(error);
      } else {
        var $ = res.$;
        // $ is Cheerio by default
        //a lean implementation of core jQuery designed specifically for the server

        var now = new Date();
        var logfile_name =
          now.getFullYear() +
          "-" +
          now.getMonth() +
          "-" +
          now.getDate() +
          ".txt";

        const separator =
          "-------------------------------------------------------------";
        const urlResult = urlCheck(link);
        const titleResult = $("h1").text();
        const resultFile = `${separator} \n ${urlResult} \n ${titleResult} \n\n\n`;

        fs.appendFile(`./temp/${logfile_name}`, resultFile, function (err) {
          if (err) {
            return console.log(err);
          }
          console.log("The file was saved!");
        });

      }
      done();
    },
  });

  // Queue URLs with custom callbacks & parameters
  c.queue(link);
};

module.exports = CheckLinks;
