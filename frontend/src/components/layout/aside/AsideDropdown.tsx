import { FiChevronRight } from 'react-icons/fi';

declare interface AsideDropdownProps {
    title: string;
    icon?: JSX.Element;
    children?: JSX.Element;
}

const AsideDropdown = ({ title, icon, children }: AsideDropdownProps) => {
    return (
        <li className="relative transition-colors duration-150">
            <div className="flex items-center px-4 py-3 rounded-lg group gap-2 hover:bg-dashboard-background/50">
                <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                        <span className="text-gray-400 text-md group-hover:text-gray-200">{icon}</span>
                        <span className="font-semibold text-gray-400 group-hover:text-gray-200 pt-[1.5px]">
                            {title}
                        </span>
                    </div>
                    <span className="text-gray-400 text-md group-hover:text-gray-200">
                        <FiChevronRight />
                    </span>
                </div>
            </div>
            <div className="mx-3.5">{children}</div>
        </li>
    );
};

export default AsideDropdown;
