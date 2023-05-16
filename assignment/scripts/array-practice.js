console.log('****** Array Practice *******');

// 1. Creating arrays
console.log('--- 1. Practice creating arrays ---');

// Example: Array of animals
let animalArray = ['fish', 'cat', 'bird', 'dog'];
console.log('Animals are: ', animalArray);

// 1.a. TODO: Make an array with some favorite foods
let favoriteFoods = ['oyster mushrooms', 'clif bars', 'yogurt', 'canned cat food', 'blue berries', 'avocado toast'];

// 1.b. TODO: Log your array of foods to the console with a message, similar 
//      to the example above
console.log('My favorite foods are: ', favoriteFoods);


// 2. Array.length - tells you how many items are in the array
console.log('--- 2. Length of an array ---');

// Example: How many animals are in the array? 
console.log('Number of animals:', animalArray.length);

// 2.a. TODO: Log to the console the number of foods in your array
console.log('I definitely have more than', favoriteFoods.length, 'favorite foods');

// 3. Accessing array items
console.log('--- 3. Accessing items in an array ---');

// Example: Log the first animal from the array using it's array index
console.log('First animal is', animalArray[0]);

// 3.a. TODO: Log the second animal in the array 
console.log('Second animal is', animalArray[1]);

// 3.b. TODO: Log the last animal in the array using it's array index 
console.log('Last animal is', animalArray[3]);

// 3.c. (STRETCH) TODO: Log the last animal by using the array length, 
//      instead of the exact index number of the last item
console.log('Last animal is', animalArray[animalArray.length - 1]);


// 4. Adding & Removing Array Items
console.log('--- 4. Adding and removing array items ---');

// Example: Add an animal to the end using Array.push
animalArray.push('penguin');
console.log('Added an animal to end,', animalArray);

// 4.a. TODO: Add a new food at the end of your array & log the array
favoriteFoods.push('beyond burger');
console.log('Added one more food item to end', favoriteFoods);

// Example: Remove the last animal by using Array.pop
let removedAnimal = animalArray.pop();
console.log('Removed the last animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.b. TODO: Remove the food at the end of your array & 
//      log both the food removed and the updated array
let removedFood = favoriteFoods.pop();
console.log('Removed last food:', removedFood);
console.log('The list of food is now:', favoriteFoods);

// Example: Add an animal to the beginning using Array.unshift
animalArray.unshift('walrus');
console.log(`Added an animal to beginning: ${animalArray}`);

// 4.c. TODO: Add a food at the beginning of the array & log the array
favoriteFoods.unshift('red vines');
console.log('Added food to beginning:',favoriteFoods);

// Example: Remove the first animal using Array.shift
removedAnimal = animalArray.shift();
console.log('Removed the first animal', removedAnimal);
console.log('The animals are now', animalArray);

// 4.d TODO: Remove the food at the beginning of your array & 
//     log both the food removed and the updated array
removedFood = favoriteFoods.shift();
console.log('Removed first food is:', removedFood);
console.log('My fav food list is now:', favoriteFoods);

// 4.e (STRETCH) TODO: Replace the second food in your array
//      with another one of your favorite foods.
//      Then log the updated array.
console.log('--Replace second food in array');
console.log('Second item is currently:', favoriteFoods[1]);
favoriteFoods[1] = 'greek yogurt';
console.log('Second item is now:', favoriteFoods[1]);
console.log('The array is now:', favoriteFoods)

// 4.f (STRETCH) TODO: Sort your favoriteFoods array
//     in reverse alphabetical order. Log the array.

favoriteFoods.sort();
favoriteFoods.reverse();
console.log('New list order is now:', favoriteFoods);

// 4.g (STRETCH) TODO: Convert your array to a string
//     putting the word "and" between each item.
//     eg "tacos and pizza and pasta". Log the string.




// 4.h (STRETCH) TODO: Make a new array that combines 
//     the favorite foods array with the animals array.
//     Then log the new array.
//     It should look something like:
//     ['pizza', 'pasta', 'fish', 'cat', 'bird', 'dog']

// combined with spread operator
let combinedFoodsAndAnimals = [...animalArray, ...favoriteFoods];

console.log('New array length is:', combinedFoodsAndAnimals.length);
console.log(combinedFoodsAndAnimals);

// combine with concat()
let mergedResult = [].concat(animalArray, favoriteFoods);
console.log(mergedResult);

// combined with .push()
let thirdMergedResult = [];
thirdMergedResult.push(...animalArray, ...favoriteFoods);
console.log(thirdMergedResult);