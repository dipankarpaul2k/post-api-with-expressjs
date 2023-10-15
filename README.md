# A simple post api using NodeJS and ExpressJS

It is a simple api that I built for practicing CURD operations, but if you still want to try it out, then follow the steps mentioned below 👇

---

## Installation & Usage

- Fork the repository in your account in Github.
- Make project directory and go inside the directory.
- Clone the repository.
- Install dependencies.
- Start or run your API on the local machine.

```shell
# Make a directory
mkdir posts-api-expressjs

# go inside the directory
cd posts-api-expressjs

# Clone the repo
git clone https://github.com/...(repo url)

# Install dependencies
npm install

# Start the API
npm start

# Access the API in your web browser
http://localhost:5000/
```

---

## Endpoints

### GET method

```shell
# Home page/route
http://localhost:5000
```

```shell
# Get all the posts
http://localhost:5000/posts
```

```shell
# Get a single post
http://localhost:5000/posts/:postId
```

### POST method

```shell
# Add a new post
http://localhost:5000/posts
```

### PATCH method

```shell
# Update a single post
http://localhost:5000/posts/:postId
```

### DELETE method

```shell
# Uelete a single post
http://localhost:5000/posts/:postId
```

---

## Dependencies

Here are some of the major dependencies I have used in this project:

```json
  "dependencies": {
    "express": "^4.18.2",
    "pino-http": "^8.5.0",
    "uuid": "^9.0.1"
  },
  "devDependencies": {
    "nodemon": "^3.0.1",
    "pino-pretty": "^10.2.3"
  }
```
---

## Author

Dipankar Paul 😊 | Contact me 👉 dipankarpaul2k@gmail.com

