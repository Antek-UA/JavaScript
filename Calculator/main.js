// value type[text]
const anInitialFee = document.getElementById('an-initial-fee'),
      creditTerm = document.getElementById('credit-term');

// value type[range]
const anInitialFeeRange = document.getElementById('an-initial-fee-range'),
      creditTermRange = document.getElementById('credit-term-range');

// final outset results 
const totalAmountOfCredit = document.getElementById('amount-of-credit'),
      totalMonthlyPayment = document.getElementById('monthly-payment');

    //   all range
const inputsRange = document.querySelectorAll('.input-range');

// mapping range + input[text]
const assignValue = () => {
    anInitialFee.value = anInitialFeeRange.value;
    creditTerm.value = creditTermRange.value;
}

for( let input of inputsRange) {
    input.addEventListener('input', () => {
        assignValue();
        calculation(anInitialFee.value, creditTerm.value);
    })
}
assignValue();

const calculation = (anInitialFee = 100000, creditTerm = 1) => {

    const amountOfPrecents = (((priceOfAuto + totalPriceOfConfiguration) - anInitialFee) * currentPrecent) / 100;
    const totalPriceOfCredit = (priceOfAuto+ totalPriceOfConfiguration) - anInitialFee + amountOfPrecents;

    const numberOfMonth = 12 * creditTerm;
    const monthlyPayment = totalPriceOfCredit / numberOfMonth;

    if(totalPriceOfCredit < 0) {
        return false;
    } else {
        totalAmountOfCredit.innerHTML = Math.round(totalPriceOfCredit);
        totalMonthlyPayment.innerHTML = Math.round(monthlyPayment);
    }

}

// Modal window 
const btnOpenConfig = document.getElementById('open-configure'),
      overlay = document.getElementById('overlay'),
      modal = document.getElementById('wrapper-modal'),
      saveConfiguration = document.getElementById('saveConfiguration'),
      cancelConfiguration = document.getElementById('cancelConfiguration');
    
btnOpenConfig.addEventListener('click', () => {
    modal.classList.add('active');
})

const closeModal = () => {
    modal.classList.remove('active');
}

overlay.addEventListener('click', closeModal);
saveConfiguration.addEventListener('click', closeModal);
cancelConfiguration.addEventListener('click', closeModal);

// configuration settings

const cars = document.querySelectorAll('.car'),
      dots = document.querySelectorAll('.dot');

const currentPrecent = 8.7;

let totalPriceOfConfiguration = 0;
const additionalAmount = document.getElementById('additionalAmount');
additionalAmount.innerHTML = totalPriceOfConfiguration;

const priceOfAuto = 700000;
const priceOfAutoElement = document.getElementById('priceOfAuto');
priceOfAutoElement.innerHTML = priceOfAuto;

const pricesOfColors = {
    blue: 0,
    brown: 2000,
    orange: 4000,
    pink: 6000,
    red: 8000
}

let currentPriceOfColor = pricesOfColors.blue;

 const activeColor = color => {
    for(car of cars){
        car.classList.remove('active');
    }
    for(dot of dots) {
        dot.classList.remove('active');
    }

 Array.from(cars).filter(item => {
    return item.dataset.color === color
 }).forEach(item => {
    item.classList.add('active');
 });

 currentPriceOfColor = pricesOfColors[`${color}`];
 checkTotalPriceOfConfiguration();

}

for(dot of dots) {
    dot.addEventListener('click', e => {
        e.target.classList.add('active');
    })
}

const engine = document.getElementById('engine'),
      complectation = document.getElementById('complectation');

const checkTotalPriceOfConfiguration = () => {
    totalPriceOfConfiguration = +(engine.value) + +(complectation.value) + currentPriceOfColor;
    additionalAmount.innerHTML = totalPriceOfConfiguration;
    calculation(anInitialFee.value, creditTerm.value);
}

engine.addEventListener('change', checkTotalPriceOfConfiguration);
complectation.addEventListener('change', checkTotalPriceOfConfiguration);
saveConfiguration.addEventListener('click', checkTotalPriceOfConfiguration);

calculation();