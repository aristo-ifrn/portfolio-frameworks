const worksSection = document.querySelector("#works");
const repositoriesSection = document.querySelector("#repositories");
const communityAndFilesSection = document.querySelector("#community-and-files");

const worksButton = document.querySelector(".works");
const repositoriesButton = document.querySelector(".repositories");
const communityAndFilesButton = document.querySelector(".community-and-files");

window.addEventListener("scroll", () => {
  [worksButton, repositoriesButton, communityAndFilesButton].forEach((e) => {
    e.removeAttribute("data-state");
  });

  console.log(window.scrollY)

  if (worksSection.clientHeight >= window.scrollY) {
    worksButton.setAttribute("data-state", "active")
  }
  if (window.scrollY > worksSection.clientHeight && worksSection.clientHeight + repositoriesSection.clientHeight >= window.scrollY) {
    repositoriesButton.setAttribute("data-state", "active")
  }
  if (window.scrollY > worksSection.clientHeight + repositoriesSection.clientHeight && worksSection.clientHeight + repositoriesSection.clientHeight + communityAndFilesButton.clientHeight >= window.scrollY) {
    communityAndFilesButton.setAttribute("data-state", "active")
  }
})

const loader = document.querySelector("#loader")

window.addEventListener("load", () => {
  loader.setAttribute("data-state", "closed")
})