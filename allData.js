/*Module yang di butuhkan
const get = require('got')
const express = require('express')
const cheerio = require('cheerio')
const axios = require('axios');*/

// Wattpad scraper 
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
     
