const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

function ageCalculate() {
  let birthInputDate = new Date(
    document.getElementById("birth-date-input").value
  );
  let CurrentInputDate = new Date(
    document.getElementById("current-date-input").value
  );
  let calculated_month, calculated_date, calculated_year;

  let birthDetails = {
    birthDate: birthInputDate.getDate(),
    birthMonth: birthInputDate.getMonth() + 1,
    birthYear: birthInputDate.getFullYear(),
  };
  let currentDetails = {
    currentDate: CurrentInputDate.getDate(),
    currentMonth: CurrentInputDate.getMonth() + 1,
    currentYear: CurrentInputDate.getFullYear(),
  };

  leapChecker(currentDetails.currentYear);

  if (
    birthDetails.birthYear > currentDetails.currentYear ||
    (birthDetails.birthMonth > currentDetails.currentMonth &&
      birthDetails.birthYear == currentDetails.currentYear) ||
    (birthDetails.birthDate > currentDetails.currentDate &&
      birthDetails.birthMonth == currentDetails.currentMonth &&
      birthDetails.birthYear == currentDetails.currentYear)
  ) {
    alert("NOT BORN YET");
    return;
  }

  calculated_year = currentDetails.currentYear - birthDetails.birthYear;

  if (currentDetails.currentMonth >= birthDetails.birthMonth) {
    calculated_month = currentDetails.currentMonth - birthDetails.birthMonth;
  } else {
    calculated_year--;
    calculated_month =
      12 + currentDetails.currentMonth - birthDetails.birthMonth;
  }

  if (currentDetails.currentDate >= birthDetails.birthDate) {
    calculated_date = currentDetails.currentDate - birthDetails.birthDate;
  } else {
    calculated_month--;
    let days = months[currentDetails.currentMonth - 2];
    calculated_date =
      days + currentDetails.currentDate - birthDetails.birthDate;
    if (calculated_month < 0) {
      calculated_month = 11;
      calculated_year--;
    }
  }
  displayResult(calculated_date, calculated_month, calculated_year);
}
function displayResult(bDate, bMonth, bYear) {
  document.getElementById("years").textContent = bYear;
  document.getElementById("months").textContent = bMonth;
  document.getElementById("days").textContent = bDate;
}
function leapChecker(year) {
  if (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) {
    months[1] = 29;
  } else {
    months[1] = 28;
  }
}
