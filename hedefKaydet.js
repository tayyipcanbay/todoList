var baglanti = require('./baglanti');
function hedefKaydet() {
    let baslik = document.getElementById("baslik").value;
    let aciklama = document.getElementById("editor").innerHTML;
    let sonTarih = document.getElementById("sonTarih").value;
    baglanti.con.query("INSERT INTO `targetlist` (`id`, `header`, `text`, `creatingTime`, `lastTime`, `isDone`) VALUES (NULL, '" + baslik + "', '" + aciklama + "', current_timestamp(), '" + sonTarih + "', '0');", (err) => {
        if (err) throw err;
        console.log("Hedef oluşturuldu")
    })
}