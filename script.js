const fetch = require("node-fetch")
const fs = require("fs")
fetch('http://jsonplaceholder.typicode.com/posts')
   .then(response => response.json())
   .then(data => {
       fs.writeFile('result/posts.json', `${JSON.stringify(data)}`, (err) => {
           if(err) throw err
           console.log('File Created')
       })
    });

