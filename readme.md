## 22. ToDoList-v1

### Setup :

    mkdir todolist-v1
    cd todolist-v1
    touch index.html app.js
    npm init
        {
            "name": "todolist-v1",
            "version": "1.0.0",
            "description": "",
            "main": "app.js",
        }

    touch .gitignore
        /node_modules

    npm i express body-parser

## 265. Template? Why Do We Need Template?

### Pengenalan dan menjalankan server

    pada terminal :
        - jika sudah menginstall nodemon secara global : nodemon app.js
    pada browser : http://localhost:3000/

## 266. Creating Your First EJS

    Documentation :
                    - https://ejs.co/
                    - https://github.com/mde/ejs/wiki/Using-EJS-with-Express
    install EJS : npm i ejs
                app.js => app.set('view engine', 'ejs');
    pada browser : http://localhost:3000/

## 267. Running Code Inside the EJS Template

    pada browser : http://localhost:3000/
