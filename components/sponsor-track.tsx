import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";

export default function SponsorTrack() {
  return (
    <section id="sponsor-track" className="w-full py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-white text-6xl font-bold mb-6 [text-shadow:0_2px_30px_rgba(0,0,0,0.8)]">
            Sponsor Track
          </h2>
          <div className="w-24 h-px bg-white/30 mx-auto"></div>
        </div>

        <ThreeDPhotoCarousel />
      </div>
    </section>
  );
}
