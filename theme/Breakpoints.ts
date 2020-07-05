import Devices from './Devices';

const Breakpoints = {
    mobile: `@media (min-width: ${Devices.mobile.from}px)`,
    desktop: `@media (min-width: ${Devices.desktop.from}px)`,
};

export default Breakpoints;
