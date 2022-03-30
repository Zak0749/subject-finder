fetch("data.json")
    .then(response => response.json())
    .then(json => {
        let subjects = [... new Set(json.flat())]

        print("one")
        document.getElementById("subject-selects").children.forEach(element => {
            print("two")
            for (subject in subjects) {
                console.log(subjects)
                let option = document.createElement("option");
                option.innerText = subject
            }
        });
    });

//     <div id="subject-selects">
