## Auth with Next.js

- The Basic Express API (https://github.com/stefaleon/Basic-Express-API) is used as the external back-end.

- The axios calls in the Next API methods are made towards URLs adjusted to the specific external API.

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
