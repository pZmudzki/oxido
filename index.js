require("dotenv").config();
const fs = require("fs");
const OpenAI = require("openai");

// openAi instance
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Function to load article from file
 * @returns {string} article content
 */
const loadArticle = () => {
  return fs.readFileSync("./assets/article.txt", "utf-8");
};

/**
 * Function to generate HTML from article content using OpenAI
 * @param {string} articleContent
 * @returns {Promise<string>} generated HTML
 * @async
 */
const generateHTML = async (articleContent) => {
  const prompt = `Generate HTML for this article with appropriate semantic HTML tags. 
                  Include <img src="image_placeholder.jpg" alt="{insert here a prompt for image generation}" /> tags where images should go. 
                  Return only article content in plain text without any <html>, <head> and <body> tags. 
                  Do not add any css or javascript.
                  Do not modify the article content.`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
      {
        role: "user",
        content: prompt + " Acticle: " + articleContent,
      },
    ],
  });

  return response.choices[0].message.content;
};

/**
 * Function to save generated HTML to file
 * @param {string} htmlContent
 * @returns {void}
 */
const saveHTML = (htmlContent) => {
  fs.writeFileSync("./assets/artykul.html", htmlContent);
};

/**
 * Main self invoked function
 * @returns {void}
 */
(async function () {
  try {
    const articleContent = loadArticle();
    const htmlContent = await generateHTML(articleContent);
    saveHTML(htmlContent);
  } catch (error) {
    console.error("Error:", error);
  }
})();
