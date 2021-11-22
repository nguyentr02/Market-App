const express = require('express')
const app = express()
const port = 4000
const path = require('path')
const handlebars = require('express-handlebars')
const morgan = require('morgan')

app.use(express.static(path.join(__dirname,'public')))

//HTTP Logger
app.use(morgan('combined'));

//Template Engine
app.engine('hbs', handlebars.engine());
app.set('view engine','hbs');
app.set("views",  path.join(__dirname, 'resources\\views'));

app.engine('hbs', handlebars.engine({
  extname: '.hbs'
}))


app.get('/', (req, res) => {
  res.render('login');
})

app.get('/menu', (req, res) => {
  res.render('menu');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})