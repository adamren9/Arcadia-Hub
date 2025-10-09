const params = new URLSearchParams(window.location.search);
const newsId = params.get("id");

const article = newsArticles[newsId];
const container = document.getElementById("news-article");

if (article) {
  container.innerHTML = `
    <h2>${article.title}</h2>
    <p>${article.content}</p>
    <a href="news.html">← Back to News</a>
  `;
} else {
  container.innerHTML = `
    <h2>Article Not Found</h2>
    <p>Sorry, the article you are looking for doesn’t exist.</p>
    <a href="news.html">← Back to News</a>
  `;
}
