fetch("data.json")
    .then(response => response.json())
    .then(json => {
        let subjects = [... new Set(json.flat())]

        console.log("one")
        document.querySelectorAll('.select-input').forEach((item) => {
            print("two")
            subjects.forEach((subject) => {
                console.log(subject)
                let option = document.createElement("option");
                option.innerText = subject
                item.appendChild(option)
            })
        });
    });
