import Link from 'next/link';

interface LinkTextProps {
    children: React.ReactNode;
    route: string;
}

export const LinkText: React.FC<LinkTextProps> = ({ children, route = '#' }) => {
    return (
        <Link
            href={route}
            className="block rounded-lg px-3 py-2 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-50 dark:text-white"
        >
            {children}
        </Link>
    );
};
