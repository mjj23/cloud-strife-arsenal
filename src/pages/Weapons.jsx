import "./Weapons.css";

import busterSword from "../assets/buster-sword.png";
import crystalSword from "../assets/crystal-sword1.png";
import runeBlade from "../assets/rune-blade.png";
import umbralBlade from "../assets/umbral-blade.png";
import igneousSaber from "../assets/igneous-saber.png";
import sleekSaber from "../assets/sleek-saber.png";
import slipstreamSaber from "../assets/slipstream-saber.png";

import WeaponCard from "../components/WeaponCard.jsx";

function Weapons() {
    const weapons = [
        {
            name: "Buster Sword",
            image: busterSword,
            description: "Cloud's iconic starting weapon."
        },
        {
            name: "Crystal Sword",
            image: crystalSword,
            description: "A powerful sword made for heavy attacks."
        },
        {
            name: "Rune Blade",
            image: runeBlade,
            description: "A weapon designed for strong Materia use."
        },
        {
            name: "Umbral Blade",
            image: umbralBlade,
            description: "A dark blade made for aggressive combat."
        },
        {
            name: "Igneous Saber",
            image: igneousSaber,
            description: "A powerful saber focused on physical attacks."
        },
        {
            name: "Sleek Saber",
            image: sleekSaber,
            description: "A lighter weapon made for speed."
        },
        {
            name: "Slipstream Saber",
            image: slipstreamSaber,
            description: "A fast saber made for aggressive combat."
        }
    ];

    return (
        <main>
            <section className="weapons-heading">
                <p className="section-label">Weapon Database</p>
                <h2>Cloud's Weapons</h2>

                <p>
                    Explore several weapons used by Cloud Strife throughout
                    Final Fantasy VII.
                </p>
            </section>

            <section className="weapons-grid">
                {weapons.map((weapon) => (
                    <WeaponCard
                        key={weapon.name}
                        image={weapon.image}
                        name={weapon.name}
                        description={weapon.description}
                    />
                ))}
            </section>
        </main>
    );
}

export default Weapons;