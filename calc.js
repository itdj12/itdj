const bossstat = {
    hell: {
        def: 6540,
        res: 0,
        dongsukres: 2350,
        dongsukmindmg: 0
    }
}

function exec(num) {
    target = event.target.parentElement.parentElement;

    let boss;
    if (document.querySelector('select#boss').value == 'custom')
        boss = {
            def: document.querySelector('input#bossdef').value * 1,
            res: document.querySelector('input#bossres').value * 1,
            dongsukres: document.querySelector('input#bossdongsukres').value * 1,
        };
    else
        boss = bossstat[document.querySelector('select#boss').value];
    let atk = target.querySelector('input#atk').value / 700 + 1;
    let add = target.querySelector('input#eatk').value / 700 + 1;
    let alr = target.querySelector('input#criatk').value / 100 + 1.5;
    let bal = target.querySelector('input#batk').value / 100 + 1;
    let cri = target.querySelector('input#cri').value * 1;
    let dongsuk = target.querySelector('input#nmatk').value / 100 + 1;
    let skatk = target.querySelector('input#skatk').value / 100 + 1;
    let epen = target.querySelector('input#epen').value - boss.dongsukres+4000;
    var epen2 = epen / 4000;
    let pen = target.querySelector('input#pen').value * 1;
    let eam = target.querySelector('input#eam').value * 1;
    let dmgam = target.querySelector('input#dmgam').value * 1;
    let stam = target.querySelector('input#stam').value * 1;
    let eatk1 = target.querySelector('input#eatk1').value * 1;
    let msick = target.querySelector('input#msick').value * 1;
    let mesick = target.querySelector('input#mesick').value * 1;
    let watk = target.querySelector('input#watk').value * 1;
    let skpatk = target.querySelector('input#skpatk').value * 1;
    let skratk = target.querySelector('input#skratk').value * 1;

    var wattk = watk * (1 + skpatk / 100);
    var skrratk = wattk + skratk;
    
    var re0 = atk * add * alr * bal * cri * dongsuk * skatk * epen2;
    var re1 = re0 * (1 + eam / 100);
    var re2 = re1 * (1 + dmgam / 100);
    var re3 = re2 * (1 + stam / 100);
    var re4 = re3 * (1 + eatk1 / 100);
    var re5 = re4 * (1 + msick / 100);
    var re6 = re5 * (1 + mesick / 100);
    var re6 = re5 * (1 + mesick / 100);
    var re6 = re5 * (1 + mesick / 100);
    var re7 = re6 * skrratk;
    var xre = re0 * skrratk;
    console.log(re7)

    document.querySelector("#nocritdmg").value = xre.toFixed(0);
    document.querySelector("#critdmg").value = re7.toFixed(0);

    document.querySelectorAll("#atk")[1].value = atk.toFixed(2);
    document.querySelectorAll("#eatk")[1].value = add.toFixed(2);
    document.querySelectorAll("#criatk")[1].value = alr.toFixed(2);
    document.querySelectorAll("#batk")[1].value = bal.toFixed(2);
    document.querySelectorAll("#cri")[1].value = cri.toFixed(2);
    document.querySelectorAll("#nmatk")[1].value = dongsuk.toFixed(2);
    document.querySelectorAll("#skatk")[1].value = skatk.toFixed(2);
    document.querySelectorAll("#epen")[1].value = epen2.toFixed(2);

    document.querySelectorAll("#pen")[1].value = '계산X'
    document.querySelectorAll("#eam")[1].value = '계산X'
    document.querySelectorAll("#dmgam")[1].value = '계산X'
    document.querySelectorAll("#stam")[1].value = '계산X'
    document.querySelectorAll("#eatk1")[1].value = '계산X'
    document.querySelectorAll("#msick")[1].value = '계산X'
    document.querySelectorAll("#mesick")[1].value = '계산X'
}
