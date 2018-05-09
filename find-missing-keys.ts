interface TranslationFile {
  [index: string]: string;
}

const englishTranslationFile: TranslationFile = require('./data/en.json');
const italianTranslationFile: TranslationFile = require('./data/it.json');
const missingKeysInItalianLanguage: string[] = [];
const missingKeysInEnglishLanguage: string[] = [];

Object.keys(englishTranslationFile).forEach((key: string) => {
  if (!italianTranslationFile.hasOwnProperty(key)) {
    missingKeysInItalianLanguage.push(key);
  }
});

Object.keys(italianTranslationFile).forEach((key: string) => {
  if (!englishTranslationFile.hasOwnProperty(key)) {
    missingKeysInEnglishLanguage.push(key);
  }
});

// log status to console
if (missingKeysInEnglishLanguage.length > 0) {
  console.log('Missing keys in English translations:\n');
  missingKeysInEnglishLanguage.forEach((key: string) => {
    console.log(key);
  });
}

console.log('');

if (missingKeysInItalianLanguage.length > 0) {
  console.log('Missing keys in Italian translations:\n');
  missingKeysInItalianLanguage.forEach((key: string) => {
    console.log(key);
  });
}






