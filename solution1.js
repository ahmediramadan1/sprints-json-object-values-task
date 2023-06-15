"use strict";

const fs = require("fs");

// 1. Read JSON File
const data = fs.readFileSync("./problem1.json", "utf-8");
const cat = JSON.parse(data);
// console.log(fluffy);

// 2. Add Height and Weight to Fluffy
cat.height = 50;
cat.weight = 5;

// 3. Change Fluffy to Fluffyy
cat.name = "Fluffyy";

let totalWeight = 0;
let totalActivities = 0;

for (let i = 0; i < cat.catFriends.length; i++) {
    // 5. Print the catFriends names
    console.log(`catFriend ${i + 1}'s name is ${cat.catFriends[i].name}`);

    // 4. List all the activities of Fluffyy’s catFriends
    console.log(
        `Activities of ${cat.catFriends[i].name} are: ${[
            ...cat.catFriends[i].activities,
        ]}`
    );
    totalWeight += cat.catFriends[i].weight;
    totalActivities += cat.catFriends[i].activities.length;

    // 8. Add 2 more activities to Bar & Foo cats
    cat.catFriends[i].activities.push(
        "play with thread",
        "look outside from the window"
    );

    // 9. Update the fur color of bar
    if (cat.catFriends[i].name === "bar") {
        cat.catFriends[i].furcolor = "grey";
    }
}

// 6. Print the total weight of catFriends
console.log(totalWeight);

// 7. Print the total activities of all cats (op:6)
console.log(totalActivities);

console.log(`Final version of Fluffyy: ${cat}`);

// Output new object to output1.json
const newData = JSON.stringify(cat);
fs.writeFileSync("./output1.json", newData, "utf-8");
