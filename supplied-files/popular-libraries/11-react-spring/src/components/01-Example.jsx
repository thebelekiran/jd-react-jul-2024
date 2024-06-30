import { useSpring, animated } from 'react-spring';

const FadeInDiv = () => {
    const props = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: {
            duration: 5000
        }
    });

    return (
        <animated.div style={props}>
            I will fade in
        </animated.div>
    );
};

export default FadeInDiv;