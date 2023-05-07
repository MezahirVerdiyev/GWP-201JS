import { ADI } from "./app.js";


const tbody = document.querySelector("tbody");

fetch(ADI)
  .then((response) => response.json())
  .then((data) => {
    data.forEach((supplier) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${supplier.id}</td>
        <td>${supplier.companyName}</td>
        <td>${supplier.address?.city}</td>
        <td>${supplier.address?.country}</td>
        <td>${supplier.address?.phone}</td>
        <td><button class="btn btn-danger"> Delete </button></td>`;
      tbody.appendChild(tr);
    });
  })
  .catch((error) => console.log(error));




  document.querySelector("table").addEventListener("click", (event) => {
    if (event.target.classList.contains("btn-danger")) {
      const row = event.target.closest("tr");
      const id = row.querySelector("td:first-child").textContent;
  
      row.remove();
  
      fetch(`ADI/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (!response) {
            throw new ("Network response was not ok");
          }
        })
        .catch((error) =>
          console.log("There was a problem with the fetch operation:", error)
        );
    }
  });

















