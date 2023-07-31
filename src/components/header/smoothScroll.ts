export const smoothScroll = (screen: number, height: number, speed: number) => {
    const i = screen;
    if (i <= height) {
        setTimeout(() => {
            window.scrollTo(0, i);
            smoothScroll(screen + speed, height, speed);
        }, 10);
    }
};
