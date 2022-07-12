import { FiChevronRight } from 'react-icons/fi';
import { useState } from 'react';
import { Collapse } from '@mantine/core';

declare interface AsideDropdownProps {
    title: string;
    icon?: JSX.Element;
    children?: JSX.Element;
}

const AsideDropdown = ({ title, icon, children }: AsideDropdownProps) => {
    const [isExtended, setIsExtended] = useState(false);

    return (
        <li className="relative transition-colors duration-150">
            <button
                className="flex items-center w-full px-4 py-3 bg-transparent rounded-lg group gap-2 hover:bg-dashboard-background/50"
                onClick={() => setIsExtended(!isExtended)}
            >
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-md group-hover:text-gray-200">{icon}</span>
                        <span className="font-semibold text-gray-400 group-hover:text-gray-200 pt-[1.5px]">
                            {title}
                        </span>
                    </div>
                    <span className="text-gray-400 text-md group-hover:text-gray-200">
                        <FiChevronRight className={`transition-transform ${isExtended && 'rotate-90'}`} />
                    </span>
                </div>
            </button>
            <Collapse in={isExtended}>
                <div className="mx-5">{children}</div>
            </Collapse>
        </li>
    );
};

export default AsideDropdown;
