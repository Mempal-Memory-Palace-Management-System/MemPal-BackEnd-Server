### MemPal MERN Application

- **Creator:** Leo Tran

- **💎 Deployed App (TBA):** [MemPal Online](https://www.mempal.online/)
- **🛠 Staging Environment App (TBA):** [Staging MemPal](https://staging.mempal.online/)
- **🖥 Client Repo:** [LeoTran/mempal-client](https://github.com/Mempal-Memory-Palace-Management-System/MemPal-FrontEnd-Client)
- **🖥 Server Repo:** [LeoTran/mempal-server](https://github.com/Mempal-Memory-Palace-Management-System/MemPal-BackEnd-Server)
- **📖 Documentation Repo:** [MemPalDocs](https://github.com/Mempal-Memory-Palace-Management-System/MemPal-Docs)

MemPal is a web application designed to help users create, organize, and practice memory palaces. Built with the MERN stack, it offers both free and premium subscription options, deployed on [Render.com](https://render.com/).

#### Installation Instructions

To use the production app, please visit [MemPal Online](https://www.mempal.online/) and create an account. To use the app locally, please follow the instructions below.

#### Requirements

- Node.js 14.x.x or higher
- MongoDB. If you do not have MongoDB installed, please follow the installation instructions [here](https://docs.mongodb.com/manual/installation/) and ensure MongoDB is running locally.

#### Server Setup

1. **Clone the Server Repo:**
    ```bash
    mkdir MemPal && cd MemPal
    git clone https://github.com/LeoTran/mempal-server.git
    cd mempal-server
    npm install
    ```

2. **Configure Environment Variables:**
    Create a .env file and add the following:
    ```plaintext
    PORT=5000
    MONGO_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    STRIPE_SECRET_KEY=<your-stripe-secret-key>
    ```

3. **Seed Database (Optional):**
    ```bash
    npm run seed
    ```

4. **Start the Server:**
    ```bash
    npm start
    ```
    The server will run on localhost port 5000.

#### Client Setup

1. **Clone the Client Repo:**
    ```bash
    cd .. && git clone https://github.com/Mempal-Memory-Palace-Management-System/MemPal-FrontEnd-Client
    cd mempal-client
    npm install
    ```

2. **Start the Client:**
    Ensure the server is running on port 5000, then start the client:
    ```bash
    npm start
    ```
    The client will run on localhost port 3000, and a browser window will open.

Enjoy! 🙂

#### API Endpoints

| Authentication     | Memory Palaces | Loci       |
| ------------------- | -------------- | ---------- |
| POST /auth/register | GET /palaces/  | GET /loci/ |
| POST /auth/login    | POST /palaces/ | POST /loci/ |
| GET /auth/logout    | GET /palaces/:id | GET /loci/:id |
| PATCH /palaces/:id  | PATCH /loci/:id |
| DELETE /palaces/:id | DELETE /loci/:id |

#### Testing

The application has been tested in Chrome and Firefox on Windows 10 and Mac OS Ventura. Automated and manual testing has been conducted using Jest and Postman.

#### Libraries & Dependencies

**Server:**
- express: Framework for building web applications.
- mongoose: ODM for MongoDB.
- jsonwebtoken: For JWT authentication.
- bcryptjs: For password hashing.
- stripe: For payment processing.
- dotenv: For environment variable management.

**Client:**
- react: JavaScript library for building user interfaces.
- react-router-dom: For routing.
- axios: For making HTTP requests.
- tailwindcss: For UI styling.

#### Project Management

The project was managed using Agile methodology with Trello for task tracking. Sprints were planned and executed with regular stand-ups and reviews. This README file provides a comprehensive overview of the MemPal project, including setup instructions, API endpoints, testing, and project management details.