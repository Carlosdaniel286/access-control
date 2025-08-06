import { type CarouselApi} from "@/components/ui/carousel";


export type CarouselProps = {
children: React.ReactNode[]
onCarouselApi?: (api:CarouselApi | undefined) => void;
}

//api: EmblaCarouselType | undefined