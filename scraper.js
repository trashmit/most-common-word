const axios = require("axios");
fs = require('fs');

async function scape() {
	try {
		const response = await axios.get('https://www.gutenberg.org/cache/epub/29364/pg29364.txt'); //gets page data
		var html = response.data; //parses
        fs.writeFileSync("ebook.txt", html) //downloads to file ebook.txt
        var list = html.replace(/[\n\r]/g, " ").toLowerCase(); // removes new lines and turns all text lowercase
        list = list.replace(/[$`#()*"£&-.=_\[']/gi, ''); // removes special characters
        list = list.split(" "); // generates list of words in text
        list = list.filter(element => {
            return element !== '';
        }); // removes empty items in list due to uneven spacing in text

        var count = {}; // create dictionary
        for(let i=0; i<list.length; i++){
            count[list[i][0]] = (count[list[i][0]] || 0) + 1; // adds first letter of list to dictionary or increments it if already exists
        }
        var highest = Math.max.apply(null, Object.values(count)); //finds largest value in the dictionary
        var val = Object.keys(count).find(function(a) { //finds key that matches largest value
            return count[a] === highest; 
        });
        console.log(`Highest number of starting letters is ${val} with ${highest} occurances.`);

	} catch (error) {
		throw error;
	}
};

scape();