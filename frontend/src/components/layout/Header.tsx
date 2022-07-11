import { Avatar } from '@mantine/core';
import { FiChevronDown } from 'react-icons/fi';

const Header = () => {
    return (
        <header className="w-full py-3 border-b-2 shadow-2xl border-zinc-800 bg-dashboard-background-light">
            <ul className="flex items-center justify-end mx-8 gap-2">
                <li className="flex items-center gap-1.5">
                    <Avatar color="red" radius="xl">
                        ZK
                    </Avatar>
                    <FiChevronDown />
                </li>
            </ul>
        </header>
    );
};

export default Header;
