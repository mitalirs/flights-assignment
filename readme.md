## Flights-assignment
### Consists of the following types of API routes
#### 1. type - GET
#### &nbsp; /flights
#### gets all flights from the record

<br/>

#### 2. type - GET
#### &nbsp; /flights/:flight_no
#### gets all flight by flight_no

<br/>

#### 3. type - GET
#### &nbsp; /flight
#### gets flights based on source and destination as mentioned in request body (records returned are sorted based on the duration (may vary due to stops in some cases))

<br/>

#### 4. type - POST
#### &nbsp; /flights
#### creates a new flight instance based on request body

<br/>

#### Sample database
````
{
    "_id" : ObjectId("62f5f0fd858a49fad107799b"),
    "flight_no" : 1,
    "origin" : "Mumbai",
    "destination" : "Bangalore",
    "date" : "10-08-22",
    "arrivalTime" : "1700",
    "departureTime" : "1530",
    "duration" : 2,
    "price" : 15000,
    "stops" : [],
    "__v" : 0
}

/* 2 */
{
    "_id" : ObjectId("62f5f7c6cf48245e7015bf24"),
    "flight_no" : 2,
    "origin" : "Mumbai",
    "destination" : "Pune",
    "date" : "11-08-22",
    "arrivalTime" : "1700",
    "departureTime" : "1530",
    "duration" : 2,
    "price" : 15000,
    "stops" : [],
    "__v" : 0
}

/* 3 */
{
    "_id" : ObjectId("62f65d677db29260391ea860"),
    "flight_no" : 3,
    "origin" : "Mumbai",
    "destination" : "Kerala",
    "date" : "11-08-22",
    "arrivalTime" : "1930",
    "departureTime" : "1530",
    "duration" : 4,
    "price" : 65000,
    "stops" : [ 
        "bangalore", 
        " hyderabad"
    ],
    "__v" : 0
}

/* 4 */
{
    "_id" : ObjectId("62f65e41d69157f634592f75"),
    "flight_no" : 4,
    "origin" : "Mumbai",
    "destination" : "Kerala",
    "date" : "11-08-22",
    "arrivalTime" : "1830",
    "departureTime" : "1530",
    "duration" : 3,
    "price" : 55000,
    "stops" : [ 
        "bangalore"
    ],
    "__v" : 0
}

/* 5 */
{
    "_id" : ObjectId("62f65e56d69157f634592f77"),
    "flight_no" : 5,
    "origin" : "Mumbai",
    "destination" : "Kerala",
    "date" : "12-08-22",
    "arrivalTime" : "1730",
    "departureTime" : "1530",
    "duration" : 2,
    "price" : 55000,
    "stops" : [],
    "__v" : 0
}
````

#### 1. get all flights (/flights) fetches
````
[
    {
        "_id": "62f5f0fd858a49fad107799b",
        "flight_no": 1,
        "origin": "Mumbai",
        "destination": "Bangalore",
        "date": "10-08-22",
        "arrivalTime": "1700",
        "departureTime": "1530",
        "duration": 2,
        "price": 15000,
        "stops": [],
        "__v": 0
    },
    {
        "_id": "62f5f7c6cf48245e7015bf24",
        "flight_no": 2,
        "origin": "Mumbai",
        "destination": "Pune",
        "date": "11-08-22",
        "arrivalTime": "1700",
        "departureTime": "1530",
        "duration": 2,
        "price": 15000,
        "stops": [],
        "__v": 0
    },
    {
        "_id": "62f65d677db29260391ea860",
        "flight_no": 3,
        "origin": "Mumbai",
        "destination": "Kerala",
        "date": "11-08-22",
        "arrivalTime": "1930",
        "departureTime": "1530",
        "duration": 4,
        "price": 65000,
        "stops": [
            "bangalore",
            " hyderabad"
        ],
        "__v": 0
    },
    {
        "_id": "62f65e41d69157f634592f75",
        "flight_no": 4,
        "origin": "Mumbai",
        "destination": "Kerala",
        "date": "11-08-22",
        "arrivalTime": "1830",
        "departureTime": "1530",
        "duration": 3,
        "price": 55000,
        "stops": [
            "bangalore"
        ],
        "__v": 0
    },
    {
        "_id": "62f65e56d69157f634592f77",
        "flight_no": 5,
        "origin": "Mumbai",
        "destination": "Kerala",
        "date": "12-08-22",
        "arrivalTime": "1730",
        "departureTime": "1530",
        "duration": 2,
        "price": 55000,
        "stops": [],
        "__v": 0
    }
]
````


#### 2. get all flight by flight_no (/flights/3) fetches
````
{
    "_id": "62f65d677db29260391ea860",
    "flight_no": 3,
    "origin": "Mumbai",
    "destination": "Kerala",
    "date": "11-08-22",
    "arrivalTime": "1930",
    "departureTime": "1530",
    "duration": 4,
    "price": 65000,
    "stops": [
        "bangalore",
        " hyderabad"
    ],
    "__v": 0
}
````


#### 3. get flights by source and destination (/flights) fetches
#### request body :
````
{
    "origin": "Mumbai",
    "destination": "Kerala"
}
````
#### response:
````
{
    "flights": [
        {
            "_id": "62f65e56d69157f634592f77",
            "flight_no": 5,
            "origin": "Mumbai",
            "destination": "Kerala",
            "date": "12-08-22",
            "arrivalTime": "1730",
            "departureTime": "1530",
            "duration": 2,
            "price": 55000,
            "stops": [],
            "__v": 0
        },
        {
            "_id": "62f65e41d69157f634592f75",
            "flight_no": 4,
            "origin": "Mumbai",
            "destination": "Kerala",
            "date": "11-08-22",
            "arrivalTime": "1830",
            "departureTime": "1530",
            "duration": 3,
            "price": 55000,
            "stops": [
                "bangalore"
            ],
            "__v": 0
        },
        {
            "_id": "62f65d677db29260391ea860",
            "flight_no": 3,
            "origin": "Mumbai",
            "destination": "Kerala",
            "date": "11-08-22",
            "arrivalTime": "1930",
            "departureTime": "1530",
            "duration": 4,
            "price": 65000,
            "stops": [
                "bangalore",
                " hyderabad"
            ],
            "__v": 0
        }
    ]
}
````


#### 4. create flight
#### responds with 201 status code
````
{
    "flight_no": 6,
    "origin": "Mumbai",
    "destination": "Hyderabad",
    "date": "12-08-22",
    "arrivalTime": "1730",
    "departureTime": "1530",
    "duration": 2,
    "price": 55000,
    "stops": [],
    "_id": "62f86135d988e6373f9fb34e",
    "__v": 0
}
````

## Set up
### To set it up on your machine
##### 1. Use the following git command to clone this repository:
```git clone https://github.com/mitalirs/Task-App.git```
##### 2. Run the following npm command to install dependencies
```npm i```
##### 3. Connect to the mongodb and run the following command to start the server
```node index.js```
