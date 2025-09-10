
const BASE_URL = "http://localhost/api/php/my-blog-cms/article";

export const fetchArticles = async () => {
  const res = await fetch(`${BASE_URL}/get.php`);
  return await res.json();
};

export const fetchArticleById = async (id: string) => {
  const res = await fetch(`${BASE_URL}/get_one.php?id=${id}`);
  return await res.json();
};
