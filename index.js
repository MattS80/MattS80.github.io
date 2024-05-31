var activePage = "home";

function showHomePage() {
  hide(activePage);
  show("home");
}

function showSkillsPage() {
  hide(activePage);
  show("skills");
}

function showLanguagesPage() {
  hide(activePage);
  show("languages");
}

function showProjectsPage() {
  hide(activePage);
  show("projects");
}

function show(id) {
  document.getElementById(id).style.display = "block";
  activePage = id;
}

function hide(id) {
  document.getElementById(id).style.display = "none";
}

function hideAll() {
  hide("skills");
  hide("home");
  hide("languages");
  hide("projects");
}

//hideAll();
show(activePage);
//showHomePage();

var homeLink = document.querySelectorAll("#top-menu-bar a")[0];
homeLink.addEventListener("click", showHomePage);

var skillsLink = document.querySelectorAll("#top-menu-bar a")[1];
skillsLink.addEventListener("click", showSkillsPage);

var projectsLink = document.querySelectorAll("#top-menu-bar a")[2];
projectsLink.addEventListener("click", showProjectsPage);

var languagesLink = document.querySelectorAll("#top-menu-bar a")[3];
languagesLink.addEventListener("click", showLanguagesPage);
