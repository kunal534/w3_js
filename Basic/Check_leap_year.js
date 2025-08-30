const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let leapyear = (year) => {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
};

function get_day(day_name) {
  const days = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };
  return days[day_name.toLowerCase()];
}

readline.question("Enter year: ", (q) => {
  console.log(leapyear(parseInt(q)) ? "Yes" : "No");

  readline.question(
    "Enter year range for which we need to check the first occurrence year of a date, a month, and a day\n Year1:",
    (y1) => {
      readline.question("Year2: ", (y2) => {
          readline.question("Date: ", (d) => {
            readline.question("Month (1-12): ", (m) => {
              readline.question("Day (e.g. Monday): ", (day) => {
                const year1 = parseInt(y1);
                const year2 = parseInt(y2);
                const date = parseInt(d);
                const month = parseInt(m) - 1; // zero-based month
                const target_day = get_day(day);

                if (target_day === undefined) {
                  console.log("Undefined day");
                  readline.close();
                  return;
                }

                let found = false;
                for (let curr = year1; curr <= year2; curr++) {
                  let dt = new Date(curr, month, date);
                  if (dt.getDay() === target_day) {
                    console.log(`The year for this specific date is ${curr}`);
                    found = true;
                    break;
                  }
                }

                if (!found) {
                  console.log("Such a date doesn't exist in this range");
                }
                readline.close();
              });
            });
          });
      });
    }
  );
});
