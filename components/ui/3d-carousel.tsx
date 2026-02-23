"use client"

import { memo, useEffect, useLayoutEffect, useMemo, useState } from "react"
import {
  motion,
  useAnimation,
  useMotionValue,
  useTransform,
} from "framer-motion"

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect

type UseMediaQueryOptions = {
  defaultValue?: boolean
  initializeWithValue?: boolean
}

const IS_SERVER = typeof window === "undefined"

export function useMediaQuery(
  query: string,
  { defaultValue = false, initializeWithValue = true }: UseMediaQueryOptions = {}
): boolean {
  const getMatches = (query: string): boolean => {
    if (IS_SERVER) return defaultValue
    return window.matchMedia(query).matches
  }

  const [matches, setMatches] = useState<boolean>(() =>
    initializeWithValue ? getMatches(query) : defaultValue
  )

  const handleChange = () => setMatches(getMatches(query))

  useIsomorphicLayoutEffect(() => {
    const matchMedia = window.matchMedia(query)
    handleChange()
    matchMedia.addEventListener("change", handleChange)
    return () => matchMedia.removeEventListener("change", handleChange)
  }, [query])

  return matches
}

const SPONSOR_IMAGES = [
  "/sponsors/openai.png",
  "/sponsors/google.png",
  "/sponsors/nvidia.png",
  "/sponsors/tesla.png",
  "/sponsors/vercel.png",
  "/sponsors/groq.png",
  "/sponsors/mistral.png",
  "/sponsors/elevenlabs.png",
  "/sponsors/langchain.png",
  "/sponsors/perplexity.png",
  "/sponsors/cartesia.png",
  "/sponsors/modal.png",
  "/sponsors/warp.png",
  "/sponsors/zoom.png",
  "/sponsors/flutterflow.png",
  "/sponsors/neo.png",
  "/sponsors/pear.png",
  "/sponsors/luma.png",
]

const duration = 0.15
const transition = { duration, ease: [0.32, 0.72, 0, 1] as const }

const Carousel = memo(function Carousel({
  controls,
  cards,
}: {
  controls: ReturnType<typeof useAnimation>
  cards: string[]
}) {
  const isSmall  = useMediaQuery("(max-width: 640px)")
  const isMedium = useMediaQuery("(max-width: 1024px)")

  const cylinderWidth = isSmall ? 900 : isMedium ? 1800 : 2880
  const faceCount = cards.length
  const faceWidth = cylinderWidth / faceCount
  const radius = cylinderWidth / (2 * Math.PI)

  const rotation  = useMotionValue(0)
  const transform = useTransform(rotation, (v) => `rotate3d(0, 1, 0, ${v}deg)`)

  return (
    <div
      className="flex h-full items-center justify-center"
      style={{ perspective: `${radius * 3}px`, transformStyle: "preserve-3d", willChange: "transform" }}
    >
      <motion.div
        drag="x"
        className="relative flex h-full origin-center cursor-grab justify-center active:cursor-grabbing"
        style={{ transform, rotateY: rotation, width: cylinderWidth, transformStyle: "preserve-3d" }}
        onDrag={(_, info) => rotation.set(rotation.get() + info.offset.x * 0.05)}
        onDragEnd={(_, info) =>
          controls.start({
            rotateY: rotation.get() + info.velocity.x * 0.05,
            transition: { type: "spring", stiffness: 100, damping: 30, mass: 0.1 },
          })
        }
        animate={controls}
      >
        {cards.map((imgUrl, i) => (
          <motion.div
            key={`${imgUrl}-${i}`}
            className="absolute flex h-full origin-center items-center justify-center p-2"
            style={{
              width: `${faceWidth}px`,
              transform: `rotateY(${i * (360 / faceCount)}deg) translateZ(${radius}px)`,
            }}
          >
            <div className="w-full aspect-square rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center p-4">
              <motion.img
                src={imgUrl}
                alt={imgUrl}
                className="pointer-events-none w-full h-full object-contain brightness-0 invert"
                initial={{ filter: "blur(4px) brightness(0) invert(1)" }}
                animate={{ filter: "blur(0px) brightness(0) invert(1)" }}
                transition={transition}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
})

function ThreeDPhotoCarousel() {
  const controls = useAnimation()
  const cards = useMemo(() => SPONSOR_IMAGES, [])

  return (
    <div className="relative h-[60vh] md:h-[70vh] w-full overflow-hidden">
      <Carousel controls={controls} cards={cards} />
    </div>
  )
}

export { ThreeDPhotoCarousel }
