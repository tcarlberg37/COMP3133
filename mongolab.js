// Lab 5 MongoDB with Studio3T Queries
// Thomas Carlberg 101155271

// Ex 2
db.getCollection('Restaurants').find({"cuisine" : {$eq: "Japanese"}}, {'id:': 1, 'cuisine': 1, 'name': 1, 'city': 1, 'restaurant_id': 1})

// Ex 3
db.getCollection('Restaurants').find({$and: [{"cuisine" : {$eq: "Delicatessen"}}, {"city": {$ne: "Brooklyn"}}]}, {'cuisine': 1, 'name': 1, 'city': 1}).sort({"name": 1})

// Ex 4
db.getCollection('Restaurants').find({$and: 
    [{"cuisine" : {$in: ["Bakery", "Chicken", "Hamburgers", "American"]}}, 
    {"city": {$ne: "Brooklyn"}}, 
    {"restaurant_id": {$gt: "400000000"}}]}, // string not int
{'cuisine': 1, 'name': 1, 'city': 1, 'restaurant_id': 1}).sort({"restaurant_id": -1})





// Restaurants Collection starter code:
db.Restaurants.insertMany(
    [{
      "address": {
        "building": "1008",
        "street": "Morris Park Ave",
        "zipcode": "10462"
     },
     "city": "Bronx",
     "cuisine": "Bakery",
     "name": "Morris Park Bake Shop",
     "restaurant_id": "30075445"
    },
    {
      "address": {
        "street": "Thai Son Street",
        "zipcode": null
     },
     "city": "Manhattan",
     "cuisine": "Vietnamese",
     "name": "Pho Me Long Time",
     "restaurant_id": "30075455"
    },
    {
      "address": {
        "building": "253",
        "street": "East 167 Street",
        "zipcode": null
     },
     "city": "Bronx",
     "cuisine": "Chicken",
     "name": "Mom's Fried Chicken",
     "restaurant_id": "40382900"
    },
    {
      "address": {
        "building": "120",
        "street": "East 56 Street",
        "zipcode": "19800"
     },
     "city": "Mahattan",
     "cuisine": "Italian",
     "name": "Montebello Restaurant",
     "restaurant_id": "40397082"
    },
    {
      "address": {
        "building": "195",
        "street": "Soprano Street",
        "zipcode": "17500"
     },
     "city": "Staten Island",
     "cuisine": "Hamburgers",
     "name": "Joeys Burgers",
     "restaurant_id": "40397555"
    },
    {
      "address": {
        "building": "200",
        "street": "Queens Boulevard",
        "zipcode": "19700"
     },
     "city": "Queens",
     "cuisine": "American",
     "name": "Brunos on the Boulevard",
     "restaurant_id": "40397678"
    },
    {
      "address": {
        "building": "555",
        "street": "Sushi Street",
        "zipcode": "17700"
     },
     "city": "Brooklyn",
     "cuisine": "Japanese",
     "name": "Iron Chef House",
     "restaurant_id": "40397699"
    },
    {
      "address": {
        "building": "555",
        "street": "Fontana Street",
        "zipcode": null
     },
     "city": "Brooklyn",
     "cuisine": "Japanese",
     "name": "Wasabi Sushi",
     "restaurant_id": "40398000"
    },
    {
      "address": {
        "building": "900",
        "street": "Goodfellas Street",
        "zipcode": "17788"
     },
     "city": "Brooklyn",
     "cuisine": "Delicatessen",
     "name": "Sal's Deli",
     "restaurant_id": "40898000"
    },
    {
      "address": {
        "building": "909",
        "street": "44 Gangster Way",
        "zipcode": "17988"
     },
     "city": "Queens",
     "cuisine": "Delicatessen",
     "name": "Big Tony's Sandwich Buffet",
     "restaurant_id": "40898554"
    },
    {
      "address": {
        "building": "1201",
        "street": "121 Canolli Way",
        "zipcode": "17989"
     },
     "city": "Queens",
     "cuisine": "Delicatessen",
     "name": "The Godfather Panini Express",
     "restaurant_id": "40898554"
    }]
    )    