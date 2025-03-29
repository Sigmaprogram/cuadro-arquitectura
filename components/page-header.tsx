interface PageHeaderProps {
  title: string
  description?: string
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="relative flex min-h-[40vh] items-center justify-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="grid h-full w-full grid-cols-6 grid-rows-4">
          {Array(24)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="border border-white/5" />
            ))}
        </div>
      </div>
      <div className="container relative z-10 px-4 py-24 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-block border-2 border-white p-1 mb-4">
            <span className="bg-white px-3 py-1 text-xs text-black">CUADRO ARQUITECTURA</span>
          </div>
          <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">{title}</h1>
          {description && <p className="mx-auto mt-6 max-w-2xl text-white/70 text-lg">{description}</p>}
        </div>
      </div>
    </section>
  )
}

