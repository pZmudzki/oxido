const fs = require("fs");

/**
 * Function to load article from file
 * @param {string} filePath
 * @returns {string} article content
 */
const loadArticle = (filePath) => {
  return fs.readFileSync(filePath, "utf-8");
};

/**
 * Main self invoked function
 * @returns {void}
 */
(function () {
  try {
    const articlePath = "./article.txt";
    const articleContent = loadArticle(articlePath);
    console.log(articleContent);
  } catch (error) {
    console.error("Błąd:", error);
  }
})();
