import { useEffect, useRef, useState } from 'react';

export const AnimatedSection = ({ children, className = '' }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        const currentRef = ref.current;
        if (currentRef) observer.observe(currentRef);

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, []);

    return (
        <section
            ref={ref}
            className={`${className} transition-opacity duration-1000 ${
                isVisible ? 'opacity-100' : 'opacity-0'
            }`}
        >
            {typeof children === 'function' ? children(isVisible) : null}
        </section>
    );
};
