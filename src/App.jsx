import { useState } from "react";

import Header from "./components/Header";

import Home from "./pages/Home";
import BusterSword from "./pages/BusterSword";
import Weapons from "./pages/Weapons";
import CombatMateria from "./pages/CombatMateria";
import WeaponLocations from "./pages/WeaponLocations";

function App() {
    const [page, setPage] = useState("home");

    function showPage() {
        if (page === "buster") {
            return <BusterSword />;
        }

        if (page === "weapons") {
            return <Weapons />;
        }

        if (page === "combat") {
            return <CombatMateria />;
        }

        if (page === "locations") {
            return <WeaponLocations />;
        }

        return <Home />;
    }

    return (
        <>
            <Header setPage={setPage} />
            {showPage()}
        </>
    );
}

export default App;