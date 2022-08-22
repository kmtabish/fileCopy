const fs = require("fs-extra");
var arguments = process.argv;
let sourceDir = `./assets/${arguments[2]}`;
let destDir = "./dist";
try {
  fs.emptyDirSync(destDir);
  console.log("Deleted the files from the dis Folder!");
  console.log(
    `copying the content from the ${arguments[2]} to the dist folder`
  );
  fs.copySync(sourceDir, destDir);
  console.log("Assets Copies Successfully!");
} catch (err) {
  console.error(err);
}
