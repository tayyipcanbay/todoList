var baglanti = require('./baglanti')
var container = document.getElementById("listele");
baglanti.con.query("SELECT * FROM `targetList`", (err, res) => {
    if (err) throw err;
    if (res.length > 0) {
        console.log(res)
        for (i = 0; i < res.length; i++) {
            if (i % 2 == 0) {
                let row = document.createElement("div")
                row.setAttribute("class", "Row")
                let column = document.createElement("div");
                column.setAttribute("class", "Column")
                row.appendChild(column)
                var hedefDiv = document.createElement("div");
                hedefDiv.setAttribute("class", "hedef");
                var container = document.getElementById("listele");
                container.appendChild(row)
                var baslik = "<h5>" + res[i]['header'] + "</h5><hr>";
                var aciklama = res[i]['text'];
                hedefDiv.innerHTML += baslik + aciklama
                column.appendChild(hedefDiv)
            }
            else {
                var row = document.getElementById(i - 1)
                var column = document.createElement("div");
                column.setAttribute("class", "Column")
                row.appendChild(column)
                var hedefDiv = document.createElement("div");
                hedefDiv.setAttribute("class", "hedef");
                hedefDiv.setAttribute("id", res[i]['id'])
                var baslik = "<h5>" + res[i]['header'] + "</h5><hr>";
                var aciklama = res[i]['text'];
                hedefDiv.innerHTML += baslik + aciklama
                column.appendChild(hedefDiv)
            }



        }
    }
    else {
        console.log("Henüz hedef oluşturulmadı")
    }
})