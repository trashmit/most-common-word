:)

Installation:
This was created using javascript, in order to run it without using a website you need node.js 
which if you don't have installed can be quickly installed from https://nodejs.org/en/download/
the library axios which I used to make the web request must be insalled by typing
"npm i axios" in the terminal/console (npm is installed in the node.js install)
then run the code using "node scraper.js" in terminal/console to execute the code.

Thoughts:
One tradeoff I made was using a dictionary instead of a 2d list to store the number of times a letter was used to start words
using a dictionary made looking for the largest value a little annoying as they aren't ordered, it also decreases 
the efficiency of the code but if I made a list with 26 lists to hold each letter it would have made it more annoying to filter 
out numbers or other unexpected first characters though I think using a dictionary was overall a nicer solution and made visualising the 
data easier while debugging. A few things are: links start with h even if the domain doesn't due to links having http in them, a number could
be considered a word so I could have turned all the numbers into their word form and counted their letter too, but that is
probably reading too much into the problem. 

Thanks for reading, please email me if there are any problems I will respond ASAP!
- Ashmit