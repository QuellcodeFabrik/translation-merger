# translation-merger
A Node.js application handling the merging of two translations files

# Instructions
## Update existing translations

To update existing JSON translation files, put the new version as `new.json` and the old version as
`old.json` into the data folder. Then call the `app.js` script with:

```
$ node app
```

## Check for inconsistencies

You can compare two translation files for different languages and get a list of missing keys in
either of those. That way inconsistencies can be identified and missing keys added.

