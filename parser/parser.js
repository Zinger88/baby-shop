const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');

function createFolderIfNotExists(folderPath) {
    if (!fs.existsSync(folderPath)) {
        fs.mkdirSync(folderPath, { recursive: true });
        console.log(`Папка ${folderPath} создана.`);
    }
}

function saveContentToFile(folder, fileName, content) {
    const filePath = path.join(folder, fileName);
    fs.writeFileSync(filePath, content);
    console.log(`Контент сохранён в файл: ${filePath}`);
}

async function fetchAndParsePage(url, folder, fileName, selector) {
    try {
        const { data } = await axios.get(url);

        const $ = cheerio.load(data);

        const selectedContent = $(selector).html();

        if (selectedContent) {
            saveContentToFile(folder, fileName, selectedContent);
        } else {
            console.warn(`Содержимое по селектору '${selector}' не найдено на странице: ${url}`);
        }

        return $;
    } catch (error) {
        console.error('Ошибка при парсинге страницы:', error);
        return null;
    }
}

async function parseSite(url, folder, selector) {
    createFolderIfNotExists(folder);

    const mainPageFileName = `main_page_${Date.now()}.html`;

    const $mainPage = await fetchAndParsePage(url, folder, mainPageFileName, selector);

    if (!$mainPage) {
        console.error('Ошибка: главная страница не была загружена.');
        return;
    }

    const links = [];
    $mainPage('.wrap_other_mini a').each((i, element) => {
        const link = $mainPage(element).attr('href');
        if (link) {
            links.push(link);
        }
    });

    console.log('Найдено ссылок:', links.length);

    for (let i = 0; i < links.length; i++) {
        const fullUrl = new URL(links[i], url).href;
        const pageFileName = `page_${i}_${Date.now()}.html`;
        console.log(`Парсим ссылку: ${fullUrl}`);
        await fetchAndParsePage(fullUrl, folder, pageFileName, selector);
    }
}
const url = process.argv[2]; // Первый аргумент - URL
const folder = process.argv[4] || 'parsed_pages'; // третий аргумент - папка, по умолчанию "parsed_pages"
const selector = process.argv[3] || 'body'; // второй аргумент - селектор, по умолчанию "body"

if (!url) {
    console.error('Ошибка: необходимо указать URL.');
    process.exit(1);
}

parseSite(url, folder, selector);
