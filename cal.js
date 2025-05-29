const calendarDiv = document.getElementById("calendar");
const yearSelect = document.getElementById("yearSelect");

// Populate year dropdown
for (let y = 1625; y <= 2024; y++) {
  let option = document.createElement("option");
  option.value = y;
  option.textContent = y;
  yearSelect.appendChild(option);
}

yearSelect.value = new Date().getFullYear();

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function generateCalendar(year) {
  calendarDiv.innerHTML = "";

  for (let month = 0; month < 12; month++) {
    const monthDiv = document.createElement("div");
    monthDiv.className = "month";

    const title = document.createElement("h3");
    title.textContent = `${monthNames[month]} ${year}`;
    monthDiv.appendChild(title);

    const weekdaysRow = document.createElement("div");
    weekdaysRow.className = "weekdays";
    weekdays.forEach(day => {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = day;
      weekdaysRow.appendChild(dayDiv);
    });
    monthDiv.appendChild(weekdaysRow);

    const daysGrid = document.createElement("div");
    daysGrid.className = "days";

    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    for (let i = 0; i < firstDay; i++) {
      daysGrid.appendChild(document.createElement("div"));
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayDiv = document.createElement("div");
      dayDiv.textContent = day;

      const today = new Date();
      if (
        day === today.getDate() &&
        month === today.getMonth() &&
        year === today.getFullYear()
      ) {
        dayDiv.classList.add("today");
      }

      daysGrid.appendChild(dayDiv);
    }

    monthDiv.appendChild(daysGrid);
    calendarDiv.appendChild(monthDiv);
  }
}

yearSelect.addEventListener("change", () => {
  generateCalendar(parseInt(yearSelect.value));
});

generateCalendar(parseInt(yearSelect.value));
