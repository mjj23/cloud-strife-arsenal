import "./Home.css";

import worldMap from "../assets/world-map.webp";
import busterSword from "../assets/buster-sword.png";
import crystalSword from "../assets/crystal-sword1.png";
import umbralBlade from "../assets/umbral-blade.png";
import yuffieMateria from "../assets/yuffie-materia.webp";
import igneousSaber from "../assets/igneous-saber.png";
import runeBlade from "../assets/rune-blade.png";
import slipstreamSaber from "../assets/slipstream-saber.png";
import sleekSaber from "../assets/sleek-saber.png";

import WeaponCard from "../components/WeaponCard.jsx";

function Home() {
    return (
        <main>

            <section
                className="hero"
                style={{ backgroundImage: `url(${worldMap})` }}
            >
                <div className="hero-content">
                    <p className="section-label">Tactical SOLDIER Database</p>

                    <h2>Master Cloud Strife's Legendary Arsenal</h2>

                    <p>
                        Explore Cloud's weapons, combat techniques,
                        and Materia from Final Fantasy VII.
                    </p>
                </div>
            </section>


            <section className="featured-section">

                <h2>Featured Weapons</h2>

                <div className="weapon-grid">

                    <WeaponCard
                        image={busterSword}
                        name="Buster Sword"
                        description="Cloud's iconic starting weapon."
                    />

                    <WeaponCard
                        image={crystalSword}
                        name="Crystal Sword"
                        description="A powerful sword made for heavy attacks."
                    />

                    <WeaponCard
                        image={umbralBlade}
                        name="Umbral Blade"
                        description="A dark blade built for offensive combat."
                    />

                </div>

            </section>


            <section className="materia-section">

                <div className="materia-text">
                    <p className="section-label">System Synthesis</p>

                    <h2>Combat & Materia Mastery</h2>

                    <p>
                        Materia allows Cloud to use magic, commands,
                        summons, and support abilities during battle.
                    </p>
                </div>

                <div className="materia-image">
                    <img src={yuffieMateria} alt="Materia" />
                </div>

            </section>


            <section className="gallery-section">

                <h2>Weapon Gallery</h2>

                <div className="weapon-grid">

                    <WeaponCard
                        image={igneousSaber}
                        name="Igneous Saber"
                        description="A strong saber focused on physical attacks."
                    />

                    <WeaponCard
                        image={runeBlade}
                        name="Rune Blade"
                        description="A weapon designed for strong Materia use."
                    />

                    <WeaponCard
                        image={slipstreamSaber}
                        name="Slipstream Saber"
                        description="A fast saber made for aggressive combat."
                    />

                    <WeaponCard
                        image={sleekSaber}
                        name="Sleek Saber"
                        description="A lighter saber made for speed."
                    />

                </div>

            </section>

        </main>
    );
}

export default Home;