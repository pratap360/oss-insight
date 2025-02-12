import { Star } from "lucide-react"

export function PackageMenu() {
  const menuItems = [
    {
      label: "Menu Label",
      description: "Menu description.",
      rating: "A",
    },
    {
      label: "Menu Label",
      description: "Menu description.",
      rating: "A",
    },
    {
      label: "Menu Label",
      description: "Menu description.",
      rating: "A",
    },
    {
      label: "Menu Label",
      description: "Menu description.",
      rating: "A",
    },
  ]

  return (
    <div className="mt-6">
      {menuItems.map((item, index) => (
        <div key={index} className="flex items-start justify-between p-4 border-b last:border-b-0">
          <div className="flex items-start gap-2">
            <Star className="h-5 w-5 mt-1" />
            <div>
              <h3 className="font-medium">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </div>
          <div className="text-sm font-medium">{item.rating}</div>
        </div>
      ))}
    </div>
  )
}

