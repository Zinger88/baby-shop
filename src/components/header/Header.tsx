'use client';

import { useState } from 'react';
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/react';
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { OtherSections } from './components/other-sections/OtherSections';
import { callsToAction, sections, SectionsEnum } from '@/constants';
import { Logo } from '../logo/Logo';
import { ThemeSwitcher } from '../themeSwitcher/ThemeSwitcher';

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

    return (
        <header className="bg-primary w-full dark:bg-black">
            <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
                <div className="flex lg:flex-1">
                    <Logo />
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(true)}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="h-6 w-6" />
                    </button>
                </div>
                <PopoverGroup className="hidden lg:flex lg:gap-x-12">
                    <Popover className="relative">
                        <PopoverButton className="flex items-center gap-x-1 rounded-lg px-3 py-2 text-base font-semibold leading-6 text-gray-900 hover:bg-white hover:text-black dark:text-white dark:hover:bg-white dark:hover:text-black">
                            {SectionsEnum.LIBRARY}
                            <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
                        </PopoverButton>

                        <PopoverPanel
                            transition
                            className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white dark:bg-black dark:shadow-black shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="p-4">
                                {sections.map((item) => (
                                    <div
                                        key={item.name}
                                        className="group relative flex items-center gap-x-6 rounded-lg p-4 text-base leading-6 hover:bg-white dark:hover:bg-white"
                                    >
                                        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-black">
                                            <item.icon
                                                aria-hidden="true"
                                                className="h-6 w-6 text-gray-600 group-hover:text-white"
                                            />
                                        </div>
                                        <div className="flex-auto">
                                            <a
                                                href={item.href}
                                                className="block font-semibold text-gray-900 dark:text-white group-hover:text-black dark:group-hover:text-black"
                                            >
                                                {item.name}
                                                <span className="absolute inset-0" />
                                            </a>
                                            <p className="mt-1 text-gray-600 dark:text-white group-hover:text-black dark:group-hover:text-black">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>


                            <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 dark:bg-slate-900">
                                {callsToAction.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center justify-center gap-x-2.5 p-3 text-base font-semibold leading-6 text-gray-900 hover:bg-white hover:text-black dark:text-white dark:hover:bg-white dark:hover:text-black"
                                    >
                                        <item.icon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400 group-hover:text-black" />
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </PopoverPanel>
                    </Popover>

                    <OtherSections />
                </PopoverGroup>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <ThemeSwitcher />
                </div>
            </nav>
            <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Logo />
                        <button
                            type="button"
                            onClick={() => setMobileMenuOpen(false)}
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon aria-hidden="true" className="h-6 w-6" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Disclosure as="div">
                                    <DisclosureButton className="group flex items-center gap-x-1 rounded-lg px-3 py-2 text-base font-semibold leading-6 text-gray-900 hover:bg-white hover:text-black w-full justify-between dark:text-white dark:hover:bg-white dark:hover:text-black">
                                        Product
                                        <ChevronDownIcon
                                            aria-hidden="true"
                                            className="h-5 w-5 flex-none text-gray-400 group-data-[open]:rotate-180"
                                        />
                                    </DisclosureButton>
                                    <DisclosurePanel className="mt-2 space-y-2">
                                        {[...sections, ...callsToAction].map((item) => (
                                            <DisclosureButton
                                                key={item.name}
                                                as="a"
                                                href={item.href}
                                                className="block rounded-lg py-2 pl-6 pr-3 text-base font-semibold leading-7 text-gray-900 hover:bg-white hover:text-black dark:text-white dark:hover:bg-white dark:hover:text-black"
                                            >
                                                {item.name}
                                            </DisclosureButton>
                                        ))}
                                    </DisclosurePanel>
                                </Disclosure>

                                <OtherSections />
                            </div>
                            <div className="py-6">
                                <ThemeSwitcher />
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
}
