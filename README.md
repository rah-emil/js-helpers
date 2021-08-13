# jsHelpers 🚀
jsHelpers - it is a JavaScript library that contains all the functions that we constantly write or google.

Let's use the jsHelpers library to google less and implement more of the project's functionality.

Below are examples and descriptions of all the functions available in jsHelpers.

## Getting started
### ES6
`npm i @rah-emil/js-helpers --save`
```javascript
import "@rah-emil/js-helpers"
```
or
```javascript
import { simplifyNumber } from "@rah-emil/js-helpers/src/modules/visual"

Number.prototype.simplifyNumber = simplifyNumber

(3568934).simplifyNumber(2) // 3.57M
```

### CDN
```html
<script src="https://cdn.jsdelivr.net/npm/@rah-emil/js-helpers@1.1.0/dist/js-helpers.js"></script>

<script>
    (3568934).simplifyNumber(2) // 3.57M
</script>
```

## Math functions
These are functions that perform some kind of mathematical operations on numbers and return the result to us.

#### Percentage difference between numbers
For example, we need to find out - how much more we earned this month, compared to the last month (in percent).
 ```javascript
// 500 - earned this month
// 1500 - earned last month

(500).percentageDifference(1500) // -66.66666666666666 (earned 66.6% less)
```

#### Subtracting a specific percentage from a number
For example, we want to display the cost of a discounted product
 ```javascript
// 500 - number to subtract
// 25 - percent

(500).minusPercentage(25) // 375
```

#### Random number FROM and TO
 ```javascript
Math.randomInteger(10, 90) // random number from 10 to 90
```

#### Integer check
 ```javascript
(14.7).isInteger() // false
```

#### The nearest distance
For example, to find the closest city to a user
```javascript

let locations = [
    {name: "Moscow", coords: [55.79749504565197, 37.5407153847656]},
    {name: "Voronezh", coords: [51.66109513550912, 39.19964245473753]},
    {name: "Yaroslavl", coords: [57.62662119485742, 39.89367465100093]},
    {name: "Rybinsk", coords: [58.04855727216249, 38.85813673976128]},
    {name: "Ivanovo", coords: [57.00040249293972, 40.973840485275254]},
    {name: "Kursk", coords: [51.73096145146215, 36.192820361190755]},
    {name: "Bryansk", coords: [53.243644660620774, 34.36328412094874]},
]

let myCoords = [52.7614485, 35.6722916]

Math.nearestDistance(locations, myCoords)

// {
//     "name": "Bryansk",
//     "coords": [
//         53.243644660620774,
//         34.36328412094874
//     ]
// }
```

## Converting numbers to a specific format
Very often we need to convert a number, for example, to a monetary format, or just break it down into digits. More on this below.

#### Monetary number format
Convert numbers to desired currency format

**A simple example:**
 ```javascript
(14990.79).toCurrency() // 14 990.79$ (non-breaking spaces)
```

**We can specify price parameters:**
 ```javascript
// 1st parameter - currency symbol or text (by default "$")
// 2nd parameter - currency position ('after' - by default after, 'before' - in front)
// 3rd parameter - number of decimal places (default 2)
// 4th parameter - whether to trim zeros after the decimal point (by default false, i.e. no zeros)
// 5th parameter - separator (by default ".")

(14990.79).toCurrency("₽", undefined, 2, true, ",") // 14 990,79₽
```

#### Dividing a number into digits
 ```javascript
(3568934).makeDigit() // 3 568 934 (non-breaking spaces)
```

#### Simplifying large numbers (for humans)
For example, we need to display the number of views of an article, likes, comments, etc.
 ```javascript
(7356892344).simplifyNumber(1) // 7.4B
(3568934).simplifyNumber(2) // 3.57M
(58934).simplifyNumber(2) // 58.93K
(5894).simplifyNumber(1) // 5.9K
(168).simplifyNumber() // 168
```


## Array Actions
Simple array operations

#### Removing items
Removing 1 item
 ```javascript
let numbers = [854, 1, 8, 4, 7, 4354]
numbers.deleteItem(4) // [854, 1, 8, 7, 4354]

```
Removing multiple items
 ```javascript
let numbers = [854, 1, 8, 4, 7, 4354]
numbers.deleteItems([4, 854]) // [1, 8, 7, 4354]
```

## Actions on objects in an array

#### Sum of Object Keys
For example, we need to calculate the total cost of all items in the cart.
 ```javascript
let cart = [
    {title: 'iPhone 6s', price: 23500.00},
    {title: 'AirPods', price: 11390.00},
    {title: 'Чехол для iPhone 6s (синий)', price: 490.80},
]

cart.sum('price') // 35380.8 (number)
cart.sum('price').toCurrency("₽") // 35 380.80₽ (monetary number)
```

#### Average of object keys
For example, we need to find out the average rating of a product according to reviews.
 ```javascript
let product = {
    title: 'iPhone XR',
    // ...
    reviews: [
        {text: '...', stars: 4.9},
        {text: '...', stars: 3.2},
        {text: '...', stars: 1},
        {text: '...', stars: 5},
        {text: '...', stars: 4.5},
    ]
}

product.reviews.average('stars') // 3.72
```

#### Checking an object or array for emptiness
With this check, your code will look more elegant.
 ```javascript
let user = {}
user.isEmpty() // true
```

## Checking strings (RegExp)
 ```javascript
('013131@mail.ru').isEmail() // true

('12572').isOnlyNumbers() // true

('letter').isOnlyLetters() // true

('latin').isOnlyLatin() // true

('кириллица').isOnlyCyrillic() // true

('rah-emil.ru').isDomain() // true

('255.255.255.255:8000').isIP() // true

('013131@mail.ru').hasSymbols() // true
```