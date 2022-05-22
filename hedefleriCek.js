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
                row.setAttribute("id", i)
                let column = document.createElement("div");
                column.setAttribute("class", "Column")
                row.appendChild(column)
                var hedefDiv = document.createElement("div");
                hedefDiv.setAttribute("class", "hedef");
                var container = document.getElementById("listele");
                container.appendChild(row)
                var baslik = "<h5>" + res[i]['header'] + "</h5><hr>";
                var aciklama = res[i]['text'];
                var isaret = document.createElement("input");
                isaret.setAttribute("type", "checkbox");
                isaret.setAttribute("value", res[i]['id'])
                hedefDiv.appendChild(isaret);
                hedefDiv.innerHTML += baslik + aciklama
                if (res[i]['isDone'] == 0) {
                    hedefDiv.style.backgroundColor = "red";
                }
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
                var isaret = document.createElement("input");
                isaret.setAttribute("type", "checkbox");
                isaret.setAttribute("value", res[i]['id'])
                hedefDiv.appendChild(isaret);
                hedefDiv.innerHTML += baslik + aciklama
                if (res[i]['isDone'] == 0) {
                    hedefDiv.style.backgroundColor = "red";
                }
                column.appendChild(hedefDiv)
            }



        }
    }
    else {
        console.log("Henüz hedef oluşturulmadı")
    }
})