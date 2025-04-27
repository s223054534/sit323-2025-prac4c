# Calculator API Microservice

This is a simple Node.js-based calculator API microservice that provides several arithmetic operations. The API includes endpoints for basic operations as well as advanced arithmetic operations like exponentiation, square roots, and modulo.

# Available Endpoints

1. Exponentiation
    - Route: `/exponentiation`
    - Method: `GET`
    - Query Parameters:
        - `base`: The base number (required).
        - `exponent`: The exponent (required).
    - Example Request:

      curl "http://localhost:3000/exponentiation?base=2&exponent=3"

    - Example Response:

      {"result": 8}
      

2. Square Root
    - Route: `/square-root`
    - Method: `GET`
    - Query Parameters:
        - `number`: The number to calculate the square root of (required).
    - Example Request:
      
      curl "http://localhost:3000/square-root?number=16"
      
    - Example Response:
      
      {"result": 4}
      

3. Modulo
    - Route: `/modulo`
    - Method: `GET`
    - Query Parameters:
        - `dividend`: The dividend (required).
        - `divisor`: The divisor (required).
    - Example Request:
   
      curl "http://localhost:3000/modulo?dividend=10&divisor=3"
      
    - Example Response:
   
      {"result": 1}
    

4. Default Route
    - Route: `/`
    - Method: `GET`
    - Example Request:
      
      curl "http://localhost:3000/"
  
    - Example Response:
   
      Welcome to the Calculator API
  

# Error Handling

- For invalid inputs or incorrect parameters, the API will return a `400` status code with an appropriate error message:
  - Example: If a user provides non-numeric values for base and exponent, the response will be:
  
    {"error": "Invalid input"}


# Installation and Setup

1. Clone this repository:

    git clone https://github.com/username/sit323-2025-prac4c.git


2. Navigate to the project directory:

    cd sit323-2025-prac4c
  

3. Install dependencies:

    npm install


4. Run the server:

    node server.js


5. The server will be running at `http://localhost:3000`.

