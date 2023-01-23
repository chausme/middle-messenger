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

export type ChatProps = {
    title: string;
    avatar?: string;
    lastMessage?: string;
    datetime: string;
    unread?: number;
    lastMessageImage?: boolean;
    own?: boolean;
};

export type AvatarProps = {
    url: string;
    size?: 'sm' | 'md' | 'lg';
    styles?: string[];
};
