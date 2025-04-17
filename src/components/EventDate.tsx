// @ts-ignore
import {AnimatedSection} from './AnimatedSection.tsx';

export const EventDate = () => {
    return (
        <AnimatedSection className="mt-72 px-4 py-10">
            {(isVisible) => (
                <div
                    className={`max-w-xl mx-auto text-center transition-opacity duration-1000 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    } transform`}
                >
                    <p style={{ fontFamily: "'Marcellus SC', serif" }} className="text-3xl text-gray-800 mb-2">Дорогие гости,</p>
                    <p style={{ fontFamily: "'Marck Script', cursive" }} className="text-xl text-black font-light mb-6">
                        мы приглашаем вас разделить с нами радостный день, в который мы станем семьёй!
                    </p>

                    <div className="flex justify-center">
                        <div className="text-xl grid grid-cols-7 gap-2 text-sm font-medium">
                            {['15', '16', '17', '18', '19', '20', '21'].map((day) => {
                                const isSpecial = ['19', '20', '21'].includes(day);
                                return (
                                    <div
                                        key={day}
                                        className="relative w-10 h-10 flex items-center justify-center"
                                    >
                                        {isSpecial && (
                                            <span className="absolute text-red-400 text-xl -top-1 -left-1 animate-pulse select-none pointer-events-none">
                                                ❤️
                                            </span>
                                        )}
                                        <span
                                            className={`relative z-10 ${
                                                isSpecial
                                                    ? 'text-red-600 font-bold'
                                                    : 'bg-white rounded-full w-full h-full flex items-center justify-center text-black'
                                            }`}
                                        >
                                            {day}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <p className="text-lg mt-2">Сентябрь 2025</p>
                </div>
            )}
        </AnimatedSection>
    );
};
