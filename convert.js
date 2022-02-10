const { marked } = require('marked');
var fs = require('fs');
let filename = "README.md"

fs.readFile(process.cwd() + '/' + filename, function (err, data) {
    if (err) {
        throw err;
    }
    let text = data.toString();
    const html = marked.parse(text);

    let filePath = process.cwd() + "/README.html";
    fs.writeFile(filePath, html, { flag: "wx" }, function (err) {
        if (err) {
            console.log("File '" + filePath + "' already exists. Aborted!");
        } else {
            console.log("Done, saved to " + filePath);
        }
    });
});