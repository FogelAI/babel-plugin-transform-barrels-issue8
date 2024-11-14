// Learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

jest.mock('react-i18next', () => ({
    ...jest.requireActual('react-i18next'),
    useTranslation: (domain?: string) => {
      return {
        t: (str: string) => str,
        i18n: {
          changeLanguage: () => new Promise(() => {}),
        },
      };
    },
}));
