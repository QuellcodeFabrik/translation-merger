interface TranslationFile {
  [index: string]: string;
}

const germanTranslationFile: TranslationFile = require('./data/sorted.json');
const italianTranslationFile: TranslationFile = require('./data/old.json');
const resultingTranslationFile: TranslationFile = {};
const missingKeysInItalianLanguage: string[] = [];
const missingKeysInGermanLanguage: string[] = [];

Object.keys(germanTranslationFile).forEach((key: string) => {
  resultingTranslationFile[key] = germanTranslationFile[key];
});

Object.keys(germanTranslationFile).forEach((key: string) => {
  if (!italianTranslationFile.hasOwnProperty(key)) {
    missingKeysInItalianLanguage.push(key);
  }
});

Object.keys(italianTranslationFile).forEach((key: string) => {
  if (!germanTranslationFile.hasOwnProperty(key)) {
    resultingTranslationFile[key] = '';
    missingKeysInGermanLanguage.push(key);
  } else {
    resultingTranslationFile[key] = germanTranslationFile[key];
  }
});

// log status to console
if (missingKeysInGermanLanguage.length > 0) {
  console.log('Missing keys in new translations:\n');
  missingKeysInGermanLanguage.forEach((key: string) => {
    console.log(key);
  });
}

console.log('');

if (missingKeysInItalianLanguage.length > 0) {
  console.log('Missing keys in old translations:\n');
  missingKeysInItalianLanguage.forEach((key: string) => {
    console.log(key);
  });
}




