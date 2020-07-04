import { useRef, useCallback } from 'react';

export const useLongPress = (onLongPress?: Function, timeout = 500) => {
    const timeoutId = useRef<number>();

    const handleTouchStart = useCallback(
        (e) => {
            e && e.preventDefault();
            timeoutId.current = setTimeout(onLongPress, timeout);
        },
        [onLongPress, timeout],
    );

    const handleTouchEnd = useCallback((e) => {
        e && e.preventDefault();
        clearTimeout(timeoutId.current);
    }, []);

    return onLongPress ? { handleTouchStart, handleTouchEnd } : {};
};
