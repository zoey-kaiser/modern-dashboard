import React from 'react';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
import SpotlightWrapper from './SpotlightWrapper';
import theme from './theme';

// Here you can customize all the Mantine Wrappers
// See https://mantine.dev/theming/mantine-provider for more information

const MantineWrapper = ({ children }: { children: React.ReactNode }) => {
    return (
        <MantineProvider withCSSVariables withNormalizeCSS theme={theme}>
            <ModalsProvider>
                <SpotlightWrapper>
                    <NotificationsProvider position="bottom-right" zIndex={2077}>
                        {children}
                    </NotificationsProvider>
                </SpotlightWrapper>
            </ModalsProvider>
        </MantineProvider>
    );
};

export default MantineWrapper;
