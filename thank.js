#!/usr/bin/env node
const https = require('https');
https.get('https://raw.githubusercontent.com/prkeshri/prkeshri/s/me',
    (res)=>{
        let data = '';
        res.on('data',_=>data+=_);
        res.on('end', _=> console.log(data));
    }
)