const content = document.querySelector("#content");

const fetchOffers = async () => {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  const myData = await data.posts;

  content.textContent = "Chargement des données";

  setTimeout(() => {
    for (let i = 0; i < myData.length; i++) {
        const resData = myData[i]
        
        content.innerHTML = `
        <h2>${resData.title}</h2>
        <p>${resData.body}</p>`
    }
  }, 1000);
};
fetchOffers();