
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const USERS_FILE = path.join(__dirname, "users.json");

// Read users from JSON file
function readUsers() {
  const data = fs.readFileSync(USERS_FILE, "utf8");

  return data.trim() ? JSON.parse(data) : {};
}

// Write users to JSON file
function writeUsers(users) {
  fs.writeFileSync(
    USERS_FILE,
    JSON.stringify(users, null, 2)
  );
}

// Send JSON response
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(data));
}

// Read request body
function getRequestBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });

    req.on("error", reject);
  });
}

// Create HTTP server
const server = http.createServer(async (req, res) => {

  // Q1: POST /user
  if (req.method === "POST" && req.url === "/user") {
    try {
      const body = await getRequestBody(req);

      const { name, age, email } = body;

      // Validate required fields
      if (
        typeof name !== "string" ||
        !name.trim() ||
        age === undefined ||
        !Number.isFinite(Number(age)) ||
        typeof email !== "string" ||
        !email.trim()
      ) {
        return sendJson(res, 400, {
          message: "Name, age and email are required",
        });
      }

      // Read existing users
      const users = readUsers();

      // Check if email already exists
      for (const id in users) {
        if (
          users[id].email.toLowerCase() === email.trim().toLowerCase()
        ) {
          return sendJson(res, 409, {
            message: "Email already exists",
          });
        }
      }

      // Generate new ID
      let newId = 1;

      for (const id in users) {
        if (Number(id) >= newId) {
          newId = Number(id) + 1;
        }
      }

      // Create new user
      users[newId] = {
        id: newId,
        name: name.trim(),
        age: Number(age),
        email: email.trim(),
      };

      // Save users to JSON file
      writeUsers(users);

      return sendJson(res, 201, {
        message: "User added successfully",
        user: users[newId],
      });

    } catch (error) {
      return sendJson(res, 400, {
        message: "Invalid JSON body",
      });
    }
  }

  // Route not found
  return sendJson(res, 404, {
    message: "Route not found",
  });
});

// Start server
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
