import React from "react";

export const Middle = () => {
  return (
    <div className="py-6 grid grid-cols-2 md:grid-cols-3 md:gap-12  w-auto">
      <div className="hidden md:block">
        <h1 class="text-xl pb-3">Resources</h1>
        <ul class="leading-8 opacity-60">
          <li>Pricing</li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl pb-3">Useful Info</h1>
        <ul className="leading-8 opacity-60">
          <li><a href="/terms-of-service">Terms of Service</a></li>
          <li><a href="/privacy-policy">Privacy Policy</a></li>
          <li>FAQ</li>
          <li>We use cookies</li>
        </ul>
      </div>
      <div>
        <h1 className="text-xl pb-3">Company</h1>
        <ul className="leading-8 opacity-60">
          <li>About Us</li>
          {/* <li>Careers</li> */}
          <li><a href="/contact">Support</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>
    </div>
  );
};