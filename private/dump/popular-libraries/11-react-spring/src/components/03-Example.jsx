import { useSpring, animated } from 'react-spring';

function AnimateDifferentValues() {
    const props = useSpring({
        from: {
            opacity: 0,
            x: 156,
            number: 1
        },
        to: {
            opacity: 1,
            x: 0,
            number: 100
        },
        config: {
            duration: 3000
        }
    });
    
    return (
        <>
            <animated.h1 style={props}>
                Hello
            </animated.h1>
            <animated.svg 
                viewBox="0 0 45 44"
                strokeWidth="2"
                fill="white"
                stroke="rgb(45, 55, 71)"
                strokeDasharray="156"
                strokeDashoffset={props.x} 
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{margin: '20px', width: '80px', height: '80px'}}>
                    <polygon points="22.5 35.25 8.68704657 42.5118994 11.3250859 27.1309497 0.150171867 16.2381006 15.5935233 13.9940503 22.5 0 29.4064767 13.9940503 44.8498281 16.2381006 33.6749141 27.1309497 36.3129534 42.5118994"></polygon>
            </animated.svg>
            <animated.div>
                {props.number.interpolate( n => n.toFixed( 2 ) )}
            </animated.div>
        </>
    );
}

export default AnimateDifferentValues;