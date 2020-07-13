window.addEventListener("load", function () {
  const toggleMenuButton = document.getElementById("toggleMenuButton");
  const toggleMenu = document.getElementById("toggleMenu");
  let clientH;
  init();

  function init() {
    toggleMenu.style.height = "auto";
    clientH = toggleMenu.clientHeight;
    toggleMenu.style.height = "0px";
    toggleMenuButton.addEventListener("click", function () {
      clickToggle();
    });
  }
  function clickToggle() {
    let lastH = toggleMenu.style.height;
    toggleMenu.style.height =
      lastH === "" || lastH === "0px" ? clientH + "px" : "0px";
  }
});
