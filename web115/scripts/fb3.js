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

    let count = prompt(`How high do you want to count, ${first}?`);
    count = parseInt(count);

    if (isNaN(count) || count <= 0) {
    alert("Invalid number — please reload and enter a valid value.");
    return;
    }


    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    const list = document.createElement("ol");

    const normalWord = "Jolly Molly";

    const rules = [
        { divisor: 3, word: "OOOH " },
        { divisor: 5, word: "AAAH " },
        { divisor: 7, word: "BANG! " }
    ];

    function checkDivision(number, divisor) {
        return number % divisor === 0;
    }

    for (let i = 1; i <= count; i++) {
        let li = document.createElement("li");

        let outputText = "";

        if (i % 2 === 0) {
            outputText += "Even - " ;
        } else {
            outputText += "Odd - " ;
        }

        rules.forEach((rule) => {
            if (checkDivision(i, rule.divisor)) {
                outputText += rule.word;
            }
        });

        if (outputText === "Even - " || outputText === "Odd - ") {
            outputText += normalWord;
        }

        li.textContent = outputText;
        list.appendChild(li);
    }

    outputDiv.appendChild(list);
});
