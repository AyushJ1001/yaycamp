import { Calendar, MapPin, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";

export default function HomePage() {
  return (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to YayCamp
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Discover, share, and join amazing camping experiences. Connect
                with fellow outdoor enthusiasts and create unforgettable
                memories.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link href="/dashboard">Get Started</Link>
              </Button>
              <Button variant="outline">Learn More</Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-gray-100 py-12 md:py-24 lg:py-32 dark:bg-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose YayCamp?
          </h2>
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
              <Users className="mb-2 h-8 w-8" />
              <h3 className="text-xl font-bold">Connect with Campers</h3>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                Meet like-minded outdoor enthusiasts and make new friends.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
              <MapPin className="mb-2 h-8 w-8" />
              <h3 className="text-xl font-bold">Discover New Spots</h3>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                Explore hidden gems and popular camping destinations.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border-gray-800 p-4">
              <Calendar className="mb-2 h-8 w-8" />
              <h3 className="text-xl font-bold">Plan Your Adventure</h3>
              <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                Easily organize and join camping trips with our intuitive
                platform.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Camping Adventure?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Join YayCamp today and connect with fellow campers, discover new
                locations, and create lasting memories.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  className="max-w-lg flex-1"
                  placeholder="Enter your email"
                  type="email"
                />
                <Button type="submit">Sign Up</Button>
              </form>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                By signing up, you agree to our{" "}
                <Link className="underline underline-offset-2" href="#">
                  Terms & Conditions
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
