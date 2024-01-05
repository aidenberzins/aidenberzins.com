function init() {
  const canvas = document.getElementById('canvas')! as HTMLCanvasElement;
  const ctx = canvas.getContext('2d')!;

  canvas.width = 64 * 16;
  canvas.height = 64 * 9;
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);


}

init();
