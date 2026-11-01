import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./WeaponLightbox.css";

import busterSword from "../assets/buster-sword.png";
import crystalSword from "../assets/crystal-sword1.png";
import runeBlade from "../assets/rune-blade.png";
import umbralBlade from "../assets/umbral-blade.png";

function WeaponLightbox() {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const weapons = [
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

    const slides = weapons.map((weapon) => ({
        src: weapon.image
    }));

    function openLightbox(weaponIndex) {
        setIndex(weaponIndex);
        setOpen(true);
    }

    return (
        <section className="lightbox-section">
            <p className="section-label">Weapon Gallery</p>
            <h2>View the Arsenal</h2>

            <p>Click a weapon to view it in the full-screen gallery.</p>

            <div className="lightbox-grid">
                {weapons.map((weapon, weaponIndex) => (
                    <button
                        className="lightbox-item"
                        key={weapon.name}
                        onClick={() => openLightbox(weaponIndex)}
                    >
                        <img src={weapon.image} alt={weapon.name} />
                        <span>{weapon.name}</span>
                    </button>
                ))}
            </div>

            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={slides}
            />
        </section>
    );
}

export default WeaponLightbox;