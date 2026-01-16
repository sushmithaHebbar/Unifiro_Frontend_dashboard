import React from 'react';

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I register for an event?",
      answer: "Simply browse events, select one you like, and click 'Register'. Follow the prompts to complete your registration and payment."
    },
    {
      question: "How do I become an organizer?",
      answer: "Click on 'Host an Event' and create your organizer account. You'll need to provide some verification documents for approval."
    },
    {
      question: "What payment methods are accepted?",
      answer: "We accept UPI, debit/credit cards, and net banking through our secure payment gateway."
    },
    {
      question: "How do I get my tickets?",
      answer: "Once you register and complete payment, you'll receive a digital ticket with a QR code via email and in your dashboard."
    }
  ];

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg">Find quick answers to common questions</p>
        </div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="relative p-[1.5px] rounded-2xl bg-gradient-to-r from-teal-200 via-emerald-100 to-orange-200 shadow-sm"
            >
              <div className="bg-emerald-50/30 backdrop-blur-sm rounded-[14px] p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;