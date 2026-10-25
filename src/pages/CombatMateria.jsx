import "./CombatMateria.css";

import busterSword from "../assets/buster-sword.png";
import yuffieMateria from "../assets/yuffie-materia.webp";

function CombatMateria() {
    return (
        <main>

            <section className="combat-heading">
                <p className="section-label">Battle System</p>
                <h2>Combat & Materia</h2>

                <p>
                    Learn how Cloud combines sword techniques and Materia
                    to control the battlefield.
                </p>
            </section>


            <section className="combat-section">

                <div className="combat-text">
                    <h2>Cloud's Combat Style</h2>

                    <p>
                        Cloud fights with large swords and powerful close-range
                        attacks. His combat style combines strength, speed,
                        defense, and special abilities.
                    </p>

                    <p>
                        Different weapons can change Cloud's stats and give him
                        access to different abilities during battle.
                    </p>
                </div>

                <div className="combat-image">
                    <img
                        src={busterSword}
                        alt="Cloud Buster Sword"
                    />
                </div>

            </section>


            <section className="materia-info">

                <div className="materia-picture">
                    <img
                        src={yuffieMateria}
                        alt="Final Fantasy VII Materia"
                    />
                </div>

                <div className="materia-description">
                    <h2>Materia System</h2>

                    <p>
                        Materia allows Cloud to use magic, commands,
                        summons, and support abilities.
                    </p>

                    <div className="materia-list">
                        <p><strong>Magic:</strong> Offensive and healing spells</p>
                        <p><strong>Command:</strong> Adds special battle commands</p>
                        <p><strong>Summon:</strong> Calls powerful creatures</p>
                        <p><strong>Support:</strong> Enhances other Materia effects</p>
                    </div>
                </div>

            </section>

        </main>
    );
}

export default CombatMateria;