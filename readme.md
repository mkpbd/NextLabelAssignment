## Documention of Project

This project is an Ecommarce using javascript framework express, Databse mongoDb and mongoos with Zood for validation.

It includes endpoints of creating products and orders updating and deleteing products as well as creating and reriving orders.

### Techonlogies

1. Node.js
2. MonogoDB
3. Typescript

---

Installation

1. install Dependances:

   ```
   npm install

   ```

2. start server

   ```
   npm run start:dev

   ```

3. Open Browser and Postman Go

   ```
   localhost:5000/
   ```

Endpoints

Product entpoints

- **URL:** `/api/products`
- **Method:** `POST`
- **Description:** Creates a new product.

  Body

```
{
  "name": "iPhone 13",
  "description": "A sleek and powerful smartphone with cutting-edge features.",
  "price": 999,
  "category": "Electronics",
  "tags": ["smartphone", "Apple", "iOS"],
  "variants": [
    {
      "type": "Color",
      "value": "Midnight Blue"
    },
    {
      "type": "Storage Capacity",
      "value": "256GB"
    }
  ],
  "inventory": {
    "quantity": 50,
    "inStock": true
  }
}
```

#### Get All Products

https://assignemt-2-moyhbxygt-mostofa-kamals-projects.vercel.app/api/products

- **URL:** `/api/products`
- **Method:** `GET`
- **Description:** Retrieves all products.

#### Get Product by ID

https://assignemt-2-moyhbxygt-mostofa-kamals-projects.vercel.app/api/products/productId

- **URL:** `/api/products/:productId`
- **Method:** `GET`
- **Description:** Retrieves a product by its ID.

#### Update Product by ID

https://assignemt-2-moyhbxygt-mostofa-kamals-projects.vercel.app/api/products/productId

- **URL:** `/api/products/:productId`
- **Method:** `PUT`
- **Description:** Updates a product by its ID.
- **Body:** (Fields to be updated)
  ```json
  {
    "name": "iPhone 15 pro max"
  }
  ```

#### Delete Product by ID

https://assignemt-2-moyhbxygt-mostofa-kamals-projects.vercel.app/api/products/productId

- **URL:** `/api/products/:productId`
- **Method:** `DELETE`
- **Description:** Deletes a product by its ID.

#### Search Products

https://next-label-assignment.vercel.app/api/products

- **URL:** `/api/products?searchTerm=iphone`
- **Method:** `GET`
- **Description:** Searches for products by a search term (e.g., name, description, category and tags).

### Order Endpoints

https://next-label-assignment.vercel.app/api/orders

#### Create a New Order

get postman or other clienst

https://next-label-assignment.vercel.app/api/orders

- **URL:** `/api/orders`
- **Method:** `POST`
- **Description:** Creates a new order.
- **Body:**
  ```json
  {
    "email": "string",
    "productId": "string",
    "price": "number",
    "quantity": "number"
  }
  ```

#### Get All Orders

https://assignemt-2-moyhbxygt-mostofa-kamals-projects.vercel.app/api/orders

- **URL:** `/api/orders`
- **Method:** `GET`
- **Description:** Retrieves all orders.

#### Get Orders by Email

https://assignemt-2-moyhbxygt-mostofa-kamals-projects.vercel.app/api/orders

- **URL:** `/api/orders?email=level2@programming-hero.com`
- **Method:** `GET`
- **Description:** Retrieves orders by email.

## Usage
