
const refs = {
    form: document.querySelector('.form'),
    firstDelayInp: document.querySelector('input[name="delay"]'),
    delayStepInp: document.querySelector('input[name="step"]'),
    amountInp: document.querySelector('input[name="amount"]'),
};

// console.log(refs.delayStepInp);
// console.log(refs.firstDelayInp);
// console.log(refs.amountInp);
// console.log(refs.form);


refs.form.addEventListener('submit', onCreatePromises);

function onCreatePromises(e) {
    e.preventDefault();

    // console.log(refs.delayStepInp.value);
    // console.log(refs.firstDelayInp.value);
    // console.log(refs.amountInp.value);

    
    const amountState = Number(refs.amountInp.value);
    let currentDelay = Number(refs.firstDelayInp.value);
    console.log(currentDelay);
    const delayStep = Number(refs.delayStepInp.value);
    console.log(delayStep);


    for (let i = 1; i <= amountState; i += 1) {
        currentDelay += delayStep;
        
        console.log(i);
        console.log(currentDelay);
        setTimeout(() => {
            
            createPromise(i, currentDelay)
                .then(() => { console.log(`✅ Fulfilled promise ${i} in ${currentDelay}ms`) })
                .catch(() => { console.log(`❌ Rejected promise ${i} in ${currentDelay}ms`) });
        }, currentDelay)
    };
    }

function createPromise(position, delay) {
    const shouldResolve = Math.random() > 0.3;

    return new Promise((resolve, reject) => {


        if (shouldResolve) {
            resolve
                (`✅ Fulfilled promise ${position} in ${delay}ms`);
        }
        reject
            (`❌ Rejected promise ${position} in ${delay}ms`);
    });
}


