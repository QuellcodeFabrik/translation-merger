interface TranslationFile {
  [index: string]: string;
}

const translationFile: TranslationFile = require('./data/de.json');
const missingTranslations: string[] = [];

Object.keys(translationFile).forEach((key: string) => {
  if (!translationFile[key]) {
    missingTranslations.push(key);
  }
});

// log status to console
if (missingTranslations.length > 0) {
  console.log('Missing translations for de:\n');
  missingTranslations.forEach((key: string) => {
    console.log(key);
  });
}
