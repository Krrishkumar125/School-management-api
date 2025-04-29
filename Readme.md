# 🎓 School Management API

This is a backend assignment project for **Educase India**, developed using **Node.js**, **Express**, **Sequelize**, and **MySQL**. It provides APIs to manage schools — including adding schools and retrieving them sorted by proximity to a user's location.

---

## 📁 Folder Structure

````bash
src/
├── config/ # Custom server configuration
│  └── config.json # Sequelize DB config
├── controllers/ # API logic (SchoolController)
├── middlewares/ # Custom request validators
├── migrations/ # Sequelize migrations
├── models/ # Sequelize models
├── repository/ # Custom DB access logic
├── routes/ # API route definitions
├── seeders/ # Sequelize seed data (optional)
├── services/ # Business logic layer
├── utils/ # Utility functions (e.g. haversine)
└── index.js # Main server entry point
````

---

## 🚀 Features

- Add new schools with proper validation.
- List schools sorted by distance using the Haversine formula.
- Sequelize-based DB modeling with migrations and CLI support.
- Layered architecture (Controllers, Services, Repositories).

---

## 🧪 API Endpoints

### ➕ Add School  

**POST** `/api/v1/addSchool`

**Request Body:**

```json
{
  "name": "Green Valley School",
  "address": "123 , Main Street , Mumbai",
  "latitude": 19.0760,
  "longitude": 72.8777
}
```

**Success Response:**

```json
{
    "data": {
        "id": 52,
        "name": "Green Valley School",
        "address": "123 , Main Street , Mumbai",
        "latitude": "19.0760",
        "longitude": "72.8777",
        "updatedAt": "2025-04-29T10:26:17.115Z",
        "createdAt": "2025-04-29T10:26:17.115Z"
    },
    "success": true,
    "message": "Successfully added the school",
    "err": {}
}
```

---

### 📍 List Schools by Location  

**GET** `/api/v1/listSchools?latitude=28.567&longitude=77.345`

**Success Response:**

```json
  {
    "data": [
        {
            "id": 47,
            "name": "Chettinad Vidyashram",
            "address": "R.A. Puram, Chennai",
            "latitude": 13.032,
            "longitude": 80.2508,
            "createdAt": "2025-04-29T07:07:37.000Z",
            "updatedAt": "2025-04-29T07:07:37.000Z",
            "distance": 333.0981774022335
        },
        {
            "id": 29,
            "name": "Chinmaya Vidyalaya",
            "address": "Anna Nagar, Chennai",
            "latitude": 13.0827,
            "longitude": 80.2707,
            "createdAt": "2025-04-29T07:07:37.000Z",
            "updatedAt": "2025-04-29T07:07:37.000Z",
            "distance": 338.9201842863492
        },
    ],
    "success": true,
    "message": "Successfully fetched the schools and sorted them by proximity",
    "err": {}
}
```

---

## ⚙️ Setup Instructions

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

This creates:

- `config/config.json`
- `models/`
- `migrations/`
- `seeders/`

### 4. Configure `config/config.json`

Update your `config/config.json` with your DB credentials:

```json
{
  "development": {
    "username": "your_mysql_username",
    "password": "your_mysql_password",
    "database": "school_db",
    "host": "127.0.0.1",
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

Server runs on: `http://localhost:<PORT>`

---

## 🧑‍💻 Author

- **Krrish Kumar**
- [GitHub: @KrrishKumar125](https://github.com/Krrishkumar125)

---

## 📄 License

This project is licensed under the ISC License.

---
