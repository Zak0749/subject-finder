let data = [
  ["maths", "english"],
  ["english", "maths"],
  ["maths"],
  ["maths"],
  ["maths"],
];

let subjects = [...new Set(data.flat())];
let selects = [];

const workOutTable = () => {
  document.getElementById("table").innerHTML = `<tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
        </tr>`;
  let values = selects.map((v) => v.value);

  if (values.includes("")) return;

  let found = false;

  data[0].forEach((column_one) => {
    data[1].forEach((column_two) => {
      data[2].forEach((column_three) => {
        data[3].forEach((column_four) => {
          data[4].forEach((column_five) => {
            if (
              [column_one, column_two, column_three, column_four, column_five]
                .sort()
                .join("") === values.sort().join("")
            ) {
              document.getElementById("table").innerHTML += `<tr>
                <td>${column_one}</td>
                <td>${column_two}</td>
                <td>${column_three}</td>
                <td>${column_four}</td>
                <td>${column_five}</td>
              </tr>`;

              found = true;
            }
          });
        });
      });
    });
  });

  if (found == false) {
    document.getElementById(
      "table"
    ).innerHTML += `<tr><td>You cant take those together</td></tr>`;
  }
};

window.addEventListener("load", () => {
  let inputBox = document.getElementById("input-box");

  for (let i = 0; i < 5; i++) {
    let select = document.createElement("select");
    select.innerHTML = `<option value="">Select Subject</option>`;
    subjects.forEach((subject) => {
      select.innerHTML += `<option id="subject-select" value="${subject}">${subject}</option>`;
    });
    select.addEventListener("change", workOutTable);

    inputBox.appendChild(select);

    selects.push(select);
  }
});

// console.log(subjects);

// let items = document.getElementsByClassName("subject-input");
// console.log(items.length);
// for (let i = 0; i < 5; i++) {
//   const item = items.item(i);
//   console.log(item);
//   for (subject in subjects) {
//     let option = document.createElement("option");
//     option.innerText = subject;
//     item.appendChild(option);
//   }
// }
