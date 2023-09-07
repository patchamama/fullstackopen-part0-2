# To install axio and json-server

```
npm install axio
npm install -g json-server
```

### Or execute _(package.json defined apps)_

```
npm install
```

# Execute react and json-server in different terminal

_(React is executed on port 3000 and json-server on port 3001)_

```
npm start
```

### Open a new terminal and execute

```
npx json-server --port 3001 --watch db.json
```
