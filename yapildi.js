var baglanti = require('./baglanti')
function isaretle(arr) {
    for (i = 0; i < arr.length; i++) {
        baglanti.con.query("UPDATE targetlist SET isDone=1 WHERE id=" + arr[i] + ";")
    }
    location.reload();
}