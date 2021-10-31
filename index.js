const ghpages = require("gh-pages");
var fs = require("fs");

const appPath = "../portfolio/build/";
const domain = "lijovijayan.dev";

// setting domain name for github pages to detect
fs.writeFile(`${appPath}CNAME`, domain, function (err) {
  console.log(err);
});

// setting up 404 page
fs.writeFile(
  `${appPath}404.html`,
  `<meta http-equiv="refresh" content="0; url=https://${domain}" />`,
  function (err) {
    console.log(err);
  }
);

ghpages.publish(appPath, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`application is published at https://${domain}`);
  }
});
