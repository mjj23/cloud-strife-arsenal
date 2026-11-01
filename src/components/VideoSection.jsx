import "./VideoSection.css";

function VideoSection() {
    return (
        <section className="video-section">
            <p className="section-label">Combat Showcase</p>
            <h2>Cloud Strife in Action</h2>

            <p>
                Watch Cloud demonstrate his combat abilities and sword techniques.
            </p>

            <div className="video-container">
                <iframe
                    src="https://www.youtube.com/embed/fTkvHEOORFY"
                    title="Cloud Strife Combat Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
}

export default VideoSection;