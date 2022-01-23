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

## 268. Passing Data from Your Webpage to Your Server

    Documentation :
                    - https://stackoverflow.com/questions/3552461/how-to-format-a-javascript-date

    pada browser : http://localhost:3000/
    lakukan input data dan lihat apa yang terjadi!

## 269. The Concept of Scope in the Context of Javascript

    jika ver, let dan const berada pada sebuah functionatau kalibrate{}, maka:
        var => Global
        let => Local
        const => Local

## 270. Adding Pre-Made CSS Stylesheets to Your Website

    Documentation :
                    - https://www.w3schools.com/cssref/css_selectors.asp

    pada browser : http://localhost:3000/

## 271. Understanding Templating vs. Layouts

    pada browser :
                    - http://localhost:3000
                    - http://localhost:3000/work
                    - http://localhost:3000/about

## 272. Understandig Node Module Exports: How to Pass Function and Data between Files

    Documentation:
                    - https://nodejs.org/dist/latest-v16.x/docs/api/modules.html#the-module-object
                    - https://dmitripavlutin.com/6-ways-to-declare-javascript-functions/

    pada browser :
                    - http://localhost:3000
                    - http://localhost:3000/work
                    - http://localhost:3000/about
