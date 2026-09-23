# Users API

## Register User

### Endpoint

`POST /users/register`

Creates a new user account, hashes the password, and returns an authentication token and the created user without the password.

### Request Body

Send the data as JSON:


### Required Data

| Field | Type | Required | Requirements |
| --- | --- | --- | --- |
| `fullname.firstname` | string | Yes | At least 3 characters |
| `fullname.lastname` | string | No | String when provided |
| `email` | string | Yes | Must be a valid email address |
| `password` | string | Yes | At least 6 characters |

### Production-Level Registration Logic

1. Receive `fullname`, `email`, and `password` from the request body.
2. Validate all required fields before performing database operations.
3. Trim and normalize the email address, including converting it to lowercase.
4. Check whether the email address is already registered. Return `409 Conflict` for duplicates.
5. Hash the password securely. Never store or log the plain-text password.
6. Create the user record only after validation and duplicate checks succeed.
7. Generate an authentication token after the user is successfully created.
8. Return only safe user data. The password and password hash must never be included in the response.
9. Use centralized error handling for database, hashing, and token-generation failures.
10. Return `201 Created` on success, `400 Bad Request` for invalid input, `409 Conflict` for an existing email, and `500 Internal Server Error` for unexpected failures.
11. Use a transaction or cleanup strategy if user creation and any related database operations must succeed together.

### Success Response

**Status:** `201 Created`

```json


### Error Responses

#### Validation Error

**Status:** `400 Bad Request`

Returned when one or more request fields fail validation.


#### Server Error

**Status:** `500 Internal Server Error`

Returned when user creation or token generation fails on the server.

## Login User

### Endpoint

`POST /users/login`

Authenticates an existing user and returns an authentication token.

### Request Body

Send the data as JSON:

```json
{
	"email": "jane@example.com",
	"password": "secret123"
}
```

### Required Data

| Field | Type | Required | Requirements |
| --- | --- | --- | --- |
| `email` | string | Yes | Must be a valid email address |
| `password` | string | Yes | At least 6 characters |

### Success Response

**Status:** `200 OK`

```json
{
	"token": "your-auth-token",
	"user": {
		"_id": "user-id",
		"fullname": {
			"firstname": "Jane",
			"lastname": "Doe"
		},
		"email": "jane@example.com"
	}
}
```

### Error Responses

#### Validation Error

**Status:** `400 Bad Request`

Returned when the email or password fails validation.

#### Invalid Credentials

**Status:** `401 Unauthorized`

```json
{
	"message": "Invalid email or password"
}
```

Returned when the email address is not registered or the password is incorrect.
