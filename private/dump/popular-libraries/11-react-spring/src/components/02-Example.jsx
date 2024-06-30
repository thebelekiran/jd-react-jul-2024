import { useSpring, animated } from 'react-spring';

function CustomComponent( props ) {
    return <div {...props}>{props.children}</div>;
}

const AnimatedCustomComponent = animated( CustomComponent );

const FadeInCustomComponent = () => {
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
        <AnimatedCustomComponent style={props}>
            I will fade in
        </AnimatedCustomComponent>
    );
};

export default FadeInCustomComponent;