const inputField = document.getElementById("nameSearch");
const searchBtn = document.getElementById("submitBtn");
const displayContent = document.getElementById("displayContent");

searchBtn.addEventListener("click", () => {
  fetch(`https://api.github.com/users/${inputField.value}`).then((response) => {
    response.json().then((user) => {
      console.log(user.avatar_url);
      displayContent.innerHTML = `
         <div class="name">
         <img
           src="${user.avatar_url}"
           alt=""
           class="displayPhoto"
         />
         <div>
             <h1>${user.name}</h1>
             <a href="${user.html_url}">
             <h2>${user.login}</h2>
           </a>
           <p>${user.bio ?? ""}</p>
           <a href="https://twitter.com/${user.twitter_username ?? ""}">
           <i class="ph-fill ph-twitter-logo" style="color: #00acee; font-size: 42px;"></i>
           </a>
           <div>
            <h3>Followers <span class="nms">${user.followers}</span></h3>
            <h3>Following <span class="nms">${user.following}</span></h3>
            </div>


         </div>
       </div>`;
    });
  });
});
