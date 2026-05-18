"use client";

import * as React from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";

const images = [
  "https://images.tcdn.com.br/img/img_prod/1358169/690b881f7089e_banner_fitness_mobile.png",
  "https://adaptive-images.uooucdn.com.br/tr:w-1920,h-1500,c-at_max,pr-true,q-80/a22573-ogxytxlxwt0/g/60/24/88/a6eba23ec406f5c23a1bda6aba.jpg",
  "https://www.armybr.com.br/cdn/shop/files/banner-shaped-to-move-B-mobile_9323e828-fa79-4275-858b-0f3d8e43645d.jpg?v=1777571072&width=750",
  "https://www.useglowsfitness.com.br/app-glows/assets/images/dinamica/album/65/x65-banner-categorias-mobile-130226-f8a418.png.pagespeed.ic.nsE_8TDaqN.jpg",
  "https://www.fffuel.co/images/dddepth-preview/dddepth-012.jpg",
];
export default function CarouselWithProgress() {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  const progress = (current * 100) / count;

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="mx-auto max-w-sm py-4">
      <Carousel className="w-full max-w-sm" setApi={setApi}>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image}>
              <img
                alt="dddepth-248"
                className="size-full rounded-xl object-cover"
                src={image}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Progress className="mt-5 mx-auto w-24" value={progress} />
    </div>
  );
}
