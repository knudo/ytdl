const express = require('express')
const path = require('path');
const fs = require('fs');
const ytdl = require('youtube-dl-exec');

const app = express()
const port = 3001

app.post('/', (req, res) => {
    if(req.query.url){
        console.log(`checking ${req.query.url}`);
        
        ytdl(req.query.url, {
            dumpSingleJson: true,
            noCheckCertificates: true,
            noWarnings: true,
            formatSort: 'ext'
        }).then(output => res.send(output));
    }
});

app.get('/', async (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
})

app.listen(port, () => {
  console.log(`Content downloader running on port ${port}`)
})