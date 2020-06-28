import React from 'react';

function Holdable({ onHold, children }) {
    const [timer, setTimer] = React.useState(null);

    function onPointerDown(evt) {
        const timeoutId = window.setTimeout(
            timesup.bind(null, { ...evt }),
            500,
        );
        setTimer(timeoutId);
    }

    function onPointerUp(evt) {
        if (timer) {
            window.clearTimeout(timer);
            setTimer(null);
        }
    }

    function timesup(evt) {
        setTimer(null);
        onHold(evt);
    }

    return (
        <div onPointerDown={onPointerDown} onPointerUp={onPointerUp}>
            {children}
        </div>
    );
}

export default Holdable;
