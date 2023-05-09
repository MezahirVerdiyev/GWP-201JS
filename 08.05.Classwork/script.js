const allUser = document.querySelector(".allUser");

function dataUser() {
    allUser.innerHTML = "";
    fetch("https://northwind.vercel.app/api/suppliers")
        .then((response) => response.json())
        .then((data) => {
            data.forEach((supplier) => {
                allUser.innerHTML += `
            <div class="card col col-5 ms-5 mt-3 " >
              <div class="card-body">
              <div>
                 <h5 class="card-title">${supplier.address?.country}</h5>
                 <p class="card-text">${supplier.companyName}</p>
              </div>
              <div>
                 <i class="fa-solid fa-pen" onclick=editUser(${supplier.id})></i>
                 <i class="fa-solid fa-trash-can" onclick=deleteUser(${supplier.id})></i>
              </div>
              </div>
            </div>`;
            });
        })
        .catch((error) => console.log(error));
}
dataUser();

function deleteUser(id) {
    fetch(`https://northwind.vercel.app/api/suppliers/${id}`, {
        method: "DELETE",
    }).then(() => {
        dataUser();
    }).catch((error) => console.log(error));

    allUser.reset();
}

function editUser(id) {
    window.location.href = "./addUser.html?id=" + id;
  
}








