import { useState, useEffect } from "react"

declare global {
  interface Window {
    solana?: any
  }
}

export function useWallet() {
  const [wallet, setWallet] = useState<any>(null)
  const [connected, setConnected] = useState(false)
  const [publicKey, setPublicKey] = useState<string | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWallet(window.solana)
    }
  }, [])

  const connect = async () => {
    try {
      if (!wallet) {
        window.open("https://phantom.app/", "_blank")
        return
      }

      const response = await wallet.connect()
      setConnected(true)
      setPublicKey(response.publicKey.toString())
      return response
    } catch (error) {
      console.error("Error connecting wallet:", error)
    }
  }

  const disconnect = async () => {
    try {
      if (wallet) {
        await wallet.disconnect()
        setConnected(false)
        setPublicKey(null)
      }
    } catch (error) {
      console.error("Error disconnecting wallet:", error)
    }
  }

  return {
    wallet,
    connected,
    publicKey,
    connect,
    disconnect
  }
}