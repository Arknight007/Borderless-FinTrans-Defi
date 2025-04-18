"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowUpRight, ArrowDownRight, Search } from "lucide-react"

const cryptos = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    symbol: "BTC",
    price: 56842.32,
    change: 2.34,
    marketCap: 1102.45,
    volume: 32.5,
  },
  {
    id: "ethereum",
    name: "Ethereum",
    symbol: "ETH",
    price: 3245.67,
    change: 3.56,
    marketCap: 389.12,
    volume: 18.9,
  },
  {
    id: "solana",
    name: "Solana",
    symbol: "SOL",
    price: 138.92,
    change: -1.24,
    marketCap: 56.78,
    volume: 5.2,
  },
  {
    id: "cardano",
    name: "Cardano",
    symbol: "ADA",
    price: 0.58,
    change: 0.87,
    marketCap: 20.45,
    volume: 1.8,
  },
  {
    id: "binancecoin",
    name: "Binance Coin",
    symbol: "BNB",
    price: 312.45,
    change: -0.32,
    marketCap: 48.23,
    volume: 2.1,
  },
  {
    id: "ripple",
    name: "XRP",
    symbol: "XRP",
    price: 0.52,
    change: 1.23,
    marketCap: 27.89,
    volume: 3.4,
  },
  {
    id: "polkadot",
    name: "Polkadot",
    symbol: "DOT",
    price: 6.78,
    change: 2.56,
    marketCap: 8.45,
    volume: 0.9,
  },
]

export function TopCryptos() {
  const [search, setSearch] = useState("")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const filteredCryptos = cryptos.filter(
    (crypto) =>
      crypto.name.toLowerCase().includes(search.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Top Cryptocurrencies</CardTitle>
        <CardDescription>Real-time prices of top cryptocurrencies</CardDescription>
        <div className="relative mt-2">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search cryptocurrencies..."
            className="pl-8"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredCryptos.map((crypto) => (
            <div key={crypto.id} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="font-medium">{crypto.name}</div>
                <div className="text-sm text-muted-foreground">{crypto.symbol}</div>
              </div>
              <div className="text-right">
                <div className="font-medium">${crypto.price.toLocaleString()}</div>
                <div
                  className={`flex items-center justify-end text-sm ${
                    crypto.change >= 0 ? "text-green-500" : "text-red-500"
                  }`}
                >
                  {crypto.change >= 0 ? (
                    <ArrowUpRight className="mr-1 h-3 w-3" />
                  ) : (
                    <ArrowDownRight className="mr-1 h-3 w-3" />
                  )}
                  {Math.abs(crypto.change)}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
