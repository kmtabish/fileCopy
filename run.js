const fs = require("fs-extra");
let sourceDir = "./assets/customer1";
let destDir = "./dist";
try {
  fs.copySync(sourceDir, destDir);
  console.log("Assets Copies Successfully!");
} catch (err) {
  console.error(err);
}
