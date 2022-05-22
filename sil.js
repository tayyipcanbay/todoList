var baglanti = require('./baglanti')
function sil(arr) {
    for (i = 0; i < arr.length; i++) {
        baglanti.con.query("DELETE FROM `targetlist` WHERE `targetlist`.`id` = " + arr[i])
    }
    location.reload();
} 