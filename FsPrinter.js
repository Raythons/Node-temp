const {writeFileSync, readFileSync} = require('fs');

const HIText = readFileSync(`./FsM/FText/hello.txt`, `utf-8`)
const FText = readFileSync(`./FsM/urdad.txt`, `utf-8`)
console.log(HIText);
console.log(FText);
const override = writeFileSync(`./FsM/urdad.txt`, "i will fuck ur dad and your god ahve abanded you", {flag: `a`})
console.log(override);