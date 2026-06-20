const BASE_URL = "https://dummyjson.com";

export async function getCategories() {
  const url = `${BASE_URL}/products/categories`;

  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error("Error al obtener las categorías de la API");

  return res.json();
}

export async function getProducts({
  limit = 16,
  skip = 0,
  category = "",
  sortBy = "",
  order = "asc",
} = {}) {
  let url;

  if (category) {
    url = `${BASE_URL}/products/category/${category}?limit=${limit}&skip=${skip}`;
  } else {
    url = `${BASE_URL}/products?limit=${limit}&skip=${skip}`;
  }

  if (sortBy) url += `&sortBy=${sortBy}&order=${order}`;

  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error("Error al obtener productos");
  return res.json();
}

export async function getProductById(id) {
  const url = `${BASE_URL}/products/${id}`;

  const res = await fetch(url, { next: { revalidate: 3600 } });
  if (!res.ok) throw new Error(`Error al obtener el producto con ID ${id}`);

  return res.json();
}
