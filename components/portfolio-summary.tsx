import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowUpRight } from "lucide-react"

export function PortfolioSummary() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Portfolio Summary</CardTitle>
        <CardDescription>Your investment overview</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          <div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-muted-foreground">Total Balance</div>
              <div className="flex items-center gap-1 text-sm text-green-500">
                <ArrowUpRight className="h-4 w-4" />
                <span>+5.2%</span>
              </div>
            </div>
            <div className="text-2xl font-bold">$12,680.24</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Invested</div>
              <div className="font-medium">$10,000.00</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Profit/Loss</div>
              <div className="font-medium text-green-500">+$2,680.24</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Assets</div>
              <div className="font-medium">5</div>
            </div>
            <div className="space-y-1">
              <div className="text-sm text-muted-foreground">Transactions</div>
              <div className="font-medium">24</div>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-orange-100 p-1 dark:bg-orange-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-orange-500"
                  >
                    <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727" />
                  </svg>
                </div>
                <div className="font-medium">Bitcoin</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="font-medium">$6,240.12</div>
                <div className="text-sm text-green-500">+3.2%</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-blue-100 p-1 dark:bg-blue-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-blue-500"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    <path d="M9 10.5h6m-6 3h6" />
                  </svg>
                </div>
                <div className="font-medium">Ethereum</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="font-medium">$4,120.87</div>
                <div className="text-sm text-green-500">+7.8%</div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="rounded-full bg-green-100 p-1 dark:bg-green-900">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4 text-green-500"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    <path d="M7 13.5l3-3 2 2 5-5" />
                  </svg>
                </div>
                <div className="font-medium">Solana</div>
              </div>
              <div className="flex items-center gap-1">
                <div className="font-medium">$2,319.25</div>
                <div className="text-sm text-red-500">-1.4%</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
