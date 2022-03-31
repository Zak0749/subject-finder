let data = [
  [
    "Art",
    "Biology",
    "English",
    "Geography",
    "Human Biology",
    "Sports & Recreation",
    "Politics",
  ],
  [
    "Art",
    "Business Management",
    "Chemistry",
    "Engineering Science",
    "Mathematics",
    "Photography",
    "Religious, Moral & Philosophical Studies",
  ],
  [
    "Administration & IT",
    "English",
    "French",
    "History",
    "Music",
    "PE",
    "Physics",
  ],
  [
    "Chemistry",
    "Geography",
    "Graphic Communication",
    "History",
    "Mathematics",
    "Travel & Tourism",
  ],
  [
    "Biology",
    "Business Management",
    "Computing Science",
    "Design & Manufacture",
    "Modern Studies",
    "Music",
    "PE",
  ],
];

let subjects = [...new Set(data.flat())].sort();
let selects = [];

const closeness = (columns, values) => {
  const arr = [
    columns.includes(values[0]),
    columns.includes(values[1]),
    columns.includes(values[2]),
    columns.includes(values[3]),
    columns.includes(values[4]),
  ];

  return arr.filter((v) => v).length;
};

const workOutTable = () => {
  document.getElementById("table").innerHTML = `<tr>
            <th>Column A</th>
            <th>Column B</th>
            <th>Column C</th>
            <th>Column D</th>
            <th>Column E</th>
        </tr>`;
  let values = selects.map((v) => v.value);

  if (values.includes("")) return;

  let found = false;
  let close = [];

  data[0].forEach((column_one) => {
    data[1].forEach((column_two) => {
      data[2].forEach((column_three) => {
        data[3].forEach((column_four) => {
          data[4].forEach((column_five) => {
            const c = closeness(
              [column_one, column_two, column_three, column_four, column_five],
              values
            );
            if (c == 5) {
              document.getElementById("table").innerHTML += `<tr>
                <td>${column_one}</td>
                <td>${column_two}</td>
                <td>${column_three}</td>
                <td>${column_four}</td>
                <td>${column_five}</td>
              </tr>`;

              found = true;
            } else if (c == 4) {
              close.push([
                column_one,
                column_two,
                column_three,
                column_four,
                column_five,
              ]);
            }
          });
        });
      });
    });
  });

  if (found == false) {
    document.getElementById("message").innerHTML =
      "You cant take those together unfortunately here are some partial matches";

    unique = close.reduce((acc, c) => {
      c.forEach((v, i) => {
        if (!values.includes(v)) {
          c[i] = "";
        }
      });

      return [...new Set([...acc, c].map((v) => v.join("|")))].map((v) =>
        v.split("|")
      );
    }, []);

    console.log(unique);

    unique.forEach((c) => {
      document.getElementById("table").innerHTML += `<tr>
                  <td>${c[0]}</td>
                  <td>${c[1]}</td>
                  <td>${c[2]}</td>
                  <td>${c[3]}</td>
                  <td>${c[4]}</td>
                </tr>`;
    });
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
