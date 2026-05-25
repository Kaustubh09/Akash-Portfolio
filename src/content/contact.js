// Contact modal form fields and copy.

export const contact = {
  title: 'Get in Touch',
  subtitle:
    "Have a question about a plan, the research process, or your trading goals? Drop a message — I'll personally get back to you.",
  fields: [
    { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name', required: true },
    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+91 90000 00000', required: true },
    { name: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com', required: true },
    { name: 'subject', label: 'Subject', type: 'text', placeholder: 'Plan enquiry / Service question', required: false },
    { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell me a bit about what you’re looking for…', required: true },
  ],
  submitLabel: 'Send Message',
  successMessage: 'Thank you! Your message has been received. I’ll get back to you within 24 hours.',
};
