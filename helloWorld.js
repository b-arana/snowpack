import confetti from 'canvas-confetti';

export const hello = () => {
  const el = document.getElementById('title');

  setTimeout(() => {
    const saludo = el.innerHTML = `<span>Bienvenido !!!!</span>`
    return saludo;
  }, 1000);

}

confetti.create(document.getElementById('canvas'), {
  resize: true,
  useWorker: true,
 })({ particleCount: 200, spread: 200 });