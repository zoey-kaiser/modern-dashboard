import React from 'react';
import Aside from '../components/layout/aside/Aside';
import Header from '../components/layout/Header';
import MantineWrapper from '../wrappers/MantineWrapper';

const DefaultLayout = ({ children }: { children: JSX.Element }) => {
    return (
        <MantineWrapper>
            <div className="h-screen">
                <div className="flex">
                    <Aside />
                    <main className="flex flex-col w-full min-h-screen overflow-auto">
                        <Header />
                        <div className="flex-grow mx-4 my-5 lg:mx-10">
                            <div className="flex-grow h-full">{children}</div>
                        </div>
                    </main>
                </div>
            </div>
        </MantineWrapper>
    );
};

export default DefaultLayout;
