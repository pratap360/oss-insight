import Image from "next/image"

export function PackageDetails() {
  return (
    <div className="grid gap-8 mt-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative aspect-video">
          <Image src="/placeholder.svg" alt="Package visualization" fill className="object-cover rounded-lg" />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-2">Heading</h2>
          <h3 className="text-xl text-muted-foreground mb-4">Subheading</h3>
          <p className="text-muted-foreground">
            Body text for your whole article or post. We will put in some lorem ipsum to show how a filled-out page might
            look.
          </p>
        </div>
      </div>
    </div>
  )
}

