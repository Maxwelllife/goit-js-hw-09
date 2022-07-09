import { Notify } from 'notiflix/build/notiflix-notify-aio';
const form = document.querySelector('form');
form.addEventListener('submit', onSubmitForm);

function onSubmitForm(event) {
  event.preventDefault();
  const {
    elements: { delay, step, amount },
  } = event.currentTarget;
  // console.log(
  //   `First delay: ${delay.value}, Delay step: ${step.value}, Amount: ${amount.value}`
  // );
  let delayStep = Number(delay.value);

  for (let i = 0; i < amount.value; i += 1) {
    delayStep = Number(delay.value) + i * Number(step.value);

    createPromise(i + 1, delayStep)
      .then(({ position, delay }) => {
        Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })

      .catch(({ position, delay }) => {
        Notify.failure(` Fulfilled promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
