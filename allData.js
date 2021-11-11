/*Module yang di butuhkan
const get = require('got')
const express = require('express')
const cheerio = require('cheerio')
const jsonType = require('json-type-personal') 
const axios = require('axios');*/

// Wattpad scraper 
const res = jsonType-compenentofData
const req = jsonType-compenentofUrl
const query = req.query.q
function wattpadSearch(query) {
      axios.get('https://www.wattpad.com/search/' + query).then(({ data }) => {
      const $ = cheerio.load(data)
      let title = []
      let url = []
      let id = []
      let img = []
      $('#results-stories > div > ul > li > div > a > div.cover.cover-xs.pull-left > img').get().map((rest) => {
      title.push($(rest).attr('alt'))
      img.push($(rest).attr('src'))
      })
      $('#results-stories > div > ul > li > div > a').get().map((rest) => {
      url.push('https://www.wattpad.com' + $(rest).attr('href'))
      id.push($(rest).attr('data-id'))
      })
     
// Detiknews scraper
axios.get('https://news.detik.com/ajax/mostpopular')
.then(({ data }) => {
     const $ = cheerio.load(data.html)
     let title = []
     let url = []
     $('div > h3 > a').get().map((rest) => {
          title.push($(rest).text())
     })

     $('div > h3 > a').get().map((rest) => {
          url.push($(rest).attr('href'))
     })

// Sindonews scraper
axios.get(`https://nasional.sindonews.com/`)
    .then(res => {
        const $ = scrape.load(res.data);
        const tag = $('.homelist-new li');
        tag.each(function(row, i) {
            data.data[row] = {};
            const result = $(tag[row]).find('.homelist-title a');
            const judul = $(tag[row]).find('.homelist-title').text();
            data.data[row]['link'] = result.attr('href')
            data.data[row]['judul'] = judul;
            const waktu = $(tag[row]).find('.homelist-date').text();
            data.data[row]['waktu'] = waktu;
            data.data[row]['poster'] = $(tag[row]).find('.homelist-pict a img').attr("src")            
            data.data[row]['tipe'] = 'Internasional';
            data.data[row]['kutipan'] = $(tag[row]).find('.homelist-desc').text()
        });
