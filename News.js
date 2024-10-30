import React, { useEffect, useState } from 'react';

const News = ({ category, query }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);
      try {
        const url = query
          ? `https://newsapi.org/v2/everything?q=${query}&apiKey=44c74f8c495e47bf9d596e0dd46c5604`
          : `https://newsapi.org/v2/top-headlines?country=us&category=${category || 'general'}&apiKey=44c74f8c495e47bf9d596e0dd46c5604`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setArticles(data.articles);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category, query]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{query ? `Results for "${query}"` : 'Top News Articles'}</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.url}>
            <h2>{article.title}</h2>
            {article.urlToImage && <img src={article.urlToImage} alt={article.title} />}
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;
