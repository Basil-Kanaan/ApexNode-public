import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from '@mui/material';
import FeatureCard from '../components/FeatureCard';


function Landing() {
    return (
        <div>
            <section className="hero">
                <div className="hero-image"></div>
                <div className="hero-content">
                    <h1 className="hero-title">ApexNode</h1>
                    <p className="hero-description">Your Solution for App & Website Development</p>
                    <Link to="/ApexNode-public/signup">
                        <Button className="secondary-button" variant="contained" size="large">
                            Sign Up
                        </Button>
                    </Link>
                </div>
            </section>
            <section className="about" id="about">
                <div className="about-container">
                    <h2>About ApexNode</h2>
                    <p>
                        ApexNode is a cutting-edge platform for outsourcing services. Join our hierarchical workforce,
                        level up your skills, and collaborate on client projects. Fair compensation based on
                        contributions.
                        Empowering developers to reach new heights. Join us in shaping the future of outsourcing.
                        #ApexNode
                    </p>
                </div>
            </section>
            <section className="features" id="features">
                <h2>Our Services</h2>
                <div className="feature-container">
                    {/* Create multiple FeatureCard components here to showcase your services */}
                    <FeatureCard
                        title="App Development"
                        description="We offer high-quality app development services to meet your business needs."
                    />
                    {/* Add more FeatureCard components for other services */}
                </div>
            </section>
            <section className="cta" id="contact">
                <h2>Ready to Outsource Your Project?</h2>
                <Link to="/ApexNode-public/signup">
                    <Button className="secondary-button" variant="contained" size="large">
                        Sign Up
                    </Button>
                </Link>
            </section>
            <section className="contact-section" id={"contact"}>
                <div className="contact-container">
                    <h2>Contact Us</h2>
                    <p>If you have any questions or inquiries, feel free to get in touch with us.</p>
                    <a href="mailto:contact@apexnode.com">
                        <Button className="primary-button" variant="contained" size="large">
                            Email Us
                        </Button>
                    </a>
                </div>
            </section>
        </div>
    );
}

export default Landing;
