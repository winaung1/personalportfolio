import React from "react";
import Faqcard from "./Faqcard";


export const Faq = () => {
  const faqs = [
    {
      question: "Who is Winagencydesigns for?",
      answer:
        "We are the professional, we make killer websites that run fast and good looking website as if it is our own. If you are looking for a good looking website so that you stand out from the rest of the crowd? This is for you.",
    },
    {
      question: "How do we use it?",
      answer:
        "After we upload your website and host them for you. We will provide a video on how to maintain the website. We will gladly do it at $50/month.",
    },
    {
      question: "Do you provide refund?",
      answer:
        "Yes. If you are not satisified with our services or our results in the first 7 days, we will provide 100% of the money back.",
    },
    {
      question:
        "How are we different?",
      answer:
        "We are not only after money, we are after your success. When you are happy, we are also going to thrive in getting more partners. That's why we are doing 100% money back.",
    },
  
    {
      question: "Do you help with support?",
      answer:
        "Yes, we will support you until the site is set correctly for you. That would be an extra cost. Please contact us so that we can set up a time to meet.",
    },
  ];

  return (
    <div className="px-4 max-w-3xl mx-auto text-center " id="faq">
      <h1 className="font-[500] text-[28px] lg:pt-10">
        Frequently Asked Questions
      </h1>
      <p className="py-1 text-gray-500 text-lg">
        If you have any questions, we are here to provide assistance. In case you
        haven’t received a reply, you can send us an email. We will get back to
        you within 24 hours.
      </p>
      <div className="lg:pt-6 lg:pb-3  rounded-xl my-4">
        {faqs.map((faq) => (
          <Faqcard data={faq} />
        ))}
      </div>
     
    </div>
  )}