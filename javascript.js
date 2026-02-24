function calculation() {
let current = Number(document.getElementById("current").value);
console.log(current);
let currenttotal = Number(document.getElementById("currenttotal").value);
console.log(currenttotal)
let remain = Number(document.getElementById("remain").value);
const outcome = document.getElementById("outcome");

    let presentattandance = Number((current / currenttotal) * 100).toFixed(2);
; 

    let fortarget = (0.80 * currenttotal - current) / 0.2;

    let prebunk = currenttotal - current;
    let lactureremain = 0.8 * currenttotal + 0.8 * remain - current;
    let bunk = Number(remain - lactureremain).toFixed(0);

    if(presentattandance >= 90)
        {
        document.getElementById("output4").innerText = "Itni attendance ka kya karega 🙂";
        document.getElementById("output2").innerText = `congratulations you already have more then 80%`;
        }

    else if(presentattandance >= 85)
        {
            document.getElementById("output4").innerText = `You are safe 👏🏻`;
            document.getElementById("output2").innerText = `Congratulations you already have more than 80%`;

        }

    else if(presentattandance >= 80)
        {
            document.getElementById("output4").innerText = `You are on border, be safe 🥲`;
        }

    else if(presentattandance >= 75)
        {
            document.getElementById("output4").innerText = `Be patient jaldi ho jayega 80% 😀`;
            document.getElementById("output2").innerText = `To achive 80% you should go ${fortarget} classes regularly`;
        }

    else if(presentattandance >= 70)
        {
            document.getElementById("output4").innerText = `Risky he but himat mat harna 💪🏻`;
            document.getElementById("output2").innerText = `To achive 80% you should go ${fortarget} classes regularley`;
        }

    else if(presentattandance >= 60)
        {
            document.getElementById("output4").innerText = `Jyada risk he(medical banva lena) 😭`;
            document.getElementById("output2").innerText = `To achive 80% you should go ${fortarget} classes regularley`;
        }

    else if(presentattandance >= 0 || presentattandance<60)
        {
            document.getElementById("output4").innerText = `Ab kuch nay hoga medical certificate banva le 👍🏻`;
            document.getElementById("output2").innerText = `To achive 80% you should go ${fortarget} classes regularley`;
        }

    document.getElementById("output1").innerText = `Your current attendance is = ${presentattandance}`;
    document.getElementById("output3").innerText = `To get 80% until samester end you can bunk ${bunk} out of ${remain}`;

    if(bunk<0){
        document.getElementById("output3").innerText = `You can't bunk any more classes`;
    }
}