//Coding Challenge 1 Basketball Score
//func with three parameters
const totalBasketballScore = (freeThrows, midRange, threePointers) =>{
    //calculate and return score of game if inputs a number
    let sum = 0;
    if(typeof freeThrows === 'number' && typeof midRange === 'number' && typeof threePointers === 'number'){
        freeThrows *= 1;
        midRange *= 2;
        threePointers *= 3;
        sum = freeThrows + midRange + threePointers;
        return sum;
    }
    else {
        console.log('All entries must be numbers');
    }
}

//calling and logging func to console
console.log(totalBasketballScore(2, 3, 4));


//Coding Challenge 2 Computer Store
//func with one parameter
const itemPrice = item =>{
    let price = 0;
    //checks if item is a string
    if(typeof item === 'string'){
        //returns price of a specific item
        switch(item){
            case 'computer':
                price = 500;
                return `$${price}`;
            case 'mouse':
                price = 10;
                return `$${price}`;
            case 'tablet':
                price = 250;
                return `$${price}`;
            case 'case':
                price = 25;
                return `$${price}`;
            case 'router':
                price = 100;
                return `$${price}`;
            default:
                console.log('This item is not in available in the store');
        }
    }
    else{
        console.log("Entries should be of type string");
    }
}
//calling and logging func to console
console.log(itemPrice('case'));


//Coding Challenge 3 What's for Dinner?
let restaurants = ['Applebees', 'Panera Bread', 'Popeyes', 'Chopt', 'Chick-fil-A', 'Cheesecake Factory', 'Five Guys',];
//func with one parameter
const randomRestaurant = numOfRestaurants =>{

    let randomRestaurantList = [];
    
    let random = 0;
    if(numOfRestaurants > 0){
        for(let i = 0; i < numOfRestaurants; i++){
            random = Math.floor(Math.random()*restaurants.length);
            randomRestaurantList[i] = restaurants.at(random);
        }
    }
    return randomRestaurantList;
}

//calling and logging func to console
console.log(randomRestaurant(3));


//Coding challenge 4 Leap Year
//func with one parameter
const isLeapYear = year =>{
    //if divisible by 4 and not by a 100
    if(year % 4 === 0 && year % 100 !== 0){
        return true;
    }
    //if divisible by 400
    else if(year % 400 === 0 ){
        return true;
    }
    //if not divisible by both 4 and 400
    else{
        return false
    }
}

//calling func
console.log(isLeapYear(2000));
