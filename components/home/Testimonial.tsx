import { Testimonial } from "@/types/testimonial";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

interface TestimonialProps {
  testimonial: Testimonial;
}

export default function Testimonial({ testimonial }: TestimonialProps) {
  return (
    <Card>
      <CardContent className="py-6">
        <p className="mb-6 text-muted-foreground text-sm">{`"${testimonial.testimonial}"`}</p>
        <div className="flex gap-4 items-center">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <Image
              src={testimonial.profileSrc}
              alt={testimonial.name}
              width={40}
              height={40}
            />
          </div>
          <div>
            <p className="text-foreground text-sm font-medium">{testimonial.name}</p>
            <p className="text-muted-foreground text-xs">{testimonial.position}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
