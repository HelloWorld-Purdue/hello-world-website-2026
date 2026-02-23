import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";

export default function SponsorTrack() {
  return (
    <section id="sponsor-track" className="w-full py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-6xl font-bold mb-6 [text-shadow:0_2px_30px_rgba(0,0,0,0.8)]">
            Sponsor Track
          </h2>
          <div className="w-24 h-px bg-white/30 mx-auto mb-6"></div>
          <p className="text-white/80 text-lg [text-shadow:0_1px_12px_rgba(0,0,0,0.7)]">
            Drag to explore the companies powering HelloWorld 2026.
          </p>
        </div>

        <ThreeDPhotoCarousel />
      </div>
    </section>
  );
}
