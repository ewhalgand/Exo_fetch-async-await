const content = document.querySelector("#content");

const fetchOffers = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  const myData = await data.posts[0];

  content.innerHTML = `
    <h2>${myData.title}</h2>
    <p>${myData.body}</p>`;
};
fetchOffers();
