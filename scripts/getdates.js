const currentyear = document.querySelector("#currentyear");
const lastmodified = document.querySelector("#lastModified");
const today = new Date();

lastmodified.innerHTML = new Date(document.lastModified);

currentyear.innerHTML = `${today.getFullYear()}`;