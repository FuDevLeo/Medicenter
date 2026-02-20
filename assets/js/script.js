window.addEventListener("load", function () {
  const menuMobile = document.querySelector(".menuMobile");
  const menuList = document.querySelector("nav ul");

  menuMobile.addEventListener("click", function () {
    if (menuList.style.display === "flex") {
      menuList.style.display = "none";
    } else {
      menuList.style.display = "flex";
    }
  });
});