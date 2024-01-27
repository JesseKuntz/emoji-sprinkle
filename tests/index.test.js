import { sprinkleEmojis } from '../index';

describe('sprinkleEmojis', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runAllTimers();
  });

  describe('if the fade animation styles have not been set', () => {
    test('adds the fade animation styles', () => {
      sprinkleEmojis();

      const element = document.getElementsByTagName('style');

      expect(element.item(0).innerHTML).toBe(
        '@keyframes emoji-sprinkle-fade { 0%,100% { opacity: 0 } 50% { opacity: 1 } }'
      );

      expect(1).toBe(1);
    });
  });

  describe('if the fade animation styles have already been set', () => {
    beforeEach(() => {
      sprinkleEmojis();
    });

    test('does not add them again', () => {
      sprinkleEmojis();

      const element = document.getElementsByTagName('style');

      expect(element.length).toBe(1);
    });
  });

  describe('when no values are passed in', () => {
    beforeEach(() => sprinkleEmojis());

    test('🧁 emoji is used', () => {
      const emoji = document.querySelector('.emoji-sprinkle');

      expect(emoji.innerHTML).toBe('🧁');
    });

    test('adds 100 emojis to the DOM', () => {
      const emojis = document.querySelectorAll('.emoji-sprinkle');

      expect(emojis.length).toBe(100);
    });

    test('all fade values are between 0 and 2 seconds', () => {
      const emojis = Array.from(document.querySelectorAll('.emoji-sprinkle'));

      emojis.forEach(emoji => {
        const fadeDuration = parseInt(emoji.style.animation.split(' ')[1]);
        expect(fadeDuration).toBeGreaterThanOrEqual(0);
        expect(fadeDuration).toBeLessThan(2);
      });
    });

    test('the font size is 42px', () => {
      const emoji = document.querySelector('.emoji-sprinkle');

      expect(emoji.style.fontSize).toBe('42px');
    });
  });

  describe('when custom values are passed in', () => {
    beforeEach(() =>
      sprinkleEmojis({ emoji: '🎉', count: 50, fade: 10, fontSize: 10 })
    );

    test('custom emoji is used', () => {
      const emoji = document.querySelector('.emoji-sprinkle');

      expect(emoji.innerHTML).toBe('🎉');
    });

    test('adds specified amount of emojis to the DOM', () => {
      const emojis = document.querySelectorAll('.emoji-sprinkle');

      expect(emojis.length).toBe(50);
    });

    test('all fade values are between 0 and specified amount of seconds', () => {
      const emojis = Array.from(document.querySelectorAll('.emoji-sprinkle'));

      emojis.forEach(emoji => {
        const fadeDuration = parseInt(emoji.style.animation.split(' ')[1]);
        expect(fadeDuration).toBeGreaterThanOrEqual(0);
        expect(fadeDuration).toBeLessThan(10);
      });
    });

    test('the font size is the specified amount', () => {
      const emoji = document.querySelector('.emoji-sprinkle');

      expect(emoji.style.fontSize).toBe('10px');
    });
  });

  describe('when the fade time is completed', () => {
    test('removes the container from the DOM', () => {
      sprinkleEmojis();

      const container = document.querySelector('.emoji-sprinkle-container');

      expect(container).toBeTruthy();

      jest.runAllTimers();

      expect(document.querySelector('.emoji-sprinkle-container')).toBe(null);
    });
  });
});
