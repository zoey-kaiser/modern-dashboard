import React from 'react';
import { FiHome, FiUsers, FiArchive } from 'react-icons/fi';
import { Badge } from '@mantine/core';
import AsideDivider from './AsideDivider';
import AsideItem from './AsideItem';
import AsideDropdown from './AsideDropdown';

const Aside = () => {
    return (
        <aside className="border-r-2 border-zinc-800 bg-dashboard-background-light w-80">
            <div className="mx-3 mt-10 overflow-y-auto max-h-[95vh]">
                <ul className="flex flex-col gap-1.5">
                    <AsideDivider title="General" />
                    <AsideItem title="Home" icon={<FiHome />} link="/">
                        <Badge variant="gradient" size="md" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
                            NEW
                        </Badge>
                    </AsideItem>
                    <AsideItem title="Customers" icon={<FiUsers />} link="/customers" />
                    <AsideDropdown title="Products" icon={<FiArchive />}>
                        <>
                            <AsideItem title="All" link="/customers" />
                            <AsideItem title="List" link="/customers" />
                        </>
                    </AsideDropdown>
                </ul>
                <ul className="flex flex-col mt-10 gap-1.5">
                    <AsideDivider title="General" />
                    <AsideItem title="Home" icon={<FiHome />} link="/test">
                        <Badge variant="gradient" size="md" gradient={{ from: 'teal', to: 'lime', deg: 105 }}>
                            NEW
                        </Badge>
                    </AsideItem>
                    <AsideItem title="Customers" icon={<FiUsers />} link="/customers" />
                </ul>
                <ul className="flex flex-col mt-10 gap-1.5">
                    <AsideDivider title="General" />
                    <AsideItem title="Home" icon={<FiHome />} link="/test" />
                    <AsideItem title="Customers" icon={<FiUsers />} link="/customers" />
                </ul>
            </div>
        </aside>
    );
};

export default Aside;
