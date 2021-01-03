function getScrollbarWidth() {
  const outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.msOverflowStyle = 'scrollbar';
  document.body.appendChild(outer);
  const inner = document.createElement('div');
  outer.appendChild(inner);
  const scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  outer.parentNode.removeChild(outer);
  return scrollbarWidth;
}

function getPadding(emoji, fontSize) {
  const element = document.createElement('div');

  element.innerHTML = emoji;
  element.style.fontSize = `${fontSize}px`;
  element.style.position = 'absolute';
  element.style.opacity = 0;

  document.body.appendChild(element);

  const padding = {
    x: element.offsetWidth,
    y: element.offsetHeight,
  };

  document.body.removeChild(element);

  return padding;
}

function addFadeAnimation() {
  const style = document.createElement('style');
  const keyFrames =
    '@keyframes emoji-sprinkle-fade { 0%,100% { opacity: 0 } 50% { opacity: 1 } }';
  style.innerHTML = keyFrames;
  document.getElementsByTagName('head')[0].appendChild(style);
  window.fadeAnimationSet = true;
}

function sprinkleEmojis({
  emoji = '🐢',
  count = 100,
  fade = 2,
  fontSize = 42,
} = {}) {
  if (!window.fadeAnimationSet) {
    addFadeAnimation();
  }

  const scrollbarWidth = getScrollbarWidth();
  const padding = getPadding(emoji, fontSize);

  const xPositions = Array.from({ length: count }, () =>
    Math.floor(Math.random() * (window.innerWidth - padding.x - scrollbarWidth))
  );
  const yPositions = Array.from({ length: count }, () =>
    Math.floor(Math.random() * (window.innerHeight - padding.y))
  );
  const fadeValues = Array.from({ length: count }, () => Math.random() * fade);

  const container = document.createElement('div');

  container.style.position = 'absolute';
  container.style.left = '0px';
  container.style.top = `${window.scrollY}px`;
  container.classList.add('emoji-sprinkle-container');

  document.body.appendChild(container);

  xPositions.forEach((x, index) => {
    const y = yPositions[index];
    const fadeValue = fadeValues[index];

    const element = document.createElement('div');

    element.innerHTML = emoji;
    element.style.fontSize = `${fontSize}px`;
    element.style.position = 'absolute';
    element.style.left = `${x}px`;
    element.style.top = `${y}px`;
    element.style.animation = `emoji-sprinkle-fade ${fadeValue}s forwards`;
    element.classList.add('emoji-sprinkle');

    container.appendChild(element);
  });

  setTimeout(() => document.body.removeChild(container), fade * 1000);
}

export { sprinkleEmojis };
