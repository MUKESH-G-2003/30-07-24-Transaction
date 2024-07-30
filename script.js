

function AddTransaction() {
    const type = document.getElementById("choose").value;
    const name = document.getElementById("name").value;
    const amount = document.getElementById("amount").value;
    const table = document.getElementById("tableBody");
    // alert(`${type}, ${name}, ${amount}`);
    
    let row = document.createElement("tr");
    let but = document.createElement("button");
    let text = document.createTextNode("Delete");
    but.appendChild(text);

    let c1 = document.createElement("td");
    let c2 = document.createElement("td");
    let c3 = document.createElement("td");
    let c4 = document.createElement("td");

    c1.innerText = type;
    c2.innerText = name;
    c3.innerText = amount;
    // c4.innerText = name;

    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    row.appendChild(but);

    table.appendChild(row)

} 

