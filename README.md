# Midterm Exam: Node/Express/MongoDB Application

## Author

Name: Ankit Dave
Student Number: 8959634

### Steps to set up and run the project locally

#### Step 1: Clone the repository to your local machine
git clone https://github.com/ankitdave677/Custom-Collections-API-in-NodeJS

#### Step 2: Install dependencies using npm
Run **npm install** in the project directory to install the required dependencies.

#### Step 3: Configuration
 1. Create a .env file in the root of your project.
 2. Add your MongoDB connection URI to the .env file
 
#### Step 4: Run the application
Run **node server.js** in the project directory to start the application.
The server should start running on http://localhost:3000

#### Step 5: Test the application
API Endpoints

POST /destinations: Create a new destination.

GET /destinations: Get all destinations.

GET /destinations/
: Get a specific destination by ID.

PUT /destinations/
: Update a destination by ID.

DELETE /destinations/
: Delete a destination by ID.

## Testing

I test this application using the vs code extension named **REST Client**, in which I have creaed a file named **route.rest** which is used to test the application using the follwoing URLS:

### To add a new item to the collection
POST http://localhost:3000/destinations
Content-Type: application/json
  {
    "name": "Waterloo",
    "placesToTravel": ["KWC Market", "Niagara", "Tobermory Islands"],
    "nearbyAirport": "Waterloo International Airport",
    "estimatedTravelDate": "2024-08-11"
  }

### Retrieve all items from the collection
GET http://localhost:3000/destinations

### Retrieve a single item by its ID
GET http://localhost:3000/destinations/ID

### Update an item by its ID
PUT http://localhost:3000/destinations/ID
Content-Type: application/json

{
  "name": "Toronto (Updated)",
  "placesToTravel": ["Royal Garden", "Louvre Museum", "Notre Dame Cathedral"],
  "nearbyAirport": "YYZ Airport",
  "estimatedTravelDate": "2024-08-01"
}

### Delete an item by its ID
DELETE http://localhost:3000/destinations/ID

Apart from this, you can also run this web application with using the tools such as Postman or cURL.
