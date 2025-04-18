const bill = JSON.parse(localStorage.getItem("bill"));
const body = document.getElementById("body");

if (bill) {
  let total = 0;

  if (bill.jangriq > 0) {
    body.innerHTML += `
      <tr>
        <td>Jangri</td>
        <td>${bill.jangriq}</td>
        <td>${bill.jangrit} Rs</td>
      </tr>
    `;
    total += bill.jangrit;
  }

  if (bill.immurtiq > 0) {
    body.innerHTML += `
      <tr>
        <td>Immutti</td>
        <td>${bill.immurtiq}</td>
        <td>${bill.immurtit} Rs</td>
      </tr>
    `;
    total += bill.immurtit;
  }
  
  if (bill.ladduq > 0) {
    body.innerHTML += `
      <tr>
        <td>Laddu</td>
        <td>${bill.ladduq}</td>
        <td>${bill.laddut} Rs</td>
      </tr>
    `;
    total += bill.laddut;
  }

  if (bill.mysorepakq > 0) {
    body.innerHTML += `
      <tr>
        <td>Mysorepak</td>
        <td>${bill.mysorepakq}</td>
        <td>${bill.mysorepakt} Rs</td>
      </tr>
    `;
    total += bill.mysorepakt;
  }

  if (bill.nuvvulq > 0) {
    body.innerHTML += `
      <tr>
        <td>Nuvvul Laddu</td>
        <td>${bill.nuvvulq}</td>
        <td>${bill.nuvvult} Rs</td>
      </tr>
    `;
    total += bill.nuvvult;
  }

  if (bill.attirasaq > 0) {
    body.innerHTML += `
      <tr>
        <td>Attirasa</td>
        <td>${bill.attirasaq}</td>
        <td>${bill.attirasat} Rs</td>
      </tr>
    `;
    total += bill.attirasat;
  }

  if (bill.sompapidiq > 0) {
    body.innerHTML += `
      <tr>
        <td>Sompapidi</td>
        <td>${bill.sompapidiq}</td>
        <td>${bill.sompapidit} Rs</td>
      </tr>
    `;
    total += bill.sompapidit;
  }

  if (bill.karjikayq > 0) {
    body.innerHTML += `
      <tr>
        <td>karjikay</td>
        <td>${bill.karjikayq}</td>
        <td>${bill.karjikayt} Rs</td>
      </tr>
    `;
    total += bill.karjikayt;
  }

  if (bill.mixtureq > 0) {
    body.innerHTML += `
      <tr>
        <td>Mixture</td>
        <td>${bill.mixtureq}</td>
        <td>${bill.mixturet} Rs</td>
      </tr>
    `;
    total += bill.mixturet;
  }

  if (bill.chipsq > 0) {
    body.innerHTML += `
      <tr>
        <td>Chips</td>
        <td>${bill.chipsq}</td>
        <td>${bill.chipst} Rs</td>
      </tr>
    `;
    total += bill.chipst;
  }

  if (bill.murukuluq > 0) {
    body.innerHTML += `
      <tr>
        <td>Murukulu</td>
        <td>${bill.murukuluq}</td>
        <td>${bill.murukulut} Rs</td>
      </tr>
    `;
    total += bill.murukulut;
  }

  if (bill.pabbillq > 0) {
    body.innerHTML += `
      <tr>
        <td>Pabbillalu</td>
        <td>${bill.pabbillq}</td>
        <td>${bill.pabbillt} Rs</td>
      </tr>
    `;
    total += bill.pabbillt;
  }

  if (bill.chegodiq > 0) {
    body.innerHTML += `
      <tr>
        <td>Chegodi</td>
        <td>${bill.chegodiq}</td>
        <td>${bill.chegodit} Rs</td>
      </tr>
    `;
    total += bill.chegodit;
  }

  if (bill.sannakaraq > 0) {
    body.innerHTML += `
      <tr>
        <td>Sannakara</td>
        <td>${bill.sannakaraq}</td>
        <td>${bill.sannakarat} Rs</td>
      </tr>
    `;
    total += bill.sannakarat;
  }

  if (bill.atukuluq > 0) {
    body.innerHTML += `
      <tr>
        <td>Atukulu</td>
        <td>${bill.atukuluq}</td>
        <td>${bill.atukulut} Rs</td>
      </tr>
    `;
    total += bill.atukulut;
  }

  if (bill.wamq > 0) {
    body.innerHTML += `
      <tr>
        <td>Wam Kara</td>
        <td>${bill.wamq}</td>
        <td>${bill.wamt} Rs</td>
      </tr>
    `;
    total += bill.wamt;
  }

  document.getElementById("total").innerText = total + " Rs";
  // Optional: clear storage after loading
  // localStorage.removeItem("billData");
} else {
  document.body.innerHTML = "<h1>No Data Available</h1>";
}

function placeOrder(){
  const name = document.getElementById("name").value;
  const mobile=document.getElementById("mobile").value;
  const adress=document.getElementById("adress").value;
  if(name === "" || mobile === "" || adress === ""){
    alert("plese fill the Details")
  }
  else{
    alert("your Order has Been Placed Succesfully...!!")
  }
}