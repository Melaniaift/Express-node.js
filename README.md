# Create

To create this app, follow the steps below.

### 1. Initialize the Project
Run the following command to create the `package.json` file:

```bash
npm init --yes
```

This will create the package.json file.

### 2. Then, create the index.js file.

For the express server to work you will have to run 

```bash
npm i express
```

With this modification you are good to go and can run the app using:

```bash
node index.js 
```

OR 

```bash
nodemon index.js
```
The difference between these two is the reactiveness to changes.


### 3. Start the debugger messages:

You have to set an environment variable for the password, for example:

```bash
export express_node_password=1234
```

```bash
DEBUG=app:cutomLogger nodemon index.js
```