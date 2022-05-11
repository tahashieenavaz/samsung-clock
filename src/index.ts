const $ = (s: string) => document.querySelector(s) as HTMLElement | null;

setInterval(() => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  $('.hourHand')?.style.setProperty(
    '--rotate',
    `${((hours % 12) + minutes / 60) * 30}deg`
  );
  $('.minuteHand')?.style.setProperty(
    '--rotate',
    `${(minutes + seconds / 60) * 6}deg`
  );
}, 1000);
