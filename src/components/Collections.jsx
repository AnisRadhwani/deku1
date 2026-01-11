import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { TiLocationArrow } from "react-icons/ti";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Collections = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Animate video on scroll
    gsap.fromTo(
      "#collections-video",
      {
        scale: 1.2,
        opacity: 0.8,
      },
      {
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate collection cards
    gsap.fromTo(
      ".collection-card",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".collections-grid",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const collections = [
    {
      id: "bestsellers",
      title: "Bestsellers",
      description: "The most popular books everyone's talking about",
      count: "2,500+",
      video: "videos/hero-4.mp4",
      link: "/shop",
    },
    {
      id: "fantasy",
      title: "Fantasy & Sci-Fi",
      description: "Epic adventures in worlds beyond imagination",
      count: "1,800+",
      video: "videos/feature-2.mp4",
      link: "/shop",
    },
    {
      id: "business",
      title: "Business & Finance",
      description: "Master the art of entrepreneurship and wealth",
      count: "950+",
      video: "videos/feature-1.mp4",
      link: "/shop",
    },
    {
      id: "self-help",
      title: "Self-Development",
      description: "Transform your life with these empowering reads",
      count: "1,200+",
      video: "videos/feature-3.mp4",
      link: "/shop",
    },
  ];

  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden bg-black">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-40 -right-40 h-96 w-96 rounded-full bg-violet-300 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-300 blur-3xl" />
      </div>

      {/* Hero Video Section */}
      <div
        ref={sectionRef}
        className="relative h-screen w-screen overflow-hidden"
      >
        <div id="collections-video" className="absolute inset-0">
          <video
            ref={videoRef}
            src="videos/hero-4.mp4"
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Overlay Content */}
        <div className="absolute inset-0 z-10 flex items-center justify-center">
          <div className="text-center px-5 max-w-4xl">
            <p className="font-general text-xs uppercase text-blue-50/70 mb-5">
              Explore Collections
            </p>
            <AnimatedTitle
              title="Curat<b>e</b>d C<b>o</b>llections <br /> f<b>o</b>r Every R<b>e</b>ader"
              containerClass="!text-blue-50"
            />
            <p className="font-circular-web text-lg text-blue-50/80 mt-8 max-w-2xl mx-auto">
              Discover handpicked collections designed to match your interests
              and reading preferences.
            </p>
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="relative z-10 py-32 px-5">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="special-font text-4xl md:text-5xl text-blue-50 mb-4">
              F<b>e</b>atured C<b>o</b>llections
            </h2>
            <p className="font-circular-web text-lg text-blue-50/70 max-w-2xl mx-auto">
              Each collection is carefully curated to bring you the best books
              in every genre
            </p>
          </div>

          <div className="collections-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {collections.map((collection) => (
              <Link
                key={collection.id}
                to={collection.link}
                className="collection-card group relative block overflow-hidden rounded-lg bg-white/5 border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-300 hover:scale-105"
              >
                <div className="relative aspect-video overflow-hidden">
                  <video
                    src={collection.video}
                    autoPlay
                    loop
                    muted
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors" />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-violet-300/90 text-black rounded-full text-xs font-general uppercase">
                    {collection.count} Books
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-robert-medium text-2xl text-blue-50 mb-2">
                    {collection.title}
                  </h3>
                  <p className="font-circular-web text-sm text-blue-50/70 mb-4">
                    {collection.description}
                  </p>
                  <div className="flex items-center gap-2 text-violet-300">
                    <span className="font-general text-xs uppercase">
                      Explore Collection
                    </span>
                    <TiLocationArrow className="transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 py-32 px-5">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center p-12 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
            <h2 className="special-font text-4xl md:text-5xl text-blue-50 mb-6">
              St<b>a</b>rt Y<b>o</b>ur J<b>o</b>urney
            </h2>
            <p className="font-circular-web text-lg text-blue-50/80 mb-8 max-w-2xl mx-auto">
              Join thousands of readers exploring our curated collections. Find
              your next favorite book today.
            </p>
            <Link to="/shop">
              <Button
                title="Browse All Collections"
                rightIcon={<TiLocationArrow />}
                containerClass="bg-violet-300 text-black hover:bg-violet-300/90"
              />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Collections;
