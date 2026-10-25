import "./WeaponLocationCard.css";

function WeaponLocationCard({ image, name, location, description }) {
    return (
        <article className="location-card">
            <img src={image} alt={name} />

            <div>
                <h3>{name}</h3>

                <p>
                    <strong>Location:</strong> {location}
                </p>

                <p>{description}</p>
            </div>
        </article>
    );
}

export default WeaponLocationCard;