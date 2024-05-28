function variablesExmple() {
  var employed = true;
  var age = 44;
  var name = "John Wick";
  var mystring = "Page Loaded";

  console.log(true);
  console.info(mystring);
  console.debug(5 - 2);
  console.warn(10 / 2);
  console.error("Hello World!" + " Hello Back!");
  console.info(typeof employed);
  console.warn(age);
  console.warn("My name is ", name, typeof name);

  name = "John Weak";
  console.warn("My name is ", name, typeof name);

  name = false;
  console.warn("My name is ", name, typeof name);

  age = "50";
  console.warn("My age is ", age, typeof age);

  var skills = ["HTML", "CSS", "JS"]; //object (array)
  console.debug(skills, typeof skills);

  //object (json)
  var person = {
    employed: true,
    age: 44,
  };
  person.name = "Matt";
  console.info(person, typeof person);
}

function UpdateTitle(title) {
  //object (DOM, other)
  var jobtitle = document.getElementById("job-title");
  console.info(jobtitle, typeof jobtitle);
  console.info(jobtitle.innerHTML);
  jobtitle.innerHTML = title;
  console.info(jobtitle.innerHTML);
}

function jsonWithFunctions() {
  var person = {
    age: 44,
    name: "Matt",
    learn: function () {
      console.info("I'm learning JS, I love it!");
    },
    play: function () {
      console.info("I'm playing. My name is ", this.name);
    },
  };

  person.learn();
  person.play();

  //typeof document
  //typeof document.getElementById
  //typeof console
  console.info(person["name"]); // => Nick
  var action = "learn"; //or play
  person[action]();
}

//variablesExmple();
//UpdateTitle("GrossMeister");
//jsonWithFunctions();

console.log(typeof variablesExmple);
console.log(typeof document);
console.log(typeof document.getElementById);
