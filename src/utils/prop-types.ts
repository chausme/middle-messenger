import { CallbackType } from '~/src/utils/event-bus';
import InputWLabel from '~/src/components/input-w-label';
import Button from '~/src/components/button';

export type FormProps = {
    id: string;
    [key: `input_${string}`]: InputWLabel;
    [key: `button_${string}`]: Button;
    styles?: string[];
    settings?: { withInternalID?: boolean };
    events?: Record<string, CallbackType>;
};

export type InputProps = {
    title: string;
    type: string;
    id: string;
    inputName: string;
    styles?: string[];
    settings?: { withInternalID?: boolean; disabled: boolean };
    events?: Record<string, CallbackType>;
};

export type ButtonProps = {
    title: string;
    id: string;
    styles?: string[];
    link?: string;
    settings?: { withInternalID?: boolean };
    events?: Record<string, CallbackType>;
};
