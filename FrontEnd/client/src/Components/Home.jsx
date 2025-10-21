// Home component for the application
function Home () {
    return (
         <section className="home" id="home">
            <div className="home-content">
                <div className="text-content">
            <h2>Welcome to Mind Ease, your safe space for mental well-being.</h2>
            <p>We are here to walk with you to a happier life.</p>
            </div>
            <div className="image-content">
                <img src="/images/happy.jpg" alt="Happy person" className="home-image" />
                <img src="/images/healed.jpg" alt="Healed person" className="home-image" />
                <img src="/images/humphrey.jpg" alt="Person meditating" className="home-image" />
                <img src="/images/Mental.jpg" alt="Mental health" className="home-image" />
                <img src="/images/Mhealth.jpg" alt="Mental health support" className="home-image" />
                <img src="/images/mindE.jpg" alt="Mind Ease" className="home-image" />
                <img src="/images/new.jpg" alt="Relaxed person" className="home-image" />
            </div>
            </div>
        </section>

    );
}

export default Home;