var activePage = "home";

function show(id) {
  document.getElementById(id).style.display = "block";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function showPage(id) {
  hide(activePage);
  document
    .querySelector(`#top-menu-bar a[data-page="${activePage}"]`)
    .classList.remove("active");
  show(id);
  activePage = id;
  document
    .querySelector(`#top-menu-bar a[data-page="${activePage}"]`)
    .classList.add("active");
}

showPage(activePage);

document.querySelector("#top-menu-bar").addEventListener("click", function (e) {
  var id = e.target.dataset.page;
  //console.info("Click on menu-bar", e.target.getAttribute("data-page"));
  //show(e.target.getAttribute("data-page"));
  //console.info(typeof id + " || " + id);
  //if (id != undefined)
  if (id) {
    // soll das gleiche tun als das darüber
    showPage(id);
  }
});
