import { useEffect, useState } from "react";
import "./Weapons.css";
import WeaponCard from "../components/WeaponCard.jsx";

function Weapons() {
    const [weapons, setWeapons] = useState([]);
    const [loading, setLoading] = useState(true);

    const serverUrl = "https://node-hello-world-ojxv.onrender.com";

    useEffect(() => {
        async function loadWeapons() {
            try {
                const response = await fetch(`${serverUrl}/api/weapons`);
                const data = await response.json();

                setWeapons(data);
                setLoading(false);
            } catch (error) {
                console.error("Could not load weapons:", error);
                setLoading(false);
            }
        }

        loadWeapons();
    }, []);

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
                {loading ? (
                    <p>Loading weapons...</p>
                ) : (
                    weapons.map((weapon) => (
                        <WeaponCard
                            key={weapon.id}
                            image={`${serverUrl}/${weapon.image}`}
                            name={weapon.name}
                            description={weapon.description}
                        />
                    ))
                )}
            </section>
        </main>
    );
}

export default Weapons;