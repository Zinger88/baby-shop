interface LinkTextProps {
    children: React.ReactNode;
}

export const LinkText: React.FC<LinkTextProps> = ({ children }) => {
    return (
        <a
            href="#"
            className="block rounded-lg px-3 py-2 text-base font-semibold leading-6 text-gray-900 hover:bg-gray-50 dark:text-white"
        >
            {children}
        </a>
    );
}
