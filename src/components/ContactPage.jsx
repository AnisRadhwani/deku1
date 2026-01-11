import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { TiLocationArrow } from "react-icons/ti";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin,
  FaGithub 
} from "react-icons/fa";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const cardsRef = useRef(null);

  useGSAP(() => {
    // Animate form on scroll
    gsap.fromTo(
      formRef.current,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate contact cards
    gsap.fromTo(
      ".contact-card",
      {
        opacity: 0,
        scale: 0.8,
        y: 30,
      },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: cardsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
      alert("Thank you for your message! We'll get back to you soon.");
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "Email",
      content: "hello@deku.com",
      link: "mailto:hello@deku.com",
    },
    {
      icon: <FaPhone className="text-2xl" />,
      title: "Phone",
      content: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Location",
      content: "San Francisco, CA",
      link: "#",
    },
  ];

  const socialLinks = [
    { icon: <FaTwitter />, link: "https://twitter.com", label: "Twitter" },
    { icon: <FaInstagram />, link: "https://instagram.com", label: "Instagram" },
    { icon: <FaLinkedin />, link: "https://linkedin.com", label: "LinkedIn" },
    { icon: <FaGithub />, link: "https://github.com", label: "GitHub" },
  ];

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
      <section
        ref={sectionRef}
        className="relative min-h-screen w-screen overflow-hidden bg-black py-32"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-violet-300 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-300 blur-3xl" />
        </div>

        <div className="container relative z-10 mx-auto px-3 md:px-10">
          {/* Header Section */}
          <div className="mb-20 text-center">
            <p className="mb-5 font-general text-xs uppercase text-blue-50/70">
              Get in Touch
            </p>
            <AnimatedTitle
              title="Let's c<b>o</b>nnect and <br /> build something <b>a</b>mazing t<b>o</b>gether"
              containerClass="!text-blue-50"
            />
            <p className="mx-auto mt-8 max-w-2xl font-circular-web text-lg text-blue-50/70">
              Have a question or want to collaborate? We'd love to hear from you.
              Send us a message and we'll respond as soon as possible.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Information Cards */}
            <div ref={cardsRef} className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="contact-card group relative block overflow-hidden rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 rounded-lg bg-violet-300/20 p-3 text-violet-300 transition-transform duration-300 group-hover:scale-110 group-hover:bg-violet-300/30">
                      {info.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="mb-1 font-robert-medium text-lg text-blue-50">
                        {info.title}
                      </h3>
                      <p className="font-circular-web text-sm text-blue-50/70">
                        {info.content}
                      </p>
                    </div>
                    <TiLocationArrow className="text-blue-50/30 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-blue-50" />
                  </div>
                </a>
              ))}

              {/* Social Links */}
              <div className="contact-card rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                <h3 className="mb-4 font-robert-medium text-lg text-blue-50">
                  Follow Us
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-blue-50/70 transition-all duration-300 hover:border-violet-300/50 hover:bg-violet-300/20 hover:text-violet-300"
                      aria-label={social.label}
                    >
                      <span className="relative z-10 transition-transform duration-300 group-hover:scale-110">
                        {social.icon}
                      </span>
                      <div className="absolute inset-0 rounded-full bg-violet-300/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div ref={formRef} className="lg:pl-8">
              <form
                onSubmit={handleSubmit}
                className="rounded-lg border border-white/10 bg-white/5 p-8 backdrop-blur-sm"
              >
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="mb-2 block font-circular-web text-sm text-blue-50"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-blue-50 placeholder:text-blue-50/30 focus:border-violet-300/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-300/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="mb-2 block font-circular-web text-sm text-blue-50"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-blue-50 placeholder:text-blue-50/30 focus:border-violet-300/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-300/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="mb-8">
                  <label
                    htmlFor="message"
                    className="mb-2 block font-circular-web text-sm text-blue-50"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-blue-50 placeholder:text-blue-50/30 focus:border-violet-300/50 focus:bg-white/10 focus:outline-none focus:ring-2 focus:ring-violet-300/20 transition-all resize-none"
                    placeholder="Tell us about your project or question..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative z-10 w-full cursor-pointer overflow-hidden rounded-full bg-violet-300 px-7 py-3 text-black transition-colors hover:bg-violet-300/90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-1"
                >
                  <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
                    <div className="translate-y-0 skew-y-0 transition duration-500 group-hover:translate-y-[-160%] group-hover:skew-y-12">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </div>
                    <div className="absolute translate-y-[164%] skew-y-12 transition duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </div>
                  </span>
                  <TiLocationArrow />
                </button>
              </form>
            </div>
          </div>

          {/* Footer Note */}
          <div className="mt-20 text-center">
            <p className="font-circular-web text-sm text-blue-50/50">
              We typically respond within 24 hours
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;

