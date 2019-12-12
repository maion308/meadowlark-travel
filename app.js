const express = require("express")
const app = express()
const port = process.env.PORT || 8000


app.get('/', (req, res) => {
    res.status(200)
    res.send('Meadowlark Travel')
})

app.get('/about', (req, res) => {
    res.status(200)
    res.send('About Meadowlark Travel')
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

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})