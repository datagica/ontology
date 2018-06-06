'use strict'

const FastIndex = require('@datagica/fast-index')
const entities = require('./entities.json')
const links = require('./links.json')

const list = entities.concat(links)

module.exports = { entities, links, list, map: {} }

list.forEach(item => {
  module.exports.map[item.id] = item
})

const indexId = new FastIndex({
  fields: ['id']
}).loadSync(list)

module.exports.get = (typeAndId) =>
  module.exports.map[`${typeAndId}`.toLowerCase()]

const indexFuzzy = new FastIndex({
  fields: ['id', 'label', 'aliases']
}).loadSync(list)

module.exports.find = (text) =>
  indexFuzzy.get(text)[0]
