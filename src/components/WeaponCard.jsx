import "./WeaponCard.css";

function WeaponCard({ image, name, description }) {
    return (
        <article className="weapon-card">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <p>{description}</p>
        </article>
    );
}

export default WeaponCard;