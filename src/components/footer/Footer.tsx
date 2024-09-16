import { LinkText } from '../link-text/LinkText';
import { Logo } from '../logo/Logo';
import { SectionsEnum } from '@/constants';

export const Footer = () => {
    return (
        <footer className="bg-primary rounded-lg p-6 dark:bg-black" >
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Logo />
                    <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                        <li>
                            <LinkText route="/about">{SectionsEnum.ABOUT}</LinkText>
                        </li>
                        <li>
                            <LinkText route="/marketplace">{SectionsEnum.MARKETPLACE}</LinkText>
                        </li>
                        <li>
                            <LinkText route="/contacts">{SectionsEnum.CONTACTS}</LinkText>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024 . All Rights Reserved.
                </span>
            </div>
        </footer>
    );
};
