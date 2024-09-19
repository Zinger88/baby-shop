const fs = require('fs');

function escapeDoubleQuotes(html) {
  return html.replace(/"/g, '\\"');
}

const inputFilePath = process.argv[2];
if (!inputFilePath) {
  console.error('Пожалуйста, укажите путь к входному HTML-файлу.');
  process.exit(1);
}
const outputFilePath = `${inputFilePath.replace('.html', '')}-result-html.txt`;
if (!fs.existsSync(inputFilePath)) {
  console.error('Входной файл не найден.');
  process.exit(1);
}

const html = fs.readFileSync(inputFilePath, 'utf-8');
const escapedHtml = escapeDoubleQuotes(html);
const cleanedHtml = escapedHtml
  .replace(/\s+/g, ' ')
  .replace(/\n/g, '');

fs.writeFileSync(outputFilePath, `"${cleanedHtml}"`, 'utf-8');

console.log(`Результат сохранен в ${outputFilePath}`);


// node html-to-string.js path/to/your/file.html