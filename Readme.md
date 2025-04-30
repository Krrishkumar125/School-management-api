# 🎓 School Management API

This is a backend assignment project for **Educase India**, developed using **Node.js**, **Express**, **Sequelize**, and **MySQL**. It provides APIs to manage schools — including adding schools and retrieving them sorted by proximity to a user's location.

---

## 🌐 Live Deployment

- 🚀 Deployed on **AWS EC2** using **Docker**
- 🐬 MySQL database hosted on **AWS RDS**
- 🌍 Live URL: [http://13.60.223.91:8000](http://13.60.223.91:8000)

---

## 🐳 Dockerized Setup

This project includes a `Dockerfile` to containerize the backend service.

### 🔧 Build Docker Image

```bash
docker build -t school-management .
```

### ▶️ Run Docker Container

```bash
docker run -dit --init --name schoolmanagement \
  -p 8000:8000 \
  -v "$(pwd)":/developer/nodejs/school-management \
  -v school-management-node-modules:/developer/nodejs/school-management/node_modules \
  school-management:latest
```

Make sure your EC2 instance allows inbound traffic on port `8000`.

---

## 📁 Folder Structure

```bash
src/
├── config/         # Sequelize DB config
├── controllers/    # API logic
├── middlewares/    # Request validators
├── migrations/     # Sequelize DB migrations
├── models/         # Sequelize models
├── repository/     # DB access logic
├── routes/         # API endpoints
├── seeders/        # Optional seed data
├── services/       # Business logic layer
└── index.js        # Server entry point
```

---

## 🚀 Features

- Add new schools with proper validation.
- List schools sorted by distance using the Haversine formula.
- Sequelize-based DB modeling with migrations and CLI support.
- Layered architecture (Controllers, Services, Repositories).
- Dockerfile for containerized deployment.

---

## 🧪 API Endpoints

### ➕ Add School

**POST** `/addSchool`

**Request Body:**

```json
{
  "name": "Green Valley School",
  "address": "123, Main Street, Mumbai",
  "latitude": 19.076,
  "longitude": 72.8777
}
```

**Response:**

```json
{
  "data": {
    /* school info */
  },
  "success": true,
  "message": "Successfully added the school",
  "err": {}
}
```

---

### 📍 List Schools by Location

**GET** `/listSchools?latitude=28.567&longitude=77.345`

**Response:**

```json
{
  "data": [
    {
      "id": 47,
      "name": "Chettinad Vidyashram",
      "address": "R.A. Puram, Chennai",
      "latitude": 13.032,
      "longitude": 80.2508,
      "distance": 333.09
    }
  ],
  "success": true,
  "message": "Successfully fetched the schools and sorted them by proximity",
  "err": {}
}
```

---

## ⚙️ Local Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/KrrishKumar125/school-management.git
cd school-management
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Initialize Sequelize

```bash
npx sequelize init
```

### 4. Configure `config/config.json`

Update with your RDS or local DB credentials:

```json
{
  "development": {
    "username": "your_db_username",
    "password": "your_db_password",
    "database": "your_db_database",
    "host": "your_db_host",
    "dialect": "mysql"
  }
}
```

### 5. Create & Migrate the DB

```bash
npx sequelize-cli db:create
npx sequelize-cli db:migrate
```

### 6. Start the Server

```bash
npm start
```

---

## 🔁 Root Endpoint (`/info`)

You can test the info route at [http://13.60.223.91:8000/info](http://13.60.223.91:8000/info). It returns a helpful API guide like:

```json
{
  "message": "Welcome to the School Management Backend API!",
  "routes": {
    "/addSchool": {
      "method": "POST",
      "description": "Add a new school",
      "body": {
        "name": "String - name of the school",
        "address": "String - address of the school",
        "latitude": "Number - latitude coordinate",
        "longitude": "Number - longitude coordinate"
      }
    },
    "/listSchools": {
      "method": "GET",
      "description": "List schools sorted by proximity to the user",
      "body": {
        "latitude": "Number - user's latitude coordinate",
        "longitude": "Number - user's longitude coordinate"
      }
    }
  }
}
```

---

## 👨‍💻 Author

- **Krrish Kumar**
- [GitHub: @KrrishKumar125](https://github.com/KrrishKumar125)

---

## 📄 License

This project is licensed under the ISC License.

---
