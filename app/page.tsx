import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MarketOverview } from "@/components/market-overview"
import { PortfolioSummary } from "@/components/portfolio-summary"
import { RecentTransactions } from "@/components/recent-transactions"
import { TopCryptos } from "@/components/top-cryptos"
import { ModeToggle } from "@/components/mode-toggle"

export const metadata: Metadata = {
  title: "CryptoVest - Your Crypto Investment Dashboard",
  description: "Track, analyze, and manage your cryptocurrency investments",
}

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary"
            >
              <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
            </svg>
            <span className="text-xl font-bold">CryptoVest</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="font-medium">
              Dashboard
            </Link>
            <Link href="/market" className="font-medium">
              Market
            </Link>
            <Link href="/portfolio" className="font-medium">
              Portfolio
            </Link>
            <Link href="/transactions" className="font-medium">
              Transactions
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Button asChild variant="outline" size="sm">
              <Link href="/login">Login</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="/signup">Sign Up</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="col-span-full lg:col-span-3">
              <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
              <div className="grid gap-6">
                <MarketOverview />
                <div className="grid gap-6 md:grid-cols-2">
                  <PortfolioSummary />
                  <RecentTransactions />
                </div>
              </div>
            </div>
            <div className="col-span-full lg:col-span-1">
              <TopCryptos />
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CryptoVest. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground hover:underline">
              Terms
            </Link>
            <Link href="/privacy" className="text-sm text-muted-foreground hover:underline">
              Privacy
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
