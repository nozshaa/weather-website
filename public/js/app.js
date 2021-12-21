const weatherForm = document.querySelector("form");
const search = document.querySelector("input");
const result = document.querySelector(".result");
const messageOne = document.querySelector("#message-1");
const messageTwo = document.querySelector("#message-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const location = search.value;
  messageOne.textContent = "Loading...";
  messageTwo.textContent = "";

  fetch(`/weather?address=${location}`)
    .then((res) => res.json())
    .then((data) => {
      //   result.innerHTML = "k";
      if (data.error) {
        messageOne.textContent = data.error;
        console.log(data.error);
      } else {
        messageOne.textContent = data.location;
        messageTwo.textContent = data.forecastData;
      }
    });

  console.log("testing!: ", result);
});
