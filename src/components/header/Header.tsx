'use client';

import { useState } from 'react';
import { SectionsEnum } from '@/constants';
import { Logo } from '../logo/Logo';
import { ThemeSwitcher } from '../themeSwitcher/ThemeSwitcher';
import { LinkText } from '../link-text/LinkText';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    return (
        <header className="header bg-primary flex-[0_0_80px] w-full dark:bg-black shadow-md sticky z-10 top-0">
            <div className="relative h-full mx-auto flex max-w-5xl items-center justify-between px-6 lg:px-8">
                <div className="header-logo dark:after:opacity-50 flex lg:flex">
                    <Logo />
                </div>

                <nav
                    aria-label="Global"
                    className={`dark:bg-black  header-nav mx-auto flex max-w-5xl items-center justify-between ${mobileMenuOpen ? 'mobile-active' : ''}`}
                >
                    <div className="group">
                        <p className="header-submenu-hover-button circle-30-after-blue text-base font-semibold text-gray-900 cursor-pointer flex items-center mr-3 dark:text-white">
                            {SectionsEnum.LIBRARY}
                        </p>
                        <div className="header-submenu flex gap-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity absolute bg-primary p-6 lg:px-8 w-full left-0 top-50 shadow-md dark:bg-black">
                            <div className="header-submenu-part flex-[1_1_50%] bg-slate-200 dark:bg-none p-3 rounded-lg">
                                <p className="circle-30-after-blue text-lg text- dark:text-white mb-3">Разделы</p>
                                <LinkText route="/baby-development"><img className='w-5 inline-block dark:opacity-30 -translate-y-0.5 mr-1' src="/images/icons/icon-10.webp" alt="icon" />Развитие ребенка по месяцам</LinkText>
                                <LinkText route="/library"><img className='w-5 inline-block dark:opacity-30 -translate-y-0.5 mr-1' src="/images/icons/icon-10.webp" alt="icon" />Этапы беременности</LinkText>
                                <LinkText route="/library"><img className='w-5 inline-block dark:opacity-30 -translate-y-0.5 mr-1' src="/images/icons/icon-10.webp" alt="icon" />Советы</LinkText>
                            </div>
                            <div className="flex-[1_1_50%] header-submenu-part">
                                <p className="text-xl dark:text-white"></p>
                            </div>
                        </div>
                    </div>

                    <LinkText extClassName='mr-3' route="/about">О нас</LinkText>
                    <LinkText extClassName='mr-3' route="/marketplace">Магазин</LinkText>
                    <LinkText extClassName='mr-3' route="/contacts">Контакты</LinkText>
                    <LinkText extClassName='header-authorization_mob mr-4 mt-3 pt-3 border-t w-full' route="/login">Регистрация</LinkText>

                </nav>
                <div className='flex items-center'>
                    <LinkText extClassName='header-authorization mr-4' route="/login">Регистрация</LinkText>
                    <div className={`theme-switcher ${mobileMenuOpen ? 'mobile-active' : ''}`}>
                        <ThemeSwitcher />
                    </div>
                </div>


                <button
                    className={`dark:text-white dark:after:bg-white dark:before:bg-white menu-btn ${mobileMenuOpen ? 'active' : ''}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    Menu
                </button>
            </div>
        </header >
    );
}
