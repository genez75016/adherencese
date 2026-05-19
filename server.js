const express = require('express')
const path = require('path')
const fs = require('fs')
const app = express()

// Trouve automatiquement le premier .html dans le dossier — peu importe le nom
const htmlFile = fs.readdirSync(__dirname).find(f => f.endsWith('.html'))

app.use(express.static(__dirname))
app.get('*', (req, res) => res.sendFile(path.join(__dirname, htmlFile)))
app.listen(process.env.PORT || 3000)
