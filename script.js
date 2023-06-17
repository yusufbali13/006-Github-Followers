//javascript
const searchInput = document.getElementById("searchText");
const searchBtn = document.querySelector("#button");
const cardsDiv = document.querySelector(".cards");

searchBtn.addEventListener("click", () => {
  if (searchInput.value) {
    console.log(searchInput.value);
    getData(searchInput.value);
    cardsDiv.innerHTML = "";
  } else {
    alert("Lütfen bir kullanıcı adı giriniz");
  }
});

async function getData(username) {
  const url = `https://api.github.com/users/${username}/followers?per_page=100`;
  try {
    let response = await fetch(url);
    console.log(response);

    if (response.ok) {
      const data = await response.json();
      console.log(data);
      data.forEach((user) => createElem(user));
    } else {
      cardsDiv.innerHTML = `<h1 class="text-danger">Kullanıcı bulunamadı👎👎</h1>`;
    }
  } catch (error) {
    console.log(error);
  }
}

function createElem(user) {
  const { login, avatar_url, html_url } = user;
  const newElem = `
    <div class="col">
        <div class="card">
        <img src="${avatar_url}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${login}</h5>
            <a href="${html_url}" target="_blank" class="btn btn-dark">View Profile</a>
        </div>
        </div>
    </div>
    `;
  cardsDiv.innerHTML += newElem;
}

// const getData2 = async (){

// }
