var activePage = "home";

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  hide(activePage);
  show(id);
  activePage = id;
}

showPage(activePage);

document.querySelector("#top-menu-bar").addEventListener("click", function (e) {
  var id = e.target.dataset.page;
  //console.info("Click on menu-bar", e.target.getAttribute("data-page"));
  //show(e.target.getAttribute("data-page"));
  //console.info(typeof id + " || " + id);
  if (id != undefined) {
    showPage(id);
  }
});
