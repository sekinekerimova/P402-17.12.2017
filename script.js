// var a1 = Number(prompt("1ci cadirin cekisi"));
// var b1 = Number(prompt("1ci cadirin tutumu"));

// var a2 = Number(prompt("2ci cadirin cekisi"));
// var b2 = Number(prompt("2ci cadirin tutumu"));

// var a3 = Number(prompt("3ci cadirin cekisi"));
// var b3 = Number(prompt("3ci cadirin tutumu"));

// var k = Number(prompt("Toplam adam sayı"))
// var w = Number(prompt("Toplam ceki"));


// if (a1 <= w && b1 >= k) {
//     console.log("1ci cadir");
// } else if (a2 <= w && b2 >= k) {
//     console.log("2ci cadir");
// } else if (a3 <= w && b3 >= k) {
//     console.log("3ci cadir");
// } else if ((a1 + a2) <= w && (b1 + b2) >= k) {
//     console.log("1ci ve 2ci cadir");
// } else if ((a1 + a3) <= w && (b1 + b3) >= k) {
//     console.log("1ci ve 3ci cadir");
// } else if ((a2 + a3) <= w && (b2 + b3) >= k) {
//     console.log("2ci ve 3ci cadir");
// } else if ((a1 + a2 + a3) <= w && (b1 + b2 + b3) >= k) {
//     console.log("1ci ,2ci ve 3ci cadir");
// } else {
//     console.log("Apara bilmez");
// }


/*var toplamMesafe = 9000;
var qacdigiMesafe = 0;
var count = 0;

while (qacdigiMesafe < toplamMesafe) {
    // qacdigiMesafe = qacdigiMesafe + 300;
    qacdigiMesafe += 300;
    count++;
    console.log(qacdigiMesafe);
}

console.log(count);*/


/*var i = 10;
while (i > 0) {
    console.log(i);
    i -= 2;
}*/


// mueyyen intervalda 4e bolunenler 

/*var m = Number(prompt("1ci reqemi girin"));
var n = Number(prompt("2ci reqemi girin"));

var count = 0;

if (n > m) {
    while (m <= n) {
        if (m % 4 == 0) {
            count++;
        }
        m++;
    }

    console.log(count);
} else {
    console.log("duzgun interval girin");
}*/



// Sade ve ya murrekeb eded tapmaq

/*var n = Number(prompt("reqem girin"));
var count = 0;
var i = 2;

while (i < n) {
    if (n % i == 0) {
        count++;
        break;
    }
    i++;
}

if(count==0){
    console.log("reqem sadedir");
}else{
    console.log("reqem murekkebdir");
}*/