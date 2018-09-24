import * as fs from 'fs';
import * as path from 'path';

interface TranslationFile {
  [index: string]: string;
}

const data: TranslationFile = require('./data/data.json');
const result: TranslationFile = {};

Object.keys(data).forEach((key: string) => {
  if (data[key] !== '') {
    result[key] = data[key];
  }
});

// write the resulting translation file
fs.writeFileSync(path.join('./data', 'filtered.json'),
  JSON.stringify(result, null, 2));
