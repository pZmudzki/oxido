require("dotenv").config();
const fs = require("fs");
const OpenAI = require("openai");

// openAi instance
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

/**
 * Function to load article from file
 * @param {string} filePath
 * @returns {string} article content
 */
const loadArticle = (filePath) => {
  return fs.readFileSync(filePath, "utf-8");
};

/**
 * Function to generate HTML from article content using OpenAI
 * @param {string} articleContent
 * @returns {Promise<string>} generated HTML
 * @async
 */
const generateHTML = async (articleContent) => {
  const prompt = ` Generate HTML for this article with appropriate HTML tags. Include <img src="image_placeholder.jpg" alt="prompt to generate image" /> tags where images should go. Do not add any css or javascript. Return only article content without any <html>, <head> and <body> tags. Do not modify the article content. Do not add any text before nor after generated HTML.`;

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
 * Main self invoked function
 * @returns {void}
 */
(async function () {
  try {
    const articlePath = "./article.txt";
    const articleContent = loadArticle(articlePath);

    const htmlContent = await generateHTML(articleContent);
    console.log(htmlContent);
  } catch (error) {
    console.error("Błąd:", error);
  }
})();
