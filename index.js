function showHomePage() {
  hideAll();
  show("home");
}

function showSkillsPage() {
  hideAll();
  show("skills");
}

function showLanguagesPage() {
  hideAll();
  show("languages");
}

function showProjectsPage() {
  hideAll();
  show("projects");
}

//function showSpecifiedPage(specifiedPage) {
//  document.getElementById(specifiedPage).style.display = "block";
//}

function show(id) {
  document.getElementById(id).style.display = "block";
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

showHomePage();
//showSpecifiedPage("skills");

var homeLink = document.querySelectorAll("#top-menu-bar a")[0];
homeLink.addEventListener("click", showHomePage);

var skillsLink = document.querySelectorAll("#top-menu-bar a")[1];
skillsLink.addEventListener("click", showSkillsPage);

var projectsLink = document.querySelectorAll("#top-menu-bar a")[2];
projectsLink.addEventListener("click", showProjectsPage);

var languagesLink = document.querySelectorAll("#top-menu-bar a")[3];
languagesLink.addEventListener("click", showLanguagesPage);
