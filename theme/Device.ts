import styled from 'styled-components';
import Breakpoints from './Breakpoints';

interface IDeviceProps {
    devices: (keyof typeof Breakpoints)[];
}

export const Device = styled.span<IDeviceProps>`
    ${({ devices }) =>
        Object.entries(Breakpoints).reduce(
            (exisingRules, [device, breakpoint]) => {
                const newRule = `${breakpoint} {
                ${
                    devices.includes(device as keyof typeof Breakpoints)
                        ? ''
                        : 'display: none;'
                }
            }`;

                return exisingRules + '\n' + newRule;
            },
            '',
        )}
`;
