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
        <p class="desc">${resData.body}</p>
        <div class="container">
        <p class="likes">Likes : <spans>${resData.reactions.likes}</spans></p>
        <p class="dlikes">Dislikes : <span>${resData.reactions.dislikes}</span></p>
        </div>
        <p class="tags">Tags : <span>${resData.tags}</span></p>`
    }
  }, 1000);
};
fetchOffers();