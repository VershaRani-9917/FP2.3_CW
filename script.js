const employees = [
  { id: 1, name: "Alice", experience: 2 },
  { id: 2, name: "Bob", experience: 9 },
  { id: 3, name: "Charlie", experience: 4 },
  { id: 4, name: "Jhon", experience: 19 },
];

const employeeListContainer = document.querySelector("#employeeList");
const experienceCheckbox = document.querySelector("#experienceCheckbox");

function renderEmployees(filterByExperience) {
  const filteredEmployees = filterByExperience
    ? employees.filter((employee) => employee.experience > 5)
    : employees;

  const employeeListHTML = filteredEmployees
    .map(
      (employee) => `
        <li>
            <strong>ID: </strong>${employee.id}<br>
            <strong>Name: </strong>${employee.name}<br>
            <strong>Experience: </strong>${employee.experience} years<br>
        </li>
        <hr>`
    )
    .join("");

  employeeListContainer.innerHTML = employeeListHTML;
}

// Initial render
renderEmployees(false);

// Add event listener for checkbox
experienceCheckbox.addEventListener("change", function () {
  renderEmployees(experienceCheckbox.checked);
});
