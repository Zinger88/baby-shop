import { SparklesIcon, ArrowPathIcon, ChartPieIcon, FingerPrintIcon, PhoneIcon, PlayCircleIcon, SquaresPlusIcon } from "@heroicons/react/16/solid";
import { CallToAction, Section } from "./types";

export const sections: Section[] = [
    {
        name: 'Этапы беременности',
        description: 'Get a better understanding of your traffic',
        href: '#',
        icon: ChartPieIcon,
    },
    { name: 'Развитие малыша', description: 'Развитие по месяцам', href: '/baby-development', icon: SparklesIcon },
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