import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './components/Header';
import FeatureCard from './components/FeatureCard';

function App() {
  return (
      <div>
        <Header />
        <section className="features">
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
        <section className="cta">
          <h2>Ready to Outsource Your Project?</h2>
          <button>Contact Us</button>
        </section>
        {/* Add other sections as needed */}
      </div>
  );
}

export default App;
