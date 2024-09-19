import Link from 'next/link';

interface LinkTextProps {
    children: React.ReactNode;
    route: string;
    extClassName?: string;
}

export const LinkText: React.FC<LinkTextProps> = ({ children, route = '#', extClassName = '' }) => {
    return (
        <Link
            href={route}
            className={`block text-base font-semibold leading-6 text-gray-900 hover:text-amber-500 dark:text-white dark:hover:bg-white dark:hover:text-black ${extClassName ? extClassName : ''}`}
        >
            {children}
        </Link>
    );
};
