## Auth with Next.js

_A known problem with JWT authentication is that persisting to local storage introduces a security issue. An improvement is made by using HTTP-only cookies on the server side. The Next.js native API provides a means to easily implement this feature._

- The Basic Express API (https://github.com/stefaleon/Basic-Express-API) is used as the external back-end.

- The axios calls in the Next API methods are made towards URLs adjusted to the specific external API.

_The topics below refer to the project commits with the same name_

### Register and login from the Next API

- Use the Next back-end as an intermediary for the requests we make from the app, in order to have the same-origin policy applied and avoid CORS related issues.

#### Register to the Basic Express back-end from the Next API

- Test with Postman with POST to http://localhost:3000/api/register

_body_

```
{
  "name" : "test",
  "email": "test@test.com",
  "password": "111111"
}
```

#### Login to the Basic Express back-end from the Next API

- Test with Postman with POST to http://localhost:3000/api/login

_body_

```
{
  "email": "test@test.com",
  "password": "111111"
}
```

### AuthContext

- Wrap the app Component in \_app.js with AuthProvider in order to have the auth state values available throughout the app

### Display nav links conditionally, depending on context user

- Hide the link to the protected page if "user" is not available in the auth state.
- Display "Logout" instead of "Login" if "user" is available in the auth state.

### Protect the route of the "protected" page

- Even though the related link is hidden in the navbar, the protected page is currently accessible by entering the related url (http://localhost:3000/protected) manually in the browser's address bar.
- To fix this, redirect to the login page if "user" is not available in the auth state.

## Persist the authenticated user with a server side HTTP-only cookie

### Set the JWT in a server side cookie

- Set the cookie in the response headers as we login. It now becomes available in `req.headers.cookie`.
- Confirm the availability for subsequent requests by use of the checkCookie Next API route.
