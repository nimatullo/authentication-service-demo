# How to run

## Creating keys.js

The `keys.js` file contains the sensitive Google client ID and client secret. You can generate your own from the [Google Developer Console.](https://console.cloud.google.com/)

Create a `keys.js` file in the `config/` folder.
The `keys.js` file should look like this.
```javascript
module.exports = {
  google: {
    clientID: {YOU_CLIENT_ID_HERE},
    clientSecret: {YOUR_CLIENT_SECRET_HERE},
  },
};
```

# Running the server
You can run the server with 
```console
foo@bar:~$ node index.js
```

The authentication endpoint is on `http://localhost:8000/auth/google`.

You can change the port by changing the `PORT` variable in `index.js`.
