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

    let count = document.getElementById("line-count").value.trim();
    count = parseInt(count);

    if (isNaN(count) || count <= 0) {
    alert("Invalid number — please reload and enter a valid value.");
    return;
    }


    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "";

    const list = document.createElement("ol");

    let normalWord = document.getElementById("default_word").value.trim();

    const rules = [
        { divisor: document.getElementById("divisor1").value.trim(), word: document.getElementById("word1").value.trim() + " " },
        { divisor: document.getElementById("divisor2").value.trim(), word: document.getElementById("word2").value.trim() + " " },
        { divisor: document.getElementById("divisor3").value.trim(), word: document.getElementById("word3").value.trim() + " " }
    ];

    function divCheck(number, divisor) {
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
            if (divCheck(i, rule.divisor)) {
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
