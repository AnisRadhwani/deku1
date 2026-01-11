import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animate video clip path on scroll
    gsap.fromTo(
      "#about-video-clip",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        borderRadius: "0%",
      },
      {
        clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
        borderRadius: "0% 0% 40% 10%",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-violet-300 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-300 blur-3xl" />
      </div>

      {/* Header Section */}
      <div ref={sectionRef} className="relative pt-32 pb-20 px-5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="font-general text-xs uppercase text-blue-50/70 mb-5">
              Welcome to Deku
            </p>
            <AnimatedTitle
              title="Disc<b>o</b>ver the world's <br /> largest digital <b>l</b>ibrary"
              containerClass="!text-blue-50"
            />
            <div className="mt-12 max-w-3xl mx-auto">
              <p className="font-circular-web text-lg text-blue-50/80 mb-6">
                Your reading journey begins—stories await at every turn
              </p>
              <p className="font-circular-web text-base text-blue-50/70 leading-relaxed">
                Deku brings together thousands of books, both PDF and audiobook
                formats, into one seamless reading experience. We're on a mission
                to make knowledge and stories accessible to everyone, everywhere.
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            <div className="text-center p-8 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
              <h3 className="special-font text-5xl text-blue-50 mb-2">10K+</h3>
              <p className="font-circular-web text-sm text-blue-50/70">
                Books Available
              </p>
            </div>
            <div className="text-center p-8 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
              <h3 className="special-font text-5xl text-blue-50 mb-2">500K+</h3>
              <p className="font-circular-web text-sm text-blue-50/70">
                Active Readers
              </p>
            </div>
            <div className="text-center p-8 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
              <h3 className="special-font text-5xl text-blue-50 mb-2">50+</h3>
              <p className="font-circular-web text-sm text-blue-50/70">
                Languages Supported
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative h-[80vh] w-screen overflow-hidden">
        <div
          id="about-video-clip"
          className="absolute inset-0 w-full h-full overflow-hidden"
        >
          <video
            ref={videoRef}
            src="videos/hero-3.mp4"
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center px-5">
            <h2 className="special-font text-4xl md:text-6xl lg:text-7xl text-white mb-6">
              Exp<b>e</b>rience R<b>e</b>ading
              <br />
              Like N<b>e</b>ver B<b>e</b>fore
            </h2>
            <p className="font-circular-web text-lg text-white/90 max-w-2xl mx-auto">
              Immerse yourself in stories that come alive. Our platform combines
              cutting-edge technology with timeless narratives.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="relative z-10 py-32 px-5">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="font-general text-xs uppercase text-blue-50/70 mb-5">
                Our Mission
              </p>
              <h2 className="special-font text-4xl md:text-5xl text-blue-50 mb-6">
                Mak<b>e</b> kn<b>o</b>wledge
                <br />
                acc<b>e</b>ssible t<b>o</b> all
              </h2>
              <p className="font-circular-web text-base text-blue-50/80 leading-relaxed mb-6">
                We believe that reading should be an experience, not just a task.
                Every book in our library is carefully curated to inspire, educate,
                and entertain readers of all ages and backgrounds.
              </p>
              <p className="font-circular-web text-base text-blue-50/80 leading-relaxed">
                Whether you're looking for the latest bestsellers, timeless classics,
                or niche topics, Deku provides a seamless platform where every story
                finds its reader.
              </p>
            </div>
            <div className="space-y-6">
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                <h3 className="font-robert-medium text-xl text-blue-50 mb-3">
                  Curated Collections
                </h3>
                <p className="font-circular-web text-sm text-blue-50/70">
                  Expertly selected books across genres, ensuring quality content
                  for every reader.
                </p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                <h3 className="font-robert-medium text-xl text-blue-50 mb-3">
                  Cross-Platform Access
                </h3>
                <p className="font-circular-web text-sm text-blue-50/70">
                  Read on any device, anywhere. Your library travels with you.
                </p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
                <h3 className="font-robert-medium text-xl text-blue-50 mb-3">
                  Audio & Text Formats
                </h3>
                <p className="font-circular-web text-sm text-blue-50/70">
                  Choose your preferred format - read the text or listen on the go.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
