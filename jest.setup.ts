// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

jest.mock('next-i18next', () => ({
  ...jest.requireActual('next-i18next'),
  useTranslation: () => ({
    t: (key: string, args: unknown) => {
      if (args != null) {
        const keys = Object.keys(args);

        if (keys.length >= 1 && keys[0] !== 'ns') {
          return `${key} - ${JSON.stringify(args)}`;
        }
      }

      return key;
    },
    i18n: {
      language: 'en-US',
    },
  }),
}));