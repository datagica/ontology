const { entities, links, map, get, find } = require('./index')

const death = {
  "id": "link:death",
  "type": "link",
  "label": {
    "en": "Death",
    "fr": "Décès"
  },
  "plural": {
    "en": "Deaths",
    "fr": "Décès"
  },
  "aliases": {
    "en": [
      "death", "die", "dying", "dead", "kill", "killed"
    ],
    "fr": [
      "mort", "mourir", "décès", "décédé", "décéder", "tué", "tuer"
    ]
  },
  "description": {
    "en": "Death",
    "fr": "Décès"
  },
  "match": {
    "active": ["tuer?", "kills?"],
    "passive": ["killed", "tuée?s?"]
  }
}

test('check integrity of datasets', () => {
  expect(entities.length).toEqual(53)
  expect(links.length).toEqual(32)
})

test('get an entry by id', () => {
  expect(map['link:death']).toEqual(death)
  expect(get('link:death')).toEqual(death)
})

test('find an entry by text', () => {
  expect(find('death')).toEqual({
    "score": 1,
    "value": death,
  })
  expect(find('mort')).toEqual({
    "score": 1,
    "value": death,
  })
})
