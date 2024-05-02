const fs = require('node:fs');
const path = require('node:path');

const folder = "D:\\Dev\\workspace\\pro\\1PP2_Prod_PMH_4464_Controle_25608_1\\P22";



let result = "String tableContent = \"";

fs.readdirSync(folder).map( fileName => {
    return path.join(folder, fileName);
}).forEach( filePath => { 
    // read file
    const data = fs.readFileSync(filePath, 'utf8');
    
    data.split("\n").forEach( line => {
        result+= line+"\n";
    })
}); 
 
result+= "\";";

fs.writeFileSync("./table.txt", result);
console.log(result);