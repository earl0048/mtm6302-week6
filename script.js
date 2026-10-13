const $employee = {
  name: "Jax",
  id: 894567,
  hireDate: 23,
  hireMonth: "Aug",
  hireYear: 2001,
  department: "Innovation",
  email: "jax@company.com",
  skills: ["UX", "Prototyping", "Documentation"],
  adress: {
    street: "123 Main St",
    city: "Merlot",
    province: "Ontario",
    zip: "A1B 2C3",
  },

  selfIntro: function () {
    const introTemplate = `Hi, I am ${this.name}, I have been working in ${this.department} since ${this.hireYear}.`;
    return introTemplate;
  },
};

const $empSection = document.getElementById("employee");

$empSection.insertAdjacentHTML(
  "afterbegin",
  `<h2>Welcome ${$employee.name}</h2>`,
);

$employee.department = "Innovation and Research";

const $empInfo = `<dl>
<dt>ID</dt>
<dd>${$employee.id}</dd>
<dt>Department</dt>
<dd>${$employee.department}</dd>
<dt>Year Hired</dt>
<dd>${$employee.hireYear}</dd>
<dt>Email</dt>
<dd>${$employee.email}</dd>
</dl>`;

$empSection.insertAdjacentHTML("beforeend", $empInfo);

// Accessing an arrat in an object
const $empSkills = $employee.skills;
$empSection.insertAdjacentHTML(
  "beforeend",
  `<p>${$employee.name} is skilled in ${$empSkills.join(", ")}</p>`,
);

// Accessing an Object inside of an Object
$empSection.insertAdjacentHTML(
  "beforeend",
  `<p>Adress: ${$employee.adress.street}, ${$employee.adress.city}, ${$employee.adress.province}, ${$employee.adress.zip}</p>`,
);

// Accessing Object Methods
$empSection.insertAdjacentHTML("beforeend", $employee.selfIntro());

// JS Object Static Methods
console.log(Object.keys($employee));
console.log(Object.values($employee));
console.log(Object.entries($employee));

$employee.pronouns = "They/Them";
$empSection.insertAdjacentHTML(
  "beforeend", `<p>${$employee.name} uses ${$employee.pronouns} as pronouns.</p>`);

  // Deleting an objecct property
delete $employee.hireMonth
