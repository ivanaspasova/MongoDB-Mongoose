var cheerio = require("cheerio");

var axios = require("axios");

axios
  .get("https://www.w3schools.com/nodejs/default.asp")
  .then(function(response) {
    var $ = cheerio.load(response.data);

    var results = [];

    $("p").each(function(i, element) {
      var title = $(element).text();

      var link = $(element)
        .children()
        .attr("href");

      results.push({
        title: title,
        link: link
      });
    });

    console.log(results);
  });
