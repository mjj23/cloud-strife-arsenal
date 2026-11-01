import { useEffect, useState } from "react";
import "./WeaponSlideshow.css";

import busterSword from "../assets/buster-sword.png";
import crystalSword from "../assets/crystal-sword1.png";
import runeBlade from "../assets/rune-blade.png";
import umbralBlade from "../assets/umbral-blade.png";

function WeaponSlideshow() {
    const slides = [
        {
            image: busterSword,
            name: "Buster Sword"
        },
        {
            image: crystalSword,
            name: "Crystal Sword"
        },
        {
            image: runeBlade,
            name: "Rune Blade"
        },
        {
            image: umbralBlade,
            name: "Umbral Blade"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    function nextSlide() {
        setCurrentSlide((currentSlide + 1) % slides.length);
    }

    function previousSlide() {
        setCurrentSlide(
            (currentSlide - 1 + slides.length) % slides.length
        );
    }

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((slide) => (slide + 1) % slides.length);
        }, 4000);

        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <section className="slideshow-section">
            <p className="section-label">Arsenal Showcase</p>
            <h2>Featured Weapon Slideshow</h2>

            <div className="slideshow">
                <button
                    className="slide-button"
                    onClick={previousSlide}
                    aria-label="Previous weapon"
                >
                    ❮
                </button>

                <div className="slide">
                    <img
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].name}
                    />

                    <h3>{slides[currentSlide].name}</h3>
                </div>

                <button
                    className="slide-button"
                    onClick={nextSlide}
                    aria-label="Next weapon"
                >
                    ❯
                </button>
            </div>

            <div className="slide-dots">
                {slides.map((slide, index) => (
                    <button
                        key={slide.name}
                        className={index === currentSlide ? "active-dot" : ""}
                        onClick={() => setCurrentSlide(index)}
                        aria-label={`View ${slide.name}`}
                    >
                    </button>
                ))}
            </div>
        </section>
    );
}

export default WeaponSlideshow;