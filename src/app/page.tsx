import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { PackageDetails } from "@/components/package-details"
import { PackageMenu } from "@/components/package-menu"
import { ReviewSection } from "@/components/review-section"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Insight</h1>
          <p className="text-xl text-muted-foreground">full packages checklist</p>

          <div className="flex gap-2 max-w-md mx-auto mt-6">
            <Input placeholder="package name" className="flex-1" />
            <Button>Submit</Button>
          </div>
        </div>

        <Tabs defaultValue="details" className="w-full">
          <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
            <TabsTrigger
              value="details"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              package details
            </TabsTrigger>
            <TabsTrigger
              value="vulnerabilities"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              vulnerabilities
            </TabsTrigger>
            <TabsTrigger
              value="dependencies"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Dependencies
            </TabsTrigger>
            <TabsTrigger
              value="version"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Available version
            </TabsTrigger>
            <TabsTrigger
              value="dependency"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Dependency
            </TabsTrigger>
            <TabsTrigger
              value="label"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent"
            >
              Label
            </TabsTrigger>
          </TabsList>

          <TabsContent value="details">
            <PackageDetails />
          </TabsContent>

          <TabsContent value="dependencies">
            <PackageMenu />
          </TabsContent>

          <TabsContent value="vulnerabilities">
            <ReviewSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

