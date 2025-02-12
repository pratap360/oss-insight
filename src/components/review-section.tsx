import { Star } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function ReviewSection() {
  const reviews = [
    {
      title: "Review title",
      body: "Review body",
      reviewer: "Reviewer name",
      date: "Date",
      rating: 4,
    },
    {
      title: "Review title",
      body: "Review body",
      reviewer: "Reviewer name",
      date: "Date",
      rating: 3,
    },
    {
      title: "Review title",
      body: "Review body",
      reviewer: "Reviewer name",
      date: "Date",
      rating: 5,
    },
    {
      title: "Review title",
      body: "Review body",
      reviewer: "Reviewer name",
      date: "Date",
      rating: 4,
    },
  ]

  return (
    <div className="grid sm:grid-cols-2 gap-4 mt-6">
      {reviews.map((review, index) => (
        <div key={index} className="p-4 rounded-lg border bg-card text-card-foreground">
          <div className="flex gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < review.rating ? "fill-primary" : "fill-muted"}`} />
            ))}
          </div>
          <h3 className="font-semibold mb-1">{review.title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{review.body}</p>
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src="/placeholder.svg" />
              <AvatarFallback>RN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{review.reviewer}</p>
              <p className="text-xs text-muted-foreground">{review.date}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

