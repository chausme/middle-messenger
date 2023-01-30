import { CallbackType } from '~/src/utils/event-bus';
import Input from '~/src/components/input';
import InputWLabel from '~/src/components/input-w-label';
import Button from '~/src/components/button';
import Avatar from '~src/components/avatar';
import ButtonIcon from '~/src/components/button-icon';
import InputMessage from '~/src/pages/chats/modules/single-chat/components/input-message';

export type BlockProps = {
    css?: string[];
    child?: string;
};

export type FormProps = BlockProps & {
    id: string;
    settings?: { withInternalID?: boolean; displayName?: string };
    events?: Record<string, CallbackType>;
    [key: `input_${string}`]: InputWLabel | Input;
    [key: `button_${string}`]: Button | ButtonIcon;
    inputs?: InputWLabel[];
    buttons?: Button[];
};

export type InputProps = BlockProps & {
    title: string;
    type: string;
    id: string;
    settings?: { withInternalID?: boolean; disabled?: boolean };
    events?: Record<string, CallbackType>;
    value?: string;
};

export type ButtonProps = BlockProps & {
    title: string;
    id: string;
    link?: string;
    settings?: { withInternalID?: boolean };
    events?: Record<string, CallbackType>;
    action?: string;
};

export type ButtonIconProps = ButtonProps & {
    icon: string;
};

export type AvatarProps = BlockProps & {
    size: string;
    url?: string;
};

export type ChatProps = BlockProps & {
    title: string;
    avatar?: Avatar;
    lastMessage?: string;
    datetime: string;
    unread?: number;
    lastMessageImage?: boolean;
    lastMessageSticker?: boolean;
    own?: boolean;
};

export type HeaderProps = BlockProps & {
    title: string;
    avatar?: Avatar;
};

export type DatetimeProps = BlockProps & {
    date: string;
};

export type MessageProps = BlockProps & {
    content: string;
    datetime: string;
    own?: boolean;
};

export type MessageImageProps = BlockProps & {
    datetime: string;
    own?: boolean;
    image: string;
};

export type MessageStickerProps = BlockProps & {
    datetime: string;
    own?: boolean;
    sticker: string;
    styles?: string[];
};

export type FooterProps = BlockProps & {
    inputMessage: InputMessage;
    buttonAttach: ButtonIcon;
    buttonSend: ButtonIcon;
};

export type PageHomeProps = BlockProps & {
    title?: string;
    type: string;
};

export type IconProps = {
    [key: string]: string;
};

export type StickersProps = {
    [key: string]: string;
};
