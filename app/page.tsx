import { ReasonItem, ServiceItem, Testimonial } from "@/components/home";
import PartnerItem from "@/components/home/PartnerItem";
import { Button } from "@/components/ui/button";
import { testimonials } from "@/constants/testimonials";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  
  return (
    <main className="px-8 md:px-16 lg:px-32">
      {/* Hero */}
      <section className="flex flex-col items-center text-center py-8 md:py-16">
        <p className="text-xs md:text-sm lg:text-base text-primary font-medium">
          Build Your Career With Lutra
        </p>
        <h1 className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium my-3 sm:my-4 max-w-[300px] md:max-w-[450px] lg:max-w-[600px]">
          Ready For New Experience With Lutra
        </h1>
        <p className="text-xs md:text-sm lg:text-base text-muted-foreground max-w-[300px] md:max-w-[450px] lg:max-w-[600px] mb-8 lg:mb-16">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod aut,
          ipsa voluptatum facilis, nihil totam porro dicta iure quo amet.
        </p>

        <div className="flex gap-4">
          <Button asChild size="lg">
            <Link href="/">Find a Job</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/">Take a Course</Link>
          </Button>
        </div>
      </section>

      {/* Why choose us */}
      <section className="flex flex-col xl:flex-row justify-between gap-20 xl:gap-40 py-16">
        <div className="relative h-fit">
          <Image
            src="/images/reason.jpg"
            alt="Why choose Lutra"
            width={450}
            height={300}
            className="rounded-tl-3xl w-full"
          />
          <div className="bg-primary absolute -bottom-8 xl:bottom-0 right-0 xl:-right-24 px-8 py-4 max-w-[250px] md:max-w-[300px] rounded-tr-3xl">
            <p className="text-white text-xs md:text-base font-medium">
              We help you to build your career and improve your skills.
            </p>
          </div>
        </div>
        <div className="max-w-[400px] md:max-w-[500px]">
          <p className="text-primary text-xs sm:text-base font-medium mb-2">Why choose us</p>
          <h3 className="text-foreground text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
            We help you to build your career from the ground up
          </h3>
          <ReasonItem
            number={1}
            title="Improve Your Skill"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod aut,
          ipsa voluptatum facilis, nihil totam porro dicta iure quo amet."
          />
          <ReasonItem
            number={2}
            title="Find a Job"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod aut,
          ipsa voluptatum facilis, nihil totam porro dicta iure quo amet."
          />
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <p className="text-primary text-xs md:text-sm lg:text-base font-medium mb-2">Our Services</p>
          <h3 className="text-foreground text-2xl md:text-3xl lg:text-4xl font-medium mb-2">
            What We Offer
          </h3>
          <p className="text-muted-foreground text-xs lg:text-sm max-w-[300px] md:max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            ratione consequatur nihil delectus, consequuntur voluptates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
          <ServiceItem
            title="Find suitable jobs"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias harum similique voluptas repudiandae ex consequatur itaque, minima rerum."
            icon='briefcase'
          />
          <ServiceItem
            title="New updated course"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias harum similique voluptas repudiandae ex consequatur itaque, minima rerum."
            icon='lineChart'
          />
          <ServiceItem
            title="Connect with best company"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias harum similique voluptas repudiandae ex consequatur itaque, minima rerum."
            icon='link'
          />
          <ServiceItem
            title="Government official partner"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus molestias harum similique voluptas repudiandae ex consequatur itaque, minima rerum."
            icon='building'
          />
        </div>
      </section>

      {/* Patners */}
      <section className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between py-16 gap-16">
        <div className="max-w-[400px] md:max-w-[500px] lg:w-1/2">
          <h3 className="text-foreground text-center lg:text-left text-xl md:text-3xl lg:text-4xl font-medium mb-2">
            Partner with Indonesian&apos;s companies and governments.
          </h3>
          <p className="text-muted-foreground text-center lg:text-left text-xs lg:text-sm mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            molestias harum similique voluptas repudiandae ex consequatur
            itaque, minima rerum. Eaque ratione consequatur nihil delectus,
            consequuntur voluptates.
          </p>

          <div className="flex justify-center lg:justify-start gap-4">
            <Button asChild size="lg">
              <Link href="/">Know More</Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <Link href="/">Contact Us</Link>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-8">
          <PartnerItem icon="dribbble" />
          <PartnerItem icon="facebook" />
          <PartnerItem icon="figma" />
          <PartnerItem icon="framer" />
          <PartnerItem icon="github" />
          <PartnerItem icon="gitlab" />
        </div>
      </section>

      {/* Testimonials */}
      <section className="flex flex-col items-center py-16">
        <div className="mb-10 text-center">
          <p className="text-sm lg:text-base text-primary font-medium mb-1">What People Says</p>
          <h3 className="text-foreground font-medium text-2xl md:text-3xl lg:text-4xl mb-2">
            User Testimonials
          </h3>
          <p className="text-muted-foreground text-xs lg:text-sm max-w-[500px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            ratione consequatur nihil delectus, consequuntur voluptates.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </section>
    </main>
  );
}
