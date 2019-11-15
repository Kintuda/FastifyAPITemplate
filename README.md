# Fastify template - Typescript

## Features

* Typescript
* Validation using JSON Schema
* OpenAPI 3.0 Documentation
* JWT token based auth


## Installation

```bash
npm install
```

## Environments

```javascript
MONGO_USER=
MONGO_PASS=
MONGO_HOST=
MONGO_PORT=
MONGO_DATABASE=
PORT=
NODE_ENV=
JWT_DEV=
```

## Routes
```bash
/user (POST)          - Create a new user  
/user (GET)           - Fetch user information using JWT  
/login (POST)         - Create JWT token using Basic Auth  
/documentation (GET)  - Get OpenAPI doc  
```
## License
[MIT](https://choosealicense.com/licenses/mit/)
