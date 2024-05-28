function showHomePage() {
  hideLanguagesPage();
  hideProjectsPage();
  hideSkillsPage();
  document.getElementById("home").style.display = "block";
}

function hideHomePage() {
  document.getElementById("home").style.display = "none";
}

function showSkillsPage() {
  hideHomePage();
  hideLanguagesPage();
  hideProjectsPage();
  document.getElementById("skills").style.display = "block";
}

function hideSkillsPage() {
  document.getElementById("skills").style.display = "none";
}

function showLanguagesPage() {
  hideHomePage();
  hideSkillsPage();
  hideProjectsPage();
  document.getElementById("languages").style.display = "block";
}

function hideLanguagesPage() {
  document.getElementById("languages").style.display = "none";
}

function showProjectsPage() {
  hideHomePage();
  hideLanguagesPage();
  hideSkillsPage();
  document.getElementById("projects").style.display = "block";
}

function hideProjectsPage() {
  document.getElementById("projects").style.display = "none";
}

function showSpecifiedPage(specifiedPage) {
  document.getElementById(specifiedPage).style.display = "block";
}

function hideSpecifiedPage(specifiedPage) {
  document.getElementById(specifiedPage).style.display = "none";
}

showHomePage();

var homeLink = document.querySelectorAll("#top-menu-bar a")[0];
homeLink.addEventListener("click", showHomePage);

var skillsLink = document.querySelectorAll("#top-menu-bar a")[1];
skillsLink.addEventListener("click", showSkillsPage);

var projectsLink = document.querySelectorAll("#top-menu-bar a")[2];
projectsLink.addEventListener("click", showProjectsPage);

var languagesLink = document.querySelectorAll("#top-menu-bar a")[3];
languagesLink.addEventListener("click", showLanguagesPage);

//showSpecifiedPage("skills");
