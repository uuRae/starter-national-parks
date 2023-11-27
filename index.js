console.log(document);

// Find an element with the class value.
const value1 = document.querySelector(".value");
console.log(value1);

// Find a <button> element.
const button1 = document.querySelector("button");
console.log(button1);

// Find an element with the class area.
const area1 = document.querySelector(".area");
console.log(area1);

// Find a <div> that is a descendant of an element with the class stat. (Hint: Look up descendant selectors in the documentation).
const statDiv1 = document.querySelector(".stat div");
console.log(statDiv1);

// Find an element with the class hello. Take careful note of what is returned there.
const hello1 = document.querySelector(".hello");
console.log(hello1);

// Find all the buttons on the page
const buttons = document.querySelectorAll("button");
console.log(buttons);

// Get a list of all `<h3>` elements
const heading3List = document.querySelectorAll("h3");
// Iterate over the list and print each one
for (let element of heading3List.values()) {
  console.log(element);
}
// Or you can use a simple for loop to iterate over the NodeList, like this:
for (let i = 0; i < heading3List.length; i++) {
  const element = heading3List[i];
  console.log(element);
}

// Get a list of all the <div> elements containing ratings on the page. Log them to the console using the values() method.
const divRatings = document.querySelectorAll("div .rating-display");
console.log(divRatings);

// Get a list of all the <div> elements containing areas on the page. Log them to the console using a simple for loop.
const divArea = document.querySelectorAll("div .area-display");
console.log(divArea);
// Log them to the console using a simple for loop.
for (let i = 0; i < divArea.length; i++) {
  const element = divArea[i];
  console.log(element);
}

// Limit the length of the descriptions to 250 characters and add an ellipsis to those that were truncated
const descriptions = document.querySelectorAll(".description-display");
for (let desc of descriptions.values()) {
  let content = desc.innerText;

  if (content.length > 250) {
    content = content.slice(0, 250);
    content = content + '<a href="#">...</a>';
  }
  desc.innerHTML = content;
}

// Bold any rating value that is greater than 4.7
// Set the color of the rating text to a lighter green if the rating is greater than 4.7
const ratings = document.querySelectorAll(".rating-display .value");
for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.style.fontWeight = "bold";
    rating.style.color = "#3ba17c";
  }
}

// Set the color of the rating text to a lighter green if the rating is greater than 4.7
// for (let rating of ratings) {
//   let ratingValue = parseFloat(rating.innerText);

//   if (ratingValue > 4.7) {
//     rating.style.fontWeight = "bold";
//     rating.style.color = "#3ba17c";
//   }
// }

// classList instead of the above
for (let rating of ratings) {
  let ratingValue = parseFloat(rating.innerText);

  if (ratingValue > 4.7) {
    rating.classList.add("high-rating");
    rating.classList.remove("value");
  }
}

// Select the first park on the page and remove it
// Get the parent element of all parks
// const main = document.querySelector("main");
// // Select a single park
// const park = main.querySelector(".park-display");
// // Remove that park
// main.removeChild(park);

// Dynamically add a statement to the page's heading, stating the number of parks on display.
// To do this, you would start by selecting all the parks on the page and getting the number
// of parks from that list. Then you would construct an element with this information and
// insert it on the DOM at the right place.
const parks = document.querySelectorAll(".park-display");
const numberParks = parks.length;
const newElement = document.createElement("div");
newElement.innerText = `${numberParks} exciting parks to visit`;
// Add style and classes
newElement.classList.add("header-statement");
// Add the element to the page
const header = document.querySelector("header");
header.appendChild(newElement);

// Add event listener to a button
const firstBtn = document.querySelector("button");

// Call the addEventListener() method on this button
firstBtn.addEventListener("click", (event) => {
  console.log("You clicked the button", event);
});

// Get the specific element that fired the event with the target property of the event object,
// as shown here:
firstBtn.addEventListener("click", (event) => {
  console.log(event.target);
});

// Select all the buttons for all the parks
const allBtns = document.querySelectorAll(".rate-button");

// Iterate through the list of buttons and add an event handler to each
// allBtns.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     console.log(event.target);
//   });
// });

// The <section> element that represents a park is the parent of the button.
// Because event.target refers to the button that was clicked, then using the parentNode
// property of that button will get you the <section> element that was clicked.
allBtns.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    console.log(event.target.parentNode);
  });
});

// You can then manipulate this element in any way that you wish. For example,
//the following code changes the background color:
// allBtns.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     const park = event.target.parentNode;
//     park.style.backgroundColor = "#c8e6c9";
//   });
// });


// SORT BY NAME AND RATING

// // Select the `nameSorter` link
// const nameSorter = document.querySelector("#name-sorter");

// // Add an event listener
// nameSorter.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("You clicked the name sorter");
// });

// nameSorter.addEventListener("click", (event) => {
//   event.preventDefault();

//   // 1.  Get the main element
//   const main = document.querySelector("main");

//   // 2. Get the list of parks
//   const parksList = main.querySelectorAll(".park-display");

//   // 3. Empty the main element
//   main.innerHTML = "";

//   // 4. Create an array
//   const parksArray = Array.from(parksList);

//   // 5. Sort the array
//   parksArray.sort((parkA, parkB) => {
//     const parkAName = parkA.querySelector("h2").innerText;
//     const parkBName = parkB.querySelector("h2").innerText;
//     if (parkAName < parkBName) {
//       return -1;
//     } else if (parkAName > parkBName) {
//       return 1;
//     } else {
//       return 0;
//     }
//   });

//   // 6. Insert each park into the DOM
//   parksArray.forEach((park) => {
//     main.appendChild(park);
//   });
// });

// Refactor this code by creating an external function for the event 
// handler, and another for the sorting
// Function for sorting by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;
  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// Function for handling the `nameSorter` click
const nameSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort(sortByName);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");

// Add an event listener
nameSorter.addEventListener("click", nameSorterClickHandler);


// Function for sorting by rating
const sortByRating = (parkA, parkB) => {
  const parkARating = parkA.querySelector(".rating-display").innerText;
  const parkBRating = parkB.querySelector(".rating-display").innerText;
  if (parkARating > parkBRating) {
    return -1;
  } else if (parkARating < parkBRating) {
    return 1;
  } else {
    return 0;
  }
};

// Function for handling the `nameSorter` click
const ratingSorterClickHandler = (event) => {
  event.preventDefault();

  // 1.  Get the main element
  const main = document.querySelector("main");

  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");

  // 3. Empty the main
  main.innerHTML = "";

  // 4. Create an array
  const parksArray = Array.from(parksList);

  // 5. Sort the array
  parksArray.sort(sortByRating);

  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// Select the `nameSorter` link
const ratingSorter = document.querySelector("#rating-sorter");

// Add an event listener
ratingSorter.addEventListener("click", ratingSorterClickHandler);


// Add a DOMContentLoaded event handler
// console.log("Before!");

// window.addEventListener("DOMContentLoaded", (event) => {
//   console.log("Loaded!");
// });

// console.log("After!");

// Refactor the DOM manipulation code
// It's common practice to move code that manipulates the DOM into a single DOMContentLoaded 
//event-handler function. You can name that function anything that you want. For example, 
//you might name it init, ready, or main, as in the example below. Notice how main is declared, 
//then passed to window.addEventListener() as the event handler:
// The code that runs once the DOM is loaded

const main = () => {
  // Select the `nameSorter` link
  const nameSorter = document.querySelector("#name-sorter");

  // Add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);

  // Select the `ratingSorter` link
  const ratingSorter = document.querySelector("#rating-sorter");

  // Add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);
}

// Add event listener for `DOMContentLoaded`
window.addEventListener("DOMContentLoaded", main);