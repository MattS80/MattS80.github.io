function showHomePage() {
  hide("skills");
  hide("projects");
  hide("languages");
  document.getElementById("home").style.display = "block";
}

function showSkillsPage() {
  hide("home");
  hide("projects");
  hide("languages");
  document.getElementById("skills").style.display = "block";
}

function showLanguagesPage() {
  hide("skills");
  hide("projects");
  hide("home");
  document.getElementById("languages").style.display = "block";
}

function showProjectsPage() {
  hide("skills");
  hide("home");
  hide("languages");
  document.getElementById("projects").style.display = "block";
}

function showSpecifiedPage(specifiedPage) {
  document.getElementById(specifiedPage).style.display = "block";
}

function hide(id) {
  document.getElementById(id).style.display = "none";
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
