document.getElementById("nameForm").addEventListener("submit", function (event) { 
    event.preventDefault();

    let first = document.getElementById("first_name").value.trim();
    let middle = document.getElementById("middle_initial").value.trim();
    let last = document.getElementById("last_name").value.trim();

    let fullName = first;
    if (middle !== "") {
        fullName += " " + middle + ".";
    }
    if (last !== "") {
        fullName += " " + last;
    }

    let greeting = document.getElementById("greeting");
    greeting.textContent = `Welcome to Jordan's Portfolio, ${fullName}!`;


    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    const list = document.createElement("ol");

    const normalWord = "Jolly Molly";

    const word3 = "OOOH";
    const word5 = "AAAH";

    for (let i = 1; i <= 140; i++) {
        let li = document.createElement("li");

        let outputText = "";

        if (i % 3 === 0 && i % 5 === 0) {
            outputText = `${word3} ${word5}`;
        }
        else if (i % 3 === 0) {
            outputText = word3;
        }
        else if (i % 5 === 0) {
            outputText = word5;
        }
        else {
            outputText = normalWord;
        }

        li.textContent = outputText;
        list.appendChild(li);
    }

    outputDiv.appendChild(list);
});
