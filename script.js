const curr1 = document.getElementById(`currOne`);
const curr2 = document.getElementById(`currTwo`);
const swap = document.getElementById(`swap`);
const rate = document.getElementById(`rate`);
const amount1 = document.getElementById(`firstAmount`);
const amount2 = document.getElementById(`secondAmount`);

// console.dir(swap);
// console.log(curr1);
// console.log(curr2);
console.dir(rate);

// JsonDemo();
function JsonDemo(){
    fetch(`Items.json`)
    .then(item=> item.json())
    .then(dAtA => (swap.innerText=dAtA[0].Name));
}

function calculate(){
    // console.log(`Calculating`);
    const Currency1=curr1.value;
    const Currency2=curr2.value;
    fetch(`https://open.exchangerate-api.com/v6/latest/${Currency1}`)
    .then(res => res.json())
    .then(data => {
        // console.log(data);
        const rateCurr = data.rates[Currency2];
        rate.innerText=`1 ${Currency1} = ${rateCurr} ${Currency2}`;
        const totalRate= amount1.value*rateCurr;
        amount2.value=totalRate;
    })

}

// EvenLIsteners

curr1.addEventListener(`change`,calculate);
curr2.addEventListener(`change`,calculate);
amount1.addEventListener(`input`,calculate);
amount2.addEventListener(`input`,calculate);


swap.addEventListener(`click`, e=>{
    e.preventDefault();
    // console.log(`///////////////`);
    // curr1.id=`currTwo`;
    // curr2.id=`currOne`;
    const temp = curr1.value;
    curr1.value=curr2.value;
    curr2.value=temp;
    calculate();

})
// console.log(curr1);
// console.log(curr2);
calculate();