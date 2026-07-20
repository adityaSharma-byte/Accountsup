import SectionHeading from "@/components/ui/SectionHeading";
import { media } from "@/content/media";

export default function VideoSection() {
  return (
    <section className="overflow-hidden bg-navy py-16 text-white sm:py-20">
      <div className="container-x">
        <SectionHeading
          eyebrow="Watch"
          title="See how AccountsUp works"
          subtitle="A cinematic look at the global finance partner behind your numbers."
          light
        />
      </div>

      {/* Full-bleed on mobile, ~70% of the viewport on desktop */}
      <div className="mt-10 sm:mt-14">
        <div className="mx-auto w-full overflow-hidden bg-black shadow-2xl ring-1 ring-white/10 sm:w-[92%] sm:max-w-6xl sm:rounded-2xl lg:w-[70%]">
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
      </div>
    </section>
  );
}
