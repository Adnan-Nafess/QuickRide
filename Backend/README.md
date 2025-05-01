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

```json
{
  "fullName": {
    "firstName": "Adnan",
    "lastName": "Nafees"
  },
  "email": "adnan@example.com",
  "password": "secure123"
}
```

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

| Field    | Type   | Required | Description                             |
| -------- | ------ | -------- | --------------------------------------- |
| email    | string | ✅ Yes   | User's email address (must be valid).   |
| password | string | ✅ Yes   | User's password (minimum 6 characters). |

#### 📌 Example Request

```json
{
  "email": "adnan@gmail.com",
  "password": "adnan123"
}
```

## API Endpoints Documentation

---

### 📘 `/users/profile` Endpoint

#### 📝 Description

Retrieves the profile information of the currently authenticated user.

#### 📡 HTTP Method

**GET**

#### 🔐 Authentication

Requires a valid JWT token in the Authorization header:

#### 📤 Example Response

```json
{
  "user": {
    "fullName": {
      "firstName": "Addu",
      "lastName": "Addu"
    },
    "email": "adnan@gmail.com"
  }
}
```

# API Endpoints Documentation

---

## `/users/logout` Endpoint

### Description

Logs out the current user and blacklists the token provided in the cookie or the Authorization header.

### HTTP Method

`GET`

### Authentication

Requires a valid JWT token, which can be provided in:

- `Authorization` header (as: `Bearer <token>`)
- or `token` cookie

### User Object (JWT Payload)

