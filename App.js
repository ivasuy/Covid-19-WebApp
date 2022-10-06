const request = require("request");
const cheerio = require("cheerio");
const chalk = require("chalk");
// feature -> request module

request('https://www.worldometers.info/coronavirus/', cb);

function cb(error, response, html) {
    if(error){

        console.error('error:', error); // Print the error if one occurred

    } else {

        handlehtml(html);

    }
}

function handlehtml(html){
    
    let selTool = cheerio.load(html);
    // let h1s = selTool = ("h1");
    let contArray = selTool("#maincounter-wrap span");
    // for ( let i = 0; i < contArray.length; i++ ){

    //     let data = selTool(contArray[i]).text();
    //     console.log("data" , data);

    // }
    let total = selTool(contArray[0]).text();
    let deaths = selTool(contArray[1]).text();
    let recovered = selTool(contArray[2]).text();
    // console.log(h1s.length);
    console.log(chalk.gray(" Total Cases: " + total));
    console.log(chalk.red(" Deaths: " + deaths));
    console.log(chalk.green(" Recovered: " + recovered));
}