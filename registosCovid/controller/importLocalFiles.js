const fs = require("fs")

/**controladores aqui */

module.exports.readFile = async () => {
    const filePath = 'C:\\Users\\tomas\\Desktop\\Mestrado\\1A_2S\\Processo Clínico Eletrónico\\GitHub\\PG50788_PCE\\registosCovid\\content\\';
    const filenames = ['doentes.csv'];

    for(let name of filenames) {
        const fileRead = fs.readFileSync(filePath + name);
        let lines = fileRead.toString().split('\n');
        for(let line of lines) {
            let lineParams = line.split(';');
            if(lineParams[lineParams.lenght-1].includes('\r')) {
                
            }
        }
    }
}