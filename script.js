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
                    <button onclick="phoneDetails('${phone.slug}')" class="more-button">More</button> 
                </p>
                </div>
            </div>
    `;
    displaySection.appendChild(newPhone);
  });
};
const phoneDetails = (id) => {
  fetch(`https://openapi.programming-hero.com/api/phone/${id}`)
    .then((res) => res.json())
    .then((result) => displayPhoneDetails(result.data));
};
const displayPhoneDetails = (phone) => {
  console.log(phone);
  const phoneDetailsSection = document.getElementById("display-phone-details");
  phoneDetailsSection.textContent = "";
  const mobile = document.createElement("div");
  mobile.classList.add("col");
  mobile.innerHTML = `
    <div class="card h-100">
                <img src="${phone.image}" class="card-img-top w-50 mx-auto" alt="..." />
                <div class="card-body">
                <h5 class="card-title">${phone.name}</h5>
                <p> <span class="title">Brand:</span> ${phone.brand} </br>
                <span class="title">Release Date:</span> ${phone.releaseDate} </br>
                <span class="title">Storage:</span> ${phone.mainFeatures.storage} </br>
                <span class="title">Display Size:</span> ${phone.mainFeatures.displaySize} </br>
                <span class="title">Chipset:</span> ${phone.mainFeatures.chipSet} </br>
                <span class="title">Memory:</span> ${phone.mainFeatures.memory} </br>
                <span class="title">WLAN:</span> ${phone.others.WLAN} </br>
                <span class="title">Bluetooth:</span> ${phone.others.Bluetooth} </br>
                <span class="title">GPS:</span> ${phone.others.GPS} </br>
                <span class="title">NFC:</span> ${phone.others.NFC} </br>
                <span class="title">Radio:</span> ${phone.others.Radio} </br>
                <span class="title">USB:</span> ${phone.others.USB} </br>
                </div>
            </div>
    `;
  phoneDetailsSection.appendChild(mobile);
};
