import React from 'react';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import "./styles.css";

const testimonials = [
  {
    name: 'Manager, Neuzen AI',
    feedback: 'Gayathri consistently delivers exceptional work, bringing innovative ideas and a strong sense of collaboration to every project. Her expertise in full-stack development has been invaluable to our team.',
  },
  {
    name: 'Team Lead, CodeGene',
    feedback: 'Gayathri’s attention to detail and her ability to quickly grasp complex requirements have made her a standout developer. She played a critical role in optimizing our frontend for better user experience.',
  },
  {
    name: 'Client, KYC Project',
    feedback: 'Working with Gayathri was a pleasure. She exceeded our expectations with a user-friendly interface and efficient code, ensuring the project was delivered ahead of schedule.',
  },
  {
    name: 'Professor, KITS',
    feedback: 'Gayathri demonstrated exceptional technical aptitude and teamwork during her academic years. Her dedication to continuous learning and problem-solving is truly commendable.',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <h2 className="section-title">What People Say</h2>
      <div className="testimonials-list">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <FaQuoteLeft className="quote-icon left" />
            <p className="feedback">"{testimonial.feedback}"</p>
            <FaQuoteRight className="quote-icon right" />
            <h4 className="author">- {testimonial.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
