// app/testimonials/page.tsx
import TestimonialsClient from "./TestimonialsClient";

export const metadata = {
  title: "Customer Testimonials | Your Company Name",
  description:
    "Hear from our satisfied clients worldwide. Read genuine testimonials about our services and successful projects.",
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
