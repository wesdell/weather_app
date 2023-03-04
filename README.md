# WEATHER CONSOLE APP

## About the project:

Consume an API and display the results in your console with an incredible menu.

![Console](https://i.imgur.com/oQRTcGz.png)

## How to use:

### 1. Step

First clone the project with the next command: (Do not copy the _$_ symbol)

```
$ git clone https://github.com/wesdell/weather_app.git
```

Then, run the following command:

```
npm install
```

### 2. Step

Get an account on: [weatherapi](https://www.weatherapi.com/) to generate your token.

### 3. Step

Next, change the file name from .example.env to .env.

From:

```
|---models/
|---helpers
|---.example.env
|---.gitignore
|---package.json
└---app.js
```

To:

```
|---models/
|---helpers/
|---.env
|---.gitignore
|---package.json
└---app.js
```

Then, put your token in the defined variable on the env file.

### 3. Step

Create a folder with the name *db*.

From:

```
|---models/
|---helpers/
|---.env
|---.gitignore
|---package.json
└---app.js
```

To:

```
|---db/
|---models/
|---helpers/
|---.env
|---.gitignore
|---package.json
└---app.js
```


### 4. Step

Run application, and enjoy it.

```
$ npm start
```

## Common functionalities:

- The user can search for the weather from any city around the world
- The user can store their search history and consult it

## Build with:

- NodeJS

## Key concepts:

- Fetch
- Console app
