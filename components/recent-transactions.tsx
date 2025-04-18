import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDownLeft, ArrowUpRight } from "lucide-react"

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Your latest crypto transactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
              <ArrowUpRight className="h-4 w-4 text-green-500" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <div className="font-medium">Bought Bitcoin</div>
                <div className="font-medium">+0.0025 BTC</div>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div>Mar 21, 2023</div>
                <div>$120.50</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-red-100 p-2 dark:bg-red-900">
              <ArrowDownLeft className="h-4 w-4 text-red-500" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <div className="font-medium">Sold Ethereum</div>
                <div className="font-medium">-0.5 ETH</div>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div>Mar 18, 2023</div>
                <div>$1,650.00</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
              <ArrowUpRight className="h-4 w-4 text-green-500" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <div className="font-medium">Bought Solana</div>
                <div className="font-medium">+2.5 SOL</div>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div>Mar 15, 2023</div>
                <div>$275.00</div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-green-100 p-2 dark:bg-green-900">
              <ArrowUpRight className="h-4 w-4 text-green-500" />
            </div>
            <div className="flex-1 space-y-1">
              <div className="flex items-center justify-between">
                <div className="font-medium">Bought Ethereum</div>
                <div className="font-medium">+0.25 ETH</div>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div>Mar 12, 2023</div>
                <div>$825.00</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
