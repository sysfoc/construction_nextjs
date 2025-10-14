type GalleryImage = {
  src: string
  alt: string
}

interface GallerySectionProps {
  id: string
  title: string
  images: GalleryImage[]
  subtitle?: string
}

export function GallerySection({ id, title, images, subtitle }: GallerySectionProps) {
  return (
    <section role="region" aria-labelledby={id} className="grid gap-2">
      <div className="grid gap-0.5">
        <h2
          id={id}
          className="text-sm md:text-base font-semibold tracking-tight text-balance text-[var(--page-heading)]"
        >
          {title}
        </h2>
        <p className="text-xs leading-5 text-[var(--paragraph-color)]">
          {subtitle ? `${subtitle} · ` : ""}
          {images.length} images
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-0">
        {images.map((img, idx) => (
          <div key={idx} className="relative w-full aspect-[4/3] overflow-hidden">
            <img
              src={img.src || "/placeholder.svg"}
              alt={img.alt}
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
              decoding="async"
              sizes="(min-width: 1280px) 16.6vw, (min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, 50vw"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
