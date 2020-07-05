import Devices from './Devices';

const Breakpoints = {
    mobile: `@media (min-width: ${Devices.mobile.from}px) and (max-width: ${Devices.mobile.to}px)`,
    desktop: `@media (min-width: ${Devices.desktop.from}px) and (max-width: ${Devices.desktop.to}px)`,
};

export default Breakpoints;
