'use client';

import React from 'react';

interface FloatingWhatsAppProps {
  phoneNumber?: string;
  message?: string;
}

export default function FloatingWhatsApp({
  phoneNumber = '264817850023',
  message = 'Hello Betwin Support, I have an inquiry about my account / games.',
}: FloatingWhatsAppProps) {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="floating-whatsapp-wrap">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp-btn"
        aria-label="Chat with Betwin on WhatsApp"
      >
        {/* Pulsing Animated Halos */}
        <span className="whatsapp-pulse"></span>
        <span className="whatsapp-pulse-2"></span>

        {/* Hover / Slide-out Tooltip */}
        <div className="whatsapp-tooltip">
          <div className="whatsapp-tooltip-header">
            <span className="whatsapp-status-dot"></span>
            <span className="whatsapp-status-text">Online • 24/7 Support</span>
          </div>
          <span className="whatsapp-tooltip-title">Chat with Betwin on WhatsApp</span>
        </div>

        {/* Official WhatsApp SVG Icon */}
        <svg
          className="whatsapp-icon"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16 2C8.268 2 2 8.268 2 16C2 18.736 2.784 21.288 4.14 23.456L2.24 29.76L8.72 27.892C10.84 29.216 13.336 30 16 30C23.732 30 30 23.732 30 16C30 8.268 23.732 2 16 2ZM23.428 20.812C23.12 21.68 21.9 22.38 21.016 22.568C20.412 22.696 19.624 22.8 16.968 21.696C13.576 20.288 11.388 16.84 11.22 16.616C11.052 16.392 9.852 14.796 9.852 13.144C9.852 11.492 10.692 10.688 11.028 10.344C11.308 10.056 11.768 9.928 12.216 9.928C12.36 9.928 12.492 9.936 12.612 9.944C12.964 9.96 13.14 9.98 13.372 10.536C13.66 11.232 14.364 12.952 14.448 13.128C14.532 13.304 14.616 13.544 14.504 13.768C14.392 14 14.296 14.104 14.128 14.3C13.96 14.496 13.804 14.64 13.636 14.848C13.484 15.028 13.308 15.228 13.484 15.532C13.66 15.828 14.268 16.824 15.168 17.624C16.328 18.656 17.276 18.984 17.612 19.124C17.864 19.228 18.164 19.204 18.348 18.988C18.584 18.724 18.876 18.308 19.176 17.888C19.388 17.584 19.656 17.544 19.936 17.648C20.224 17.744 21.756 18.5 22.064 18.656C22.372 18.812 22.58 18.892 22.652 19.016C22.724 19.14 22.724 19.728 22.428 20.812Z"
            fill="#FFFFFF"
          />
        </svg>

        {/* Online Status Badge on the Button */}
        <span className="whatsapp-badge-online"></span>
      </a>
    </div>
  );
}
