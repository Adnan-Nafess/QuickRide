# Backend API Documentation

## `/users/register` Endpoint

### 📌 Description

Registers a new user by creating a user account with the provided information.

---

### 🔁 HTTP Method

`POST`

---

### 📥 Request Body (JSON)

| Field                | Type   | Required | Description                           |
| -------------------- | ------ | -------- | ------------------------------------- |
| `fullName`           | object | ✅       | Contains user's name details          |
| `fullname.firstName` | string | ✅       | User's first name (min. 3 characters) |
| `fullname.lastName`  | string | ❌       | User's last name (min. 3 characters)  |
| `email`              | string | ✅       | User's email address (must be valid)  |
| `password`           | string | ✅       | User's password (min. 6 characters)   |

#### ✅ Example Request

````json
{
  "fullName": {
    "firstName": "Adnan",
    "lastName": "Nafees"
  },
  "email": "adnan@example.com",
  "password": "secure123"
} 
````

## `/users/login` Endpoint

### 📝 Description
Authenticates a user using their email and password, returning a JWT token upon successful login.

---

### 📡 HTTP Method
**POST**

---

### 🔗 Endpoint


---

### 📥 Request Body
The request body must be in **JSON** format and should include the following fields:

| Field     | Type   | Required | Description                              |
|-----------|--------|----------|------------------------------------------|
| email     | string | ✅ Yes   | User's email address (must be valid).     |
| password  | string | ✅ Yes   | User's password (minimum 6 characters).   |

#### 📌 Example Request
```json
{
  "email": "adnan@gmail.com",
  "password": "adnan123"
}
````
