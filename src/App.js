import './App.css';
import zhenyaImg from "./img/zhenya.JPG";
import nikaPng from "./img/nika.jpg";
import {Love} from "./components/Love.tsx";
import {AnimatedSection} from "./components/AnimatedSection.tsx";
import nowImg from "./img/nowImg.JPG";
import imggory from "./img/imggory.JPG";
import {EventDate} from "./components/EventDate.tsx";
import { FaInstagram } from 'react-icons/fa';
import { BsMusicNoteBeamed } from 'react-icons/bs';
import {useEffect, useRef, useState} from "react";


const App = () => {
    const [showLabel, setShowLabel] = useState(true)
    const audioRef = useRef(null);  // Ссылка на элемент audio

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLabel(false)
        }, 5000)
        return () => clearTimeout(timer)
    }, [])

    const playAudio = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };

    return (
        <div className="w-full overflow-y-auto">

            <div className="fixed top-4 right-4 z-50 flex items-center gap-2 bg-white/80 px-3 py-2 rounded-full shadow backdrop-blur-md">
                <button
                    onClick={playAudio}
                    title="Включить музыку"
                    className="text-gray-800 hover:scale-110 transition"
                >
                    <BsMusicNoteBeamed className="text-2xl" />
                </button>
                {showLabel && (
                    <span className="text-sm text-gray-700 font-light animate-fade-in">
            Нажми меня 🎵
          </span>
                )}
            </div>

            {/* Скрытый аудиофайл */}
            <audio ref={audioRef} preload="auto" loop>
                <source src="/audio.mp3" type="audio/mp3" />
                Ваш браузер не поддерживает элемент audio.
            </audio>
            {/* First full screen section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center">
                <div>
                    <img
                        src={zhenyaImg}
                        alt="Женя"
                        className="m-3 absolute left-0 top-20 w-48 md:w-64 rounded-xl shadow-lg animate-slide-in-left"
                    />

                    <img
                        src={nikaPng}
                        alt="Ника"
                        className="m-3 absolute right-0 top-30 w-48 md:w-64 rounded-xl shadow-lg animate-slide-in-right"
                    />
                </div>

                <div className="mt-[100px]">
                    <Love />
                </div>

                {/* Date with wavy underline */}
                <div className="mt-10 relative">
                    <p
                        className="text-2xl font-semibold text-gray-600"
                        style={{ fontFamily: "'Pacifico', cursive" }}
                    >
                        19.09.2025
                        <span className="absolute bottom-[-4px] left-0 w-full h-2 wave-line"></span>
                    </p>
                </div>

                {/* Phrase "уже догадались?" at the very bottom in burgundy */}
                <div className="absolute bottom-10 w-full text-center">
                    <p className="text-3xl text-amber-950" style={{ fontFamily: "'Marcellus SC', serif" }}>
                        Уже догадались?
                    </p>
                </div>
            </section>
            <AnimatedSection className="px-4 py-10">
                {(isVisible) => (
                    <div
                        className={`max-w-2xl mx-auto text-center transition-opacity duration-1000 ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        } transform`}
                    >
                        <p style={{ fontFamily: "'Marck Script', cursive" }} className="text-xl text-black font-light mb-4">
                            Эти милые малыши — это мы в детстве!
                        </p>
                        <p style={{ fontFamily: "'Marck Script', cursive" }} className="text-xl text-black font-light">
                            Кажется, что совсем недавно мы делали свои первые шаги, а уже сегодня
                            приглашаем вас стать свидетелями важного события в нашей жизни!
                        </p>
                    </div>
                )}
            </AnimatedSection>


            <AnimatedSection className="relative w-full h-[320px] sm:h-[400px] px-2.5">
                {(isVisible) => (
                    <div className="relative w-full h-full">
                        <img
                            src={nowImg}
                            alt="Женя"
                            className={`absolute left-0 w-52 sm:w-64 rounded-xl shadow-lg transition-all duration-1000 ease-out
          ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} translate-y-2`}
                        />
                        <img
                            src={imggory}
                            alt="Ника"
                            className={`absolute mt-52 right-0 w-52 sm:w-64 rounded-xl shadow-lg transition-all duration-1000 ease-out
          ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} translate-y-6`}
                        />
                    </div>
                )}
            </AnimatedSection>

            <EventDate/>

            <AnimatedSection className="px-4 py-10">
                {(isVisible) => (
                    <div
                        className={`max-w-xl mx-auto text-center transition-opacity duration-1000 transform ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                    >
                        <h2 className="text-3xl text-gray-800 mb-4" style={{ fontFamily: "'Marcellus SC', serif" }} >Тайминг</h2>
                        <p style={{ fontFamily: "'Marck Script', cursive" }} className="text-xl text-black font-light">14:00 — сбор на Вилле</p>
                    </div>
                )}
            </AnimatedSection>

            <AnimatedSection className="px-4 pt-16 pb-20">
                {(isVisible) => (
                    <div
                        className={`max-w-3xl mx-auto transition-opacity duration-1000 transform ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                    >
                        <h2 style={{ fontFamily: "'Marcellus SC', serif" }} className="text-3xl text-center text-gray-800 mb-6">Локация</h2>

                        <p style={{ fontFamily: "'Marck Script', cursive" }} className="text-xl text-black text-center font-light mb-8">
                            Свадьба будет в стиле вечеринки второго дня!<br />
                            Праздник будет проходить в солнечном Батуми, на потрясающей Вилле
                            «Golden Sunset Batumi”<br />
                            <span className="text-lg">(купальники обязательно)☝️</span>
                        </p>

                        <div className="flex flex-row justify-between items-center gap-10">
                            <div className="flex flex-col items-center sm:items-start">
                                <a
                                    href="https://maps.app.goo.gl/4brgWjMmeHq8dPrBA?g_st=com.google.maps.preview.copy"
                                    target="_blank"
                                    rel="noreferrer"
                                    style={{ fontFamily: "'La Belle Aurore', cursive" }}
                                    class="bg-orange-100 hover:bg-orange-200 text-gray-900 font-semibold py-2 px-6 rounded-xl shadow transition"
                                >
                                    Локация
                                </a>
                                <span style={{ fontFamily: "'Marck Script', cursive" }} className="text-lg text-gray-500 mt-1">нажми меня</span>
                            </div>

                            {/* Instagram Icon */}
                            <div className="flex flex-col items-center sm:items-end">
                                <a
                                    href="https://www.instagram.com/golden_sunset_batumi?igsh=MW02OTk3Z2wxeDk0cg=="
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-pink-600 hover:text-pink-700 transition text-4xl"
                                    aria-label="Instagram"
                                >
                                    <FaInstagram />
                                </a>
                                <span style={{ fontFamily: "'Marck Script', cursive" }} className="text-lg text-gray-500 mt-1">нажми меня</span>
                            </div>
                        </div>
                    </div>
                )}
            </AnimatedSection>

            <AnimatedSection className="px-4 pt-16 pb-24">
                {(isVisible) => (
                    <div
                        className={`max-w-2xl mx-auto text-center transition-opacity duration-1000 transform ${
                            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                        }`}
                    >
                        <h2 style={{ fontFamily: "'Marcellus SC', serif" }} className="text-3xl text-gray-800 mb-6">Дресс-код</h2>

                        <p style={{ fontFamily: "'Marck Script', cursive" }} className="text-xl text-black font-light mb-12">
                            Мы просим воздержаться от ярких цветов и броских принтов.<br />
                            Будем очень рады, если Вы отдадите предпочтение спокойным и пастельным тонам!
                        </p>

                        <div className="flex justify-center gap-4 mb-12">
                            <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#c9b273' }}></div> {/* Darker Circle (1st) */}
                            <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#d2bd92' }}></div> {/* Circle 2 */}
                            <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#ddcaa0' }}></div> {/* Circle 3 */}
                            <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#a88f56' }}></div> {/* Darker Circle (1st) */}
                        </div>


                        <h2 style={{ fontFamily: "'Marcellus SC', serif" }} className="text-3xl text-gray-800 mb-6">Пожелания</h2>

                        <p style={{ fontFamily: "'Marck Script', cursive" }} className="text-xl text-black font-light">
                            Пожалуйста, подтвердите своё присутствие до <strong>1 мая</strong>,<br />
                            чтобы мы могли планировать нашу свадьбу наилучшим образом!
                        </p>
                    </div>
                )}
            </AnimatedSection>


        </div>
    );
};

export default App;
