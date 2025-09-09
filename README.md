# Bootstrap with SASS support project

## How-to
To run this project *fork*/*clone* project and issue following command
```sh
npm ci # [!note] install dependencies into `node_modules` folder
```

### SASS
Sass/SCSS is a CSS pre-processor that adds features like `variables`, `nesting`, `mixins`, `functions`, and `imports`, which are compiled into plain CSS for the browser. It comes in two syntaxes: 
- **SCSS** a super-set of CSS
- **Sass** without braces or semicolons

In order to *watch-compile* it run and leave running following command
```sh
npx sass --watch src/scss/custom.scss dist/css/custom.css
```

### Server
To serve the page run following command
```sh
npx http-server dist -p 5173
```

Once you see following output, you can then access your page at [localhost:5173](http://localhost:5173/)
```sh
Starting up http-server, serving dist

http-server version: 14.1.1

http-server settings: 
CORS: disabled
Cache: 3600 seconds
Connection Timeout: 120 seconds
Directory Listings: visible
AutoIndex: visible
Serve GZIP Files: false
Serve Brotli Files: false
Default File Extension: none

Available on:
  http://127.0.0.1:5173
  http://192.168.1.175:5173
  http://172.17.0.1:5173
  http://10.1.152.160:5173
Hit CTRL-C to stop the server
```

### File tree
Check following directory to check/edit the code
```sh
.
├── dist # [!note] `dist` folder for compiled files
│   ├── css # [!note] Compiled CSS folder (from SASS/SCSS)
│   │   ├── custom.css
│   │   └── custom.css.map
│   ├── index.html # [!note] Main HTML file
│   ├── javascript.html # [!note] Secondary page
│   └── js # [!note] `js` folder for custom script and boostrap one
│       ├── bootstrap.bundle.min.js # [!note] Bootstrap `js` script
│       └── script.js # [!note] Custom script
├── package.json 
├── README.md # [!note] This file
└── src
    └── scss
        └── custom.scss # [!note] Pre-compiled SASS/SCSS
```

## Goal

### Core

Replicate the dashboard front-end at this [link](https://getbootstrap.com/docs/5.0/examples/dashboard/)

### Extension

Add a secondary page for price page like the one at this [link](https://getbootstrap.com/docs/5.0/examples/pricing/)
