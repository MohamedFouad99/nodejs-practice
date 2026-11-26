<div align="center">

# 🟢 Node.js Practice

**Node.js and JavaScript assignments, from language basics to a REST API built on the core `http` module, with no frameworks.**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)
![No dependencies](https://img.shields.io/badge/dependencies-0-brightgreen?style=for-the-badge)

</div>

---

## 📚 Contents

- [📁 Project structure](#-project-structure)
- [🧩 Assignment 1: JavaScript fundamentals](#-assignment-1-javascript-fundamentals)
- [⚙️ Assignment 2: Node.js core modules and an HTTP API](#️-assignment-2-nodejs-core-modules-and-an-http-api)
- [🚀 Getting started](#-getting-started)
- [🧪 Testing the API](#-testing-the-api)

---

## 📁 Project structure

```text
nodejs-practice/
├── 📂 assignment1/
│   ├── index.js        # 15 coding questions + 5 essay questions
│   └── bonus.js        # 🏆 LeetCode: Counter II
├── 📂 assignment2/
│   ├── part1/
│   │   └── index.js    # 20 questions on path, fs, events, os, streams, zlib
│   ├── part2/
│   │   ├── server.js   # 🌐 CRUD API on the http module
│   │   └── users.json  # 💾 File-based "database"
│   └── bonus.js        # 🏆 LeetCode: Kth Missing Positive Number
└── package.json
```

---

## 🧩 Assignment 1: JavaScript fundamentals

📄 [`assignment1/index.js`](assignment1/index.js)

### ✍️ Part 1: Coding questions

| # | Topic | # | Topic |
|:-:|-------|:-:|-------|
| 1 | 🔢 String to number conversion | 9 | ➡️ Arrow functions |
| 2 | ❓ Falsy value checks | 10 | 📦 Object destructuring |
| 3 | 🔁 Loops with `continue` | 11 | ➕ Rest parameters and `reduce` |
| 4 | 🧹 `filter` | 12 | ⏳ Promises and `setTimeout` |
| 5 | 🔗 Spread operator | 13 | 📈 Finding the largest number |
| 6 | 📅 `switch` statements | 14 | 🗝️ `Object.keys` |
| 7 | 🗺️ `map` | 15 | ✂️ `split` |
| 8 | ➗ Divisibility checks | | |

### 📝 Part 2: Essay questions

1. 🔄 `forEach` vs `for...of`
2. 🏗️ Hoisting and the Temporal Dead Zone
3. ⚖️ `==` vs `===`
4. 🛡️ `try...catch` and async error handling
5. 🔀 Type conversion vs type coercion

### 🏆 Bonus

[`assignment1/bonus.js`](assignment1/bonus.js): **Counter II**, a closure that returns `increment`, `decrement` and `reset`.

---

## ⚙️ Assignment 2: Node.js core modules and an HTTP API

### 🛠️ Part 1: Core modules

📄 [`assignment2/part1/index.js`](assignment2/part1/index.js)

| Module | Questions | What's covered |
|--------|:---------:|----------------|
| 🛣️ `path` | Q1–Q9 | `basename`, `extname`, `parse`, `join`, `resolve`, `isAbsolute` |
| 📂 `fs` | Q10–Q11, Q14–Q16 | Read, write, delete, `mkdir`, checking whether a directory exists |
| 📣 `events` | Q12–Q13 | `EventEmitter`, listening for and emitting events with data |
| 💻 `os` | Q17 | Platform and CPU architecture |
| 🌊 `stream` | Q18–Q19 | Readable and writable streams, `pipe` |
| 🗜️ `zlib` | Q20 | Gzip compression with `pipeline` |

> 💡 Each question has its test call right below it, commented out. Uncomment one to run it.

### 🌐 Part 2: Users CRUD API

📄 [`assignment2/part2/server.js`](assignment2/part2/server.js)

A REST API built on Node's core `http` module. Users are stored in [`users.json`](assignment2/part2/users.json).

| Method | Endpoint | Description | Success | Errors |
|:------:|----------|-------------|:-------:|:------:|
| 🟢 `GET` | `/user` | Get all users | `200` | `500` |
| 🟢 `GET` | `/user/:id` | Get one user by ID | `200` | `404` |
| 🟡 `POST` | `/user` | Create a user | `201` | `400` `409` |
| 🔵 `PATCH` | `/user/:id` | Update some of a user's fields | `200` | `400` `404` `409` |
| 🔴 `DELETE` | `/user/:id` | Delete a user | `200` | `404` |

**✅ Validation**

- `name`, `age` and `email` are all required when creating a user.
- `age` must be a number.
- Email addresses must be unique, ignoring case (`409 Conflict`).
- A `PATCH` request must include at least one field.

<details>
<summary>📨 Example request and response</summary>

```http
POST /user HTTP/1.1
Host: localhost:3000
Content-Type: application/json

{
  "name": "Ali",
  "age": 25,
  "email": "ali@gmail.com"
}
```

```json
{
  "message": "User added successfully",
  "user": {
    "id": 1,
    "name": "Ali",
    "age": 25,
    "email": "ali@gmail.com"
  }
}
```

</details>

### 🏆 Bonus

[`assignment2/bonus.js`](assignment2/bonus.js): **Kth Missing Positive Number** (LeetCode 1539).

---

## 🚀 Getting started

### 📋 Prerequisites

- [Node.js](https://nodejs.org/) 18 or later

### 📥 Installation

```bash
git clone https://github.com/MohamedFouad99/nodejs-practice.git
cd nodejs-practice
```

No `npm install` is needed. The project uses only Node's built-in modules.

### ▶️ Running

```bash
# 🧩 Assignment 1
node assignment1/index.js
node assignment1/bonus.js

# ⚙️ Assignment 2, part 1
node assignment2/part1/index.js

# 🏆 Assignment 2 bonus
node assignment2/bonus.js

# 🌐 Assignment 2, part 2: start the API
cd assignment2/part2
npm start
```

The server runs at 👉 **http://localhost:3000**

---

## 🧪 Testing the API

### 📮 Postman

Every endpoint is in a ready-made Postman collection:

[![Run in Postman](https://img.shields.io/badge/Open_in-Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)](https://www.postman.com/telecoms-operator-53572826/nodejs-assignment/collection/17281365-a1c128ae-ee5f-4c7c-9b69-dc0e8936a92b?action=share&source=copy-link&creator=17281365)

### 💻 cURL

```bash
# Get all users
curl http://localhost:3000/user

# Create a user
curl -X POST http://localhost:3000/user \
  -H "Content-Type: application/json" \
  -d '{"name":"Ali","age":25,"email":"ali@gmail.com"}'

# Update a user
curl -X PATCH http://localhost:3000/user/1 \
  -H "Content-Type: application/json" \
  -d '{"age":26}'

# Delete a user
curl -X DELETE http://localhost:3000/user/1
```

---

<div align="center">

Made with 💚 by **[Mohamed Fouad](https://github.com/MohamedFouad99)**

⭐ If you found this useful, give the repo a star.

</div>
