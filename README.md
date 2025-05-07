# iSeries-Vue-Demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### How-To For Setting up App and Processing Images Received From The Reader
```
- In order to set up the application for the first time user will need to open settings and add at least one reader to the saved lists of readers.

- Once reader is saved user can connect to reader and capture an image.  The last page has a "Process" document placeholder for developer to initiate an API call for sending or saving the images to another server.

- There is a code block that needs to be added in order for developer to call an API with the document Images at line:
[Code Block Here](https://github.com/thales-dis-dr/iseries-vue-demo/blob/master/src/components/AppLayout.vue#L560)

- Note:  This code base was built several years ago and later modified to provide an open source example for development.  It was developed using Node v20.18.3 and Vue 2 if you have compatibility issues please role back to this older version.  You may experience some deprecation warnings when building.  

- This example is provided as a learning tool for help developing with iSeries Document Readers.  Thales does not support or advise the use of this exact source code as a production ready application.
```


### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
