fetch("data.json")
    .then(response => response.json())
    .then(json => {
        let subjects = [... new Set(json.flat())]

        print("one")
        document.querySelectorAll('.select-input').forEach(function(button) {
            // Now do something with my button
        });
        document.getElementsByClassName("select-input").forEach(element => {
            print("two")
            for (subject in subjects) {
                console.log(subjects)
                let option = document.createElement("option");
                option.innerText = subject
            }
        });
    });

//     <div id="subject-selects">
