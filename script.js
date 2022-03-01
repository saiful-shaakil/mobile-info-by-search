document.getElementById("button-addon2").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input");
  const searchText = searchInput.value.toLowerCase();
  fetch(` https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then((response) => response.json())
    .then((result) => displayPhone(result.data));
  document.getElementById("search-input").value = "";
});
const displayPhone = (phones) => {
  phones.forEach((phone) => {
    console.log(phone);
    const displaySection = document.getElementById("display-section");
    const newPhone = document.createElement("div");
    newPhone.classList.add("col");
    newPhone.innerHTML = `
            <div class="card h-100">
                <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="..." />
                <div class="card-body">
                <h5 class="card-title">${phone.brand}</h5>
                <p class="card-text">
                    ${phone.phone_name} </br>
                    <button onclick="displayPhoneDetails()" class="more-button">More</button> 
                </p>
                </div>
            </div>
    `;
    displaySection.appendChild(newPhone);
  });
};
