const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

app.engine('pug', require('pug').__express)

app.set('views', './views')
app.set('view engine', 'pug')
app.use(express.static(__dirname + "/views/public"));


app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!' })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
