console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
const title = "The Lord of the Javascript";
const author = "Mario";
let rating = 4.2;
let numberOfSales = 120;

logBookData();
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

N: nach console.log numberOfSales++


Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
function increaseNumberOfSalesChangeRating() {
  let newNumberOfSales = numberOfSales + 2;
  let newRating = rating - 2;

  console.log(title, author, newNumberOfSales, newRating);
}

increaseNumberOfSalesChangeRating();

// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
function logBookData() {
  console.log(
    "The title of the book is: " +
      title +
      "." +
      " The author is: " +
      author +
      "." +
      " The rating of the book is: " +
      rating +
      "." +
      " And the number of sales is: " +
      numberOfSales +
      "."
  );
}

// --^-- write your code here --^--
