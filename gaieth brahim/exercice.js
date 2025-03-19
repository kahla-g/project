function charger() {
    let t=["m1.jpg","m2.jpg","m3.jpg","m4.jpg"]
    let x=Math.trunc(Math.random()*4)
    document.getElementById("Im").src=t[x] 
    document.getElementById("tab").hidden=true
}
function Alpha(ch) {
    tr=true
    if (ch=="") {
        tr=false
    }
    else{
        ch=ch.toUpperCase()
        for (let i = 0; i <ch.length ; i++) {
            if (!((ch[i]>="A" && ch[i]<="Z") || ch[i]==" ")) {
                tr=false
            }
        }
    }
    return tr & ch.indexOf("  ")==-1
}
function VerifierCacher() {
    a=document.getElementById("NP").value
    if (Alpha(a)==true) {
        document.getElementById("NP").style.backgroundColor="red"
        document.getElementById("tab").hidden=false
    }
    else{
        document.getElementById("NP").style.backgroundColor="blue"
        a=""
    } 
}
function premier(k) {
    if (k < 2) return false;
    for (let i = 2; i <= Math.sqrt(k); i++) {
        if (k % i === 0) return false;
    }
    return true;
}
function SuperPremier(y) {
    while (y > 0) {
        if (!premier(y)) return false;
        y = Math.trunc(y / 10);
    }
    return true;
}
function VerifierSuperPremier() {
    x=document.getElementById("nb").value
    r1=document.getElementById("r5").checked
    r2=document.getElementById("r6").checked
    if (r1==false && r2==false) {
        alert("cocher le nombre de chiffres a saisir ")
    }
    else if(r1=true && x.length!=5){
        document.getElementById("res").innerHTML="ecrire un nombre composee de k chiffres "
        document.getElementById("res").style.color="red"
    }
    else if(r2==true && x.length!=6){
        document.getElementById("res").innerHTML="ecrire un nombre composee de k chiffres "
        document.getElementById("res").style.color="red"
    }
    else{
        if (SuperPremier(x)==true) {
            document.getElementById("res").innerHTML="est un nombre premier"
            document.getElementById("res").style.fontSize="20px"
        }
        else{
            document.getElementById("res").innerHTML="n'est pas un nombre premier "
            document.getElementById("res").style.fontSize="20px"
        }
    }
}