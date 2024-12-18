// Fungsi untuk mengirim Email
function sendEmail() {
  // membuat variabel untuk menampung data nya
  let subject = document.getElementById("subject").value;
  let message = document.getElementById("message").value;

  //   membuat variabel sebagai email penerimanya
  let emailReceiver = "awafpg@gmail.com";

  //   createElement: method untuk membuat elemen/tag html baru
  let a = document.createElement("a");
  // format pengiriman email
  a.href = `mailto:${emailReceiver}?subject=${subject}&body=${message}`;
  //  buka link di tab baru
  a.target = "_blank";
  a.click(); // trigger fungsi klik pada elemen tag <a></a>
}
