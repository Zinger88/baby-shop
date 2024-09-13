import {
    MoonIcon,
    SunIcon,
} from '@heroicons/react/24/outline';

interface ButtonProps {
    onClick: () => void;
    isDark: boolean;
}

export const SwitcherButton: React.FC<ButtonProps> = ({ onClick, isDark }) => {
    return (
        <button
            onClick={onClick}
            className="relative flex items-center justify-between w-16.1 h-8 bg-gray-200  rounded-full p-1 transition-colors duration-300"
        >
                <MoonIcon opacity={isDark ? 1 : 0} />
                <SunIcon opacity={isDark ? 0 : 1}/>

            <div
                className={`absolute w-7 h-7 rounded-full shadow-md transform transition-transform duration-300 ${isDark ? 'translate-x-8 bg-gray-800' : 'translate-x-0 bg-white'}`}
            />
        </button>
    );
};
