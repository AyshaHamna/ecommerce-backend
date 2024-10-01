
# E-commerce Backend

### Built with Node.js, Express, MongoDB

This is the backend service for a full-featured e-commerce platform. It handles user authentication, product management, cart functionality, and order processing. Currently, payment options include Cash on Delivery and credit card buttons (without full payment functionality). The project is built using Node.js, Express, MongoDB, and Clerk for authentication.

---

## Features

- **User Authentication**: Managed using Clerk for secure sign-up, login, and user authentication.
- **Product Management**: Add and view products as an admin.
- **Shopping Cart**: Add and remove products from the cart, update quantities.
- **Order Management**: Place orders, view order history, and manage order statuses.
- **User Profiles**: Users can update their profiles and view order history.
- **Admin Dashboard**: Admins can manage products, users, and orders.

---

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend.
- **Express**: Web framework for Node.js, used to build the API.
- **MongoDB**: NoSQL database for storing data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **Clerk**: For managing user authentication and profiles.
- **Dotenv**: To manage environment variables.

---

## Installation

1. Clone the repository:

```bash
git clone https://github.com/AyshaHamna/ecommerce-backend.git
cd ecommerce-backend
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

Create a \`.env\` file in the root directory and add the following variables:

```bash
MONGODB_URI=<your-mongodb-uri>
CLERK_PUBLISHABLE_KEY=<your-clerk-publish-key>
CLERK_SECRET_KEY=<your-clerk-secret2-key>
```

4. Start the server:

```bash
npm run dev
```

The backend will be running at \`http://localhost:8000\`.

---

## API Endpoints

### Product Routes:

- \`GET /api/products\`: Get all products
- \`GET /api/products/:id\`: Get a single product by ID
- \`POST /api/products\`: Create a new product (admin only)
- 
### Categories Routes:

- \`GET /api/categories\`: Get all categories
- \`GET /api/categories/:id\`: Get a category by ID
- \`POST /api/categories\`: Create a new category (admin only)

### Order Routes:

- \`POST /api/orders\`: Place a new order (Signed-In users only)
- \`GET /api/orders/:id\`: Get order details
- \`GET /api/orders/webhook/payment\`: Handle payment webhook (in progress)
Order routes are protected using Clerk’s ClerkExpressRequireAuth middleware to ensure authentication.

---

## Future Enhancements

- **Search and Filter**: Implement search functionality for products and category filters.
- **Reviews and Ratings**: Add review and rating features for products.
- **Admin Dashboard**: Extend admin functionality with dashboards for analytics.
- **Payment**: Payment Gateway

---

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and submit a pull request.

---

## Contact

For any questions or feedback, feel free to reach out:

- GitHub: [AyshaHamna](https://github.com/AyshaHamna)
- Email: [ayshahamna57@gmail.com]

---
