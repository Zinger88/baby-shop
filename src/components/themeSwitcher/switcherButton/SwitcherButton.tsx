import Image from 'next/image';

interface ButtonProps {
    onClick: () => void;
    isChecked: boolean;
}

export const SwitcherButton: React.FC<ButtonProps> = ({ onClick, isChecked }) => {
    return (
        <button
            onClick={onClick}
            className="relative flex items-center justify-between w-16.1 h-8 bg-gray-200  rounded-full p-1 transition-colors duration-300"
        >
            <Image
                src={"/images/white-sun.svg"}
                alt="White Sun"
                width={50}
                height={50}
                className={`absolute left-0.5 w-7 h-7 transition-opacity duration-300 `}
            />
            <Image
                src={"/images/black-sun.svg"}
                alt="Black Sun"
                width={50}
                height={50}
                className={`absolute right-0.5 w-7 h-7 transition-opacity duration-300 `}
            />

            <div
                className={`absolute w-7 h-7 rounded-full shadow-md transform transition-transform duration-300 ${isChecked ? 'translate-x-8 bg-gray-800' : 'translate-x-0 bg-white'}`}
            />
        </button>
    );
};
