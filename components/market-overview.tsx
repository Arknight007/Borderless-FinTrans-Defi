"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const mockData = [
  { date: "Jan", btc: 42000, eth: 3200, sol: 140, total: 45340 },
  { date: "Feb", btc: 44500, eth: 3100, sol: 120, total: 47720 },
  { date: "Mar", btc: 47000, eth: 3300, sol: 130, total: 50430 },
  { date: "Apr", btc: 45000, eth: 3000, sol: 110, total: 48110 },
  { date: "May", btc: 49000, eth: 3500, sol: 150, total: 52650 },
  { date: "Jun", btc: 52000, eth: 3800, sol: 180, total: 55980 },
  { date: "Jul", btc: 56000, eth: 4000, sol: 200, total: 60200 },
]

export function MarketOverview() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Market Overview</CardTitle>
        <CardDescription>Track cryptocurrency market trends</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="all">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="btc">Bitcoin</TabsTrigger>
              <TabsTrigger value="eth">Ethereum</TabsTrigger>
              <TabsTrigger value="sol">Solana</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <select className="h-8 w-24 rounded-md border border-input bg-background px-3 py-1 text-sm ring-offset-background">
                <option>7D</option>
                <option>30D</option>
                <option>3M</option>
                <option>1Y</option>
                <option>All</option>
              </select>
            </div>
          </div>
          <TabsContent value="all" className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="total" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="btc" className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="btc" stroke="#f7931a" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="eth" className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="eth" stroke="#627eea" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          <TabsContent value="sol" className="h-[300px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sol" stroke="#00ffbd" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
