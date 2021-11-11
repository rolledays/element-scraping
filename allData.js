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
     
// LazyMedians scraper
const res = jsonType-compenentofData
const req = jsonType-compenentofUrl
const query = req.query.q
axios.get('https://thelazy.media/?s=' + q)
.then(({ data }) => {
     const $ = cheerio.load(data)
     let title = []
     let url = []
     let img = []
     let type = []
     let author = []
     let upload =[]
     let comment = []
 	$('div.td_module_16 > div.td-module-thumb > a').get().map((rest) => {
         url.push($(rest).attr('href'))
         })
         $('div.td_module_16 > div.td-module-thumb > a').get().map((rest) => {
        title.push($(rest).attr('title'))
         })
         $('div.td_module_16 > div.td-module-thumb > a > img').get().map((rest) => {
        img.push($(rest).attr('src'))
         })
    $('div.td_module_16 > div.item-details > div.td-module-meta-info > a').get().map((rest) => {
        type.push($(rest).text())
         })
     $('div.td_module_16 > div.item-details > div.td-module-meta-info > span > a').get().map((rest) => {
             author.push($(rest).text())
              })
     $('div.td_module_16 > div.item-details > div.td-module-meta-info > span > time').get().map((rest) => {
          upload.push($(rest).text())
             })
     $('div.td_module_16 > div.item-details > div.td-module-meta-info > div > a').get().map((rest) => {
         comment.push($(rest).text())
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
