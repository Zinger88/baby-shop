import { ArrowPathIcon, ChartPieIcon, CursorArrowRaysIcon, FingerPrintIcon, PhoneIcon, PlayCircleIcon, SquaresPlusIcon } from "@heroicons/react/16/solid";
import { CallToAction, Section } from "./types";

export const sections: Section[] = [
    {
        name: 'Этапы беременности',
        description: 'Get a better understanding of your traffic',
        href: '#',
        icon: ChartPieIcon,
    },
    { name: 'Развитие малыша', description: 'Speak directly to your customers', href: '#', icon: CursorArrowRaysIcon },
    {
        name: 'Полезные советы',
        description: 'Your customers’ data will be safe and secure',
        href: '#',
        icon: FingerPrintIcon,
    },
    { name: 'Здоровое питание', description: 'Connect with third-party tools', href: '#', icon: SquaresPlusIcon },
    {
        name: 'Игры и развлечения',
        description: 'Build strategic funnels that will convert',
        href: '#',
        icon: ArrowPathIcon,
    },
];

export const callsToAction: CallToAction[] = [
    { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
    { name: 'Contact sales', href: '#', icon: PhoneIcon },
];

export enum SectionsEnum {
    LIBRARY = 'Библиотека',
    ABOUT = 'О нас',
    MARKETPLACE = 'Магазин',
    CONTACTS = 'Контакты',
}