Its a simple graphQL login API
**To authenticate a user, use the login query with the username and password arguments:**

graphql query
{
  login(username: "username1", password: "password1")
}

**For this project i have hard coded the usernames and passowrds**
usernames: "username1", "username2"
passwords: "password1", "password2"


**If the credentials are valid, the API will return:**

{
  "data": {
    "login": "Login successful"
  }
}


**If the credentials are invalid, the API will return:**
{
  "data": {
    "login": "Invalid credentials"
  }
}
