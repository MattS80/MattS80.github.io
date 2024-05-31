var activePage = "home";

function $(selector) {
  return document.querySelector(selector);
}

function show(id) {
  //document.getElementById(id).style.display = "block";
  $("#" + id).style.display = "block";
}

function hide(id) {
  //document.getElementById(id).style.display = "none";
  $(`#${id}`).style.display = "none";
  //Alternative Schreibweise
}

function SetActiveFlagOfactivePage(add) {
  if (add) {
    $(`#top-menu-bar a[data-page="${activePage}"]`).classList.add("active");
  } else {
    $(`#top-menu-bar a[data-page="${activePage}"]`).classList.remove("active");
  }
}

function showPage(id) {
  hide(activePage);
  SetActiveFlagOfactivePage(false);
  show(id);
  activePage = id;
  SetActiveFlagOfactivePage(true);
}

showPage(activePage);

$("#top-menu-bar").addEventListener("click", function (e) {
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
