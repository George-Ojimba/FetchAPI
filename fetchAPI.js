function fetchData() {
  fetch("https://reqres.in/api/users")
    .then((response) => {
      // even though .catch is for error handling, please carryout a check as fetch tends not to run .catch even when an error occurs
      if (!response.ok) {
        throw Error("incorrect URL check the URL and try again!!!");
      }
      return response.json();
    })
    .then((data) => {
      console.log(data.data);
      const users = data.data;
      const html = users
        .map((user) => {
          return `
          <div class="user">
                     <div class="image"><img src="${user.avatar}" alt="${user.first_name}"/></div>

            <p class="name">Name: ${user.first_name} ${user.last_name}</p>
            <p class="email">Email: ${user.email}</p>
          </div>`;
        })
        .join("");

      console.log(html);
      document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    })
    .catch((error) => {
      console.log(error);
    });
}

fetchData();
