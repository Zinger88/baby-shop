const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

// Функция для создания папки, если она не существует
function createFolderIfNotExists(folderPath) {
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
    console.log(`Папка ${folderPath} создана.`);
  }
}

// Функция для сохранения контента в файл
function saveContentToFile(folder, fileName, content) {
  const filePath = path.join(folder, fileName);
  fs.writeFileSync(filePath, content);
  console.log(`Контент сохранён в файл: ${filePath}`);
}

// Парсинг страницы с выбором содержимого по селектору
async function fetchAndParsePage(url, folder, fileName, selector) {
  try {
    const { data } = await axios.get(url);
    
    // Парсинг HTML с помощью cheerio
    const $ = cheerio.load(data);
    
    // Извлекаем содержимое по заданному селектору
    const selectedContent = $(selector).html();
    
    if (selectedContent) {
      // Сохраняем выбранное содержимое в файл
      saveContentToFile(folder, fileName, selectedContent);
    } else {
      console.warn(`Содержимое по селектору '${selector}' не найдено на странице: ${url}`);
    }
    
    return $; // Возвращаем объект cheerio для дальнейшего использования
  } catch (error) {
    console.error('Ошибка при парсинге страницы:', error);
    return null; // Возвращаем null в случае ошибки
  }
}

// Основная функция для парсинга сайта и связанных страниц
async function parseSite(url, folder, selector) {
  createFolderIfNotExists(folder);
  
  const mainPageFileName = `main_page_${Date.now()}.html`;
  
  // Парсим главную страницу
  const $mainPage = await fetchAndParsePage(url, folder, mainPageFileName, selector);

  // Проверяем, что $mainPage был успешно получен
  if (!$mainPage) {
    console.error('Ошибка: главная страница не была загружена.');
    return;
  }

  // Находим все ссылки внутри блока с классом "wrap_other_mini"
  const links = [];
  $mainPage('.wrap_other_mini a').each((i, element) => {
    const link = $mainPage(element).attr('href');
    if (link) {
      links.push(link);
    }
  });

  console.log('Найдено ссылок:', links.length);
  
  // Парсим каждую страницу по ссылке
  for (let i = 0; i < links.length; i++) {
    const fullUrl = new URL(links[i], url).href; // Строим полный URL на случай относительных ссылок
    const pageFileName = `page_${i}_${Date.now()}.html`;
    console.log(`Парсим ссылку: ${fullUrl}`);
    await fetchAndParsePage(fullUrl, folder, pageFileName, selector);
  }
}

// Пример вызова функции:
// URL, папка и селектор передаются аргументами командной строки
const url = process.argv[2]; // Первый аргумент - URL
const folder = process.argv[4] || 'parsed_pages'; // третий аргумент - папка, по умолчанию "parsed_pages"
const selector = process.argv[3] || 'body'; // второй аргумент - селектор, по умолчанию "body"

if (!url) {
  console.error('Ошибка: необходимо указать URL.');
  process.exit(1);
}

parseSite(url, folder, selector);
