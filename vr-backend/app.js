const express = require('express')
const app = express()

app.get('/video', (req, res) =>res.sendFile('video/vr-video.mp4', { root : __dirname}))

app.listen(3000, () => console.log('Example app listening on port 3000!'))