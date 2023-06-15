"use strict";

const fs = require("fs");
const moment = require("moment");

// 1. Read the json in problem2.json
const data = fs.readFileSync("./problem2.json", "utf-8");
const dataObj = JSON.parse(data);

// 2. Install moment.js package using npm
// 3. Convert the dates into the following format YYYY-MM-DD
for (let i = 0; i < dataObj.accidents.length; i++) {
    dataObj.accidents[i].date = moment(dataObj.accidents[i].date).format(
        "YYYY-MM-DD"
    );
}

// 4. Write the results to output2.json
const newData = JSON.stringify(dataObj);
fs.writeFileSync("./output2.json", newData, "utf-8");
