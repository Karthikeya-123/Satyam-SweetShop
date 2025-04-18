const counter=document.getElementById("counter");
const ibutton=document.getElementById("ibutton");
const dbutton=document.getElementById("dbutton");
const total=document.getElementById("total");
let count = 0;
let box = 100; 
ibutton.addEventListener("click", function () {
    count++;
    gift();
});

dbutton.addEventListener("click", function () {
    if (count > 0) {
        count--;
    }
    gift();
});

function gift() {
    counter.innerHTML = count;
    total.innerHTML = count * box;
}

function gift() {
    counter.innerHTML = count;
    total.innerHTML = count * box;
}
document.getElementById("bill_button").addEventListener("click", function () {
    const bill= {
        boxq: count,
        boxt: count * box,
        grandTotal: (count * box)
    };

    localStorage.setItem("bill", JSON.stringify(bill));
    window.location.href = "returnbill.html";
});