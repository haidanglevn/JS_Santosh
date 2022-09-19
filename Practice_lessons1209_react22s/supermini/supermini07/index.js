class Tasks {
  constructor(tasks) {
    this.tasks = [];
  }

  /** @param {string} csvString */
  importCsv(csvString) {
    this.tasks = csvString.split(",");
    console.log(tasks);
  }
  getCount() {
    return this.tasks.length;
  }
  getFirst() {
    return this.tasks[0];
  }
  getLast() {
    return this.tasks[this.tasks.length - 1];
  }
  getUnformattedTasks() {
    return this.tasks.map((e) => e.toLowerCase());
    /* return this.tasks.join(',').toLowerCase(); */
  }
}

//Sample usage do not modify (but feel free to read)
const dropdown = document.querySelector("#csv-dropdown");
const tbody = document.querySelector("#tbody");

let tasks = new Tasks();

function render() {
  tbody.innerHTML = "";
  tasks.tasks.forEach(function (task) {
    tbody.insertAdjacentHTML(
      "beforeend",
      `<tr>
            <th>Task</th>
            <td>${task}</td>
        </tr>`
    );
  });
  tbody.insertAdjacentHTML(
    "beforeend",
    `<tr class="separator">
            <th>Number of tasks</th>
            <td>${tasks.getCount()}</td>
        </tr>
        <tr>
            <th>First task</th>
            <td>${tasks.getFirst()}</td>
        </tr>
        <tr>
            <th>Last task</th>
            <td>${tasks.getLast()}</td>
        </tr>
        <tr>
            <th>Lower-cased tasks</th>
            <td>${tasks.getUnformattedTasks()}</td>
        </tr>
        `
  );
}

dropdown.addEventListener("change", (event) => {
  tasks.importCsv(dropdown.value);
  render();
});
