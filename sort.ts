import * as fs from 'fs';
import * as path from 'path';

interface TranslationFile {
  [index: string]: string;
}

const data: TranslationFile = require('./data/result.json');
const result: any = {};

Object.keys(data).sort().forEach((key: string) => {
  result[key] = data[key];
});

// write the resulting translation file
fs.writeFileSync(path.join('./data', 'sorted.json'),
  JSON.stringify(result, null, 2));
