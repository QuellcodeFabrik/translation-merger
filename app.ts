import * as fs from 'fs';
import * as path from 'path';

interface TranslationFile {
  [index: string]: string;
}

interface Translation {
  key: string;
  translation: string;
}

const oldTranslationFile: TranslationFile = require('./data/old.json');
const newTranslationFile: TranslationFile = require('./data/new.json');
const resultingTranslationFile: TranslationFile = {};

const conflictingTranslations: Array<Translation & { conflictingTranslation: string }> = [];

Object.keys(oldTranslationFile).forEach((key: string) => {
  if (oldTranslationFile[key] !== '' && newTranslationFile[key] !== oldTranslationFile[key]) {
    // a translation is already given and the new one differs
    conflictingTranslations.push({ key,
      translation: oldTranslationFile[key],
      conflictingTranslation: newTranslationFile[key]
    });

    resultingTranslationFile[key] = oldTranslationFile[key];
  } else if (oldTranslationFile[key] === '') {
    // there has no translation been given yet, so set it
    resultingTranslationFile[key] = newTranslationFile[key];
  } else {
    // there has been no conflict, so we just keep the translation
    resultingTranslationFile[key] = oldTranslationFile[key];
  }
});

// add the new translation keys and translations
Object.keys(newTranslationFile).forEach((key: string) => {
  if (!oldTranslationFile.hasOwnProperty(key)) {
    resultingTranslationFile[key] = newTranslationFile[key];
  }
});

// write the resulting translation file
fs.writeFileSync(path.join('./data', 'result.json'),
  JSON.stringify(resultingTranslationFile, null, 2));

// print the conflicts
console.log('The following conflicts have been identified:\n');
conflictingTranslations.forEach((conflict: Translation & { conflictingTranslation: string }) => {
  console.log(conflict.key + ':\t' + conflict.translation + ' --> ' + conflict.conflictingTranslation);
});


