import { useTranslation } from 'react-i18next';
import { MockedProvider } from '@apollo/client/testing';

const mocked = MockedProvider;

const { t } = useTranslation();

export function abc() {
    return;
}