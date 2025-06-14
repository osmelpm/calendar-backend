# Calendar Backend

This is the backend service for the Calendar application. It provides APIs for user authentication, event management, and other calendar-related functionalities.

## Features

- User authentication (login, registration, token-based authentication)
- CRUD operations for calendar events
- Secure API endpoints
- MongoDB integration for data storage

## Technologies Used

- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- dotenv for environment variable management

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/calendar-backend.git
```

2. Navigate to the project directory:

```bash
cd 10-calendar-backend
```

3. Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory and add the following variables:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Running the Application

Start the development server:

```bash
npm run dev
```

The server will run on `http://localhost:5000`.

## API Endpoints

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user

### Events

- `GET /api/events` - Get all events
- `POST /api/events` - Create a new event
- `PUT /api/events/:id` - Update an event
- `DELETE /api/events/:id` - Delete an event

## Deploying Calendar Backend on Azure App Service (Linux)

This section outlines the steps to deploy the **Calendar Backend API** to Azure App Service (Linux) using the **Azure App Service extension for Visual Studio Code**.

### **Prerequisites**

Before deploying, ensure you have:

- A **Microsoft Azure account**.
- **Azure App Service extension** installed in Visual Studio Code.
- A **Linux-based App Service Plan** created in Azure.
- Necessary environment variables configured.

### **Setting Up the Azure Web App**

1. **Create an Azure Web App**

   - Open **Azure Portal** → Go to **App Services** → Click **Create Web App**.
   - Select:
     - **Runtime Stack:** Node.js (latest LTS version recommended).
     - **Operating System:** Linux.
     - **Region & Resource Group:** Choose appropriately.

2. **Configure Environment Variables**
   - In **Azure Portal**, navigate to **App Service → Configuration**.
   - Add the following environment variables:
     ```
     Name: NODE_ENV    | Value: production
     Name: PORT        | Value: 3000 (or set dynamically)
     Name: MONGO_URI   | Value: your_database_url
     Name: JWT_SECRET  | Value: your_secret_key
     ```
   - Click **Save** and restart your Web App.

## **Deploying the API using VS Code**

1. **Install the Azure App Service Extension**

   - Open **Visual Studio Code**.
   - Go to **Extensions** (`Ctrl + Shift + X`).
   - Search for **Azure App Service** and install it.

2. **Sign in to Azure**

   - Click the **Azure App Service** extension in VS Code.
   - Sign in using your **Azure credentials**.

3. **Deploy the Application**

   - In VS Code, open your project folder (`10-calendar-backend`).
   - Right-click the project folder and select **Deploy to Web App...**.
   - Choose your **Azure Web App (Linux)**.
   - The deployment will package and push the files automatically.

4. **Using a Custom Deployment Script**
   If you require additional setup, such as handling dependencies or copying files in a structured way, you can use a **custom deployment script**.

- **Creating a `.deployment` File**
  To instruct Azure to use your custom deployment script, add a file named `.deployment` in the root directory:

  ```ini
  [config]
  command = bash deploy.sh
  ```

5. **Verify the API is Running**

- Open the Web App URL: `https://<your-app-name>.azurewebsites.net`
- Use `curl` or Postman to test API endpoints:
  ```bash
  curl -v https://<your-app-name>.azurewebsites.net/api/healthcheck
  ```

6. **Troubleshooting Deployment Issues**

- Check live logs using **Log Stream** in the Azure Portal (`App Service → Logs → Log Stream`).
- Restart the Web App manually if the service fails (`App Service → Restart`).
- Debug deployment errors via **VS Code Output** (View → Output → Azure App Service).

## **Next Steps**

- Set up **Application Insights** for monitoring.
- Optimize API performance on Azure.
- Implement **CI/CD pipelines** for automated deployments.

---

This documentation provides a streamlined approach for deploying the Calendar Backend API using Azure App Services in VS Code. 🚀 Let me know if you'd like any refinements or additions!

## License

This project is licensed under the MIT License.

```

```
