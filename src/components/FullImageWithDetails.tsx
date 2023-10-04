import Image, { StaticImageData } from 'next/image'

export function FullImageWithDetails({
  image,
  children,
}: {
  image: StaticImageData
  children: string
}) {
  return (
    <div className="relative my-8 lg:my-16 w-full">
      <Image {...image} alt={children} className='rounded-md' />
      <div>
        <p className="mt-0 pt-2 text-xs px-6">{children}</p>
      </div>
    </div>
  )
}
