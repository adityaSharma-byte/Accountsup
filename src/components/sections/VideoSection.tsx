import { media } from "@/content/media";

export default function VideoSection() {
  return (
    <section className="bg-white py-12 sm:py-16">
      {/* Full-bleed on mobile, ~70% of the viewport on desktop — no heading, no colored band. */}
      <div className="mx-auto w-full overflow-hidden bg-black shadow-2xl ring-1 ring-black/5 sm:w-[92%] sm:max-w-6xl sm:rounded-2xl lg:w-[70%]">
        <video
          className="aspect-video w-full"
          controls
          playsInline
          preload="metadata"
          poster={media.videoPoster}
        >
          <source src={media.brandVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
