import { useMediaQuery } from "@/hooks/useMediaQuery";

export default function useScreen() {
  const isSmall = useMediaQuery("(min-width: 640px)");
  const isMedium = useMediaQuery("(min-width: 768px)");
  const isLarge = useMediaQuery("(min-width: 1024px)");
  const isXL = useMediaQuery("(min-width: 1280px)");
  const is2XL = useMediaQuery("(min-width: 1536px)");

  return {
    isSmall,
    isMedium,
    isLarge,
    isXL,
    is2XL,
  };
}
