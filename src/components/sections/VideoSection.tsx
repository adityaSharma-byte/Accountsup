import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { media } from "@/content/media";

export default function VideoSection() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Watch"
          title="See how AccountsUp works"
          subtitle="A 60-second look at the global finance partner behind your numbers."
        />
        <div className="mt-12 overflow-hidden rounded-3xl border border-line bg-navy shadow-xl">
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
      </Container>
    </section>
  );
}
