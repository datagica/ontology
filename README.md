# Ontology

This is a work in progress, an ontology for Datanote or other projects.

## Guidelines

### Do not use matching groups

Do not use matching groups (`(foo|bar)`), use non-matching groups instead (`(?:foo|bar)`), or else you will break everything.

### Be wary of the order of words

If two patterns begin by the same sequence of characters or words, you should put the longest one first.

### Some accents are already being taken care of

Some accents are already converted to their non-accentuated form.
See `@datagica/parse-facts/lib/utils/normalize.js` for more information.
