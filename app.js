const express = require("express")
const app = express()
const port = process.env.PORT || 8000

// set-up handlebars view engine as express default view engine
const handlebars = require('express-handlebars')
                    .create({defaultLayout: 'main'})
                    app.engine('handlebars', handlebars.engine)
                    app.set('view engine', 'handlebars')
                    
app.get('/', (req, res) => {
    res.render('home')
})

app.get('/about', (req, res) => {
    const randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)]
    res.render('about', { fortune: randomFortune })
})



// Middlware
app.use((req,res,next) => {
    res.status(404)
    res.send('404 - Not Found')
})

app.use((err, req,res,next) => {
    res.status(500)
    res.send('500 - Server Error')
})


app.use(express.static(__dirname + '/public'))

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

const fortunes = [
    "Conquer your fears or they will conquer you",
    "Rivers need Springs",
    "Do not fear what you don't know",
    "You will have a pleasant surprise",
    "whenever possible, keep it simple"
]