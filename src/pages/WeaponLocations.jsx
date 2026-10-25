import "./WeaponLocations.css";

import busterSword from "../assets/buster-sword.png";
import crystalSword from "../assets/crystal-sword1.png";
import runeBlade from "../assets/rune-blade.png";
import umbralBlade from "../assets/umbral-blade.png";
import igneousSaber from "../assets/igneous-saber.png";
import sleekSaber from "../assets/sleek-saber.png";
import slipstreamSaber from "../assets/slipstream-saber.png";

import WeaponLocationCard from "../components/WeaponLocationCard.jsx";

function WeaponLocations() {
    const locations = [
        {
            name: "Buster Sword",
            image: busterSword,
            location: "Starting Weapon",
            description:
                "Cloud begins his journey with the Buster Sword as his main weapon."
        },
        {
            name: "Crystal Sword",
            image: crystalSword,
            location: "Gongaga Region",
            description:
                "The Crystal Sword can be found later in Cloud's journey."
        },
        {
            name: "Rune Blade",
            image: runeBlade,
            location: "Junon Region",
            description:
                "The Rune Blade is a weapon that supports strong Materia use."
        },
        {
            name: "Umbral Blade",
            image: umbralBlade,
            location: "Dustbowl",
            description:
                "The Umbral Blade is built for strong offensive combat."
        },
        {
            name: "Igneous Saber",
            image: igneousSaber,
            location: "Mt. Nibel",
            description:
                "The Igneous Saber is a powerful sword focused on physical damage."
        },
        {
            name: "Sleek Saber",
            image: sleekSaber,
            location: "Grasslands Region",
            description:
                "The Sleek Saber provides Cloud with a fast and balanced weapon."
        },
        {
            name: "Slipstream Saber",
            image: slipstreamSaber,
            location: "Temple of the Ancients",
            description:
                "The Slipstream Saber is designed for quick and aggressive attacks."
        }
    ];

    return (
        <main>
            <section className="locations-heading">
                <p className="section-label">Arsenal Guide</p>
                <h2>Weapon Locations</h2>

                <p>
                    Explore where Cloud can obtain several of his weapons
                    throughout the game.
                </p>
            </section>

            <section className="locations-list">
                {locations.map((weapon) => (
                    <WeaponLocationCard
                        key={weapon.name}
                        image={weapon.image}
                        name={weapon.name}
                        location={weapon.location}
                        description={weapon.description}
                    />
                ))}
            </section>
        </main>
    );
}

export default WeaponLocations;