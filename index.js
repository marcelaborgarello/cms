const addWorkCard = (params) => {
  const template = document.getElementById("portfolio-card-template");
  const container = document.querySelector(".portfolio-content");
  const dataCard = params.items;
  dataCard.forEach((el, i) => {
    template.content.querySelector(".portfolio-img").src =
      params.includes.Asset[i].fields.file.url;

    template.content.querySelector(".portfolio-card-title").textContent =
      el.fields.title;

    template.content.querySelector(".portfolio-card-text").textContent =
      el.fields.description;

    template.content.querySelector(".portfolio-card-link-apx").href =
      el.fields.urlApx;

    template.content.querySelector(".portfolio-card-link-apx").textContent =
      "APX SCHOOL";

    console.log(el.fields.title);

    template.content.querySelector(".portfolio-card-link").href = el.fields.url;

    const clone = document.importNode(template.content, true);
    container.appendChild(clone);
  });
};

const getData = () => {
  fetch(
    "https://cdn.contentful.com/spaces/e9ivrq1o694l/environments/master/entries?access_token=2ZJxLxioa0CXpaYwTFBtCqd5hFgwG5ss0ZM7Lykgkp8"
  )
    .then((response) => response.json())
    .then((data) => addWorkCard(data));
};

const main = () => {
  getData();
};

main();
