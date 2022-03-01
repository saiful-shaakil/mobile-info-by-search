document.getElementById("button-addon2").addEventListener("click", () => {
  const searchInput = document.getElementById("search-input").value;
  const searchText = searchInput.toLowerCase();
  fetch(` https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    .then((response) => response.json())
    .then((result) => displayPhone(result.data));
});
const displayPhone = (phones) => {
  phones.forEach((phone) => {
    console.log(phone);
  });
};
