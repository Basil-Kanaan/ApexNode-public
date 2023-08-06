import React from 'react';

const Home = () => {
    return (
        <div>
            <section className="about" id="about">
                <div className="about-container">
                    <h2>About ApexNode</h2>
                    <p>
                        ApexNode is a cutting-edge platform for outsourcing services. Join our hierarchical workforce,
                        level up your skills, and collaborate on client projects. Fair compensation based on contributions.
                        Empowering developers to reach new heights. Join us in shaping the future of outsourcing. #ApexNode
                    </p>
                </div>
            </section>
            <section className="features" id="features">
                <h2>Our Services</h2>
                <div className="feature-container">
                    {/* Create multiple FeatureCard components here to showcase your services */}
                    {/* Add more FeatureCard components for other services */}
                </div>
            </section>
            <section className="cta" id="contact">
                <h2>Ready to Outsource Your Project?</h2>
                <a href="#contact"><button>Contact Us</button></a>
            </section>
            <section className="contact-section">
                <div className="contact-container">
                    <h2>Contact Us</h2>
                    <p>Have a project in mind? Let's discuss how we can help you achieve your goals.</p>
                    <a href="mailto:contact@apexnode.com"><button>Email Us</button></a>
                </div>
            </section>
            {/* Add other sections as needed */}
        </div>
    );
};

export default Home;
