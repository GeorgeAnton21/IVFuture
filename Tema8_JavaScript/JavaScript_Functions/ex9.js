//FixStart

function fixStart(str) {
    console.log(`${str.substring(0,1)}${(str.substr(1)).replaceAll(str.substring(0,1), "*")}`);
}
fixStart('bubble');


//se testeaza in html