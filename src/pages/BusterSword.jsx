import "./BusterSword.css";
import busterSword from "../assets/buster-sword.png";

function BusterSword() {
    return (
        <main>
            <section className="buster-detail">

                <div className="buster-image">
                    <img
                        src={busterSword}
                        alt="Cloud Strife Buster Sword"
                    />
                </div>

                <div className="buster-text">
                    <p className="section-label">Iconic Weapon</p>

                    <h2>Buster Sword</h2>

                    <p>
                        The Buster Sword is Cloud Strife's most recognizable weapon.
                        Its massive blade was originally carried by Zack Fair before
                        eventually becoming Cloud's signature weapon.
                    </p>

                    <p>
                        Despite its enormous size, Cloud uses the Buster Sword with
                        impressive speed and power. It represents Cloud's past and
                        his journey throughout Final Fantasy VII.
                    </p>

                    <div className="buster-stats">
                        <p><strong>Weapon Type:</strong> Greatsword</p>
                        <p><strong>Owner:</strong> Cloud Strife</p>
                        <p><strong>Strength:</strong> Balanced</p>
                        <p><strong>Materia Slots:</strong> 2</p>
                    </div>
                </div>

            </section>

            <section className="combat-use">
                <h2>Combat Use</h2>

                <p>
                    The Buster Sword is designed for powerful close-range attacks.
                    Cloud can use it for standard attacks, defensive techniques,
                    and abilities that deal heavy physical damage.
                </p>
            </section>
        </main>
    );
}

export default BusterSword;