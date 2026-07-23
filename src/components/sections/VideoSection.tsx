import { media } from "@/content/media";

export default function VideoSection() {
  return (
    <section className="bg-white pb-14 pt-10 sm:pb-20 sm:pt-12">
      {/* Full-bleed on mobile, ~72% of the viewport on desktop. Autoplays muted
          (browsers require muted for autoplay) — visitors can unmute for the VO. */}
      <div className="mx-auto w-full overflow-hidden bg-black shadow-2xl ring-1 ring-black/5 sm:w-[92%] sm:max-w-6xl sm:rounded-3xl lg:w-[72%]">
        <video
          className="aspect-video w-full"
          autoPlay
          muted
          controls
          playsInline
          preload="auto"
          poster={media.videoPoster}
        >
          <source src={media.brandVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
