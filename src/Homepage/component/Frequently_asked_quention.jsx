import React, { useState } from 'react';

const Frequently_asked_question = () => {
  // Example questions and answers
  const faqData = [
    {
      question: 'What is the return policy?',
      answer: 'Our return policy allows you to return the product within 30 days of purchase, provided it is in original condition.'
    },
    {
      question: 'How long does shipping take?',
      answer: 'Shipping typically takes 5-7 business days, depending on your location.'
    },
    {
      question: 'Do you offer international shipping?',
      answer: 'Yes, we ship to most countries worldwide. Shipping fees and times will vary based on the destination.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order has been shipped, you will receive a tracking link via email that you can use to track your shipment.'
    }
  ];

  // Track which answer is currently visible
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle visibility of the answer by index
  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '50px auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>
        Frequently Asked Questions
      </h2>

      <div>
        {faqData.map((faq, index) => (
          <div key={index} style={{ marginBottom: '15px' }}>
            {/* Question */}
            <h3
              onClick={() => toggleAnswer(index)}
              style={{
                cursor: 'pointer',
                padding: '10px',
                backgroundColor: '#4CAF50',
                color: 'white',
                margin: '0',
                borderRadius: '5px',
              }}
            >
              {faq.question}
            </h3>

            {/* Answer (conditionally displayed) */}
            {openIndex === index && (
              <p
                style={{
                  backgroundColor: '#f4f4f4',
                  padding: '10px',
                  borderRadius: '5px',
                  marginTop: '5px',
                  border: '1px solid #ddd'
                }}
              >
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Frequently_asked_question;
