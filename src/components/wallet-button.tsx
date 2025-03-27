import { Button } from "@/components/ui/button"
import { useWallet } from "@/hooks/use-wallet"
import { Wallet } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export function WalletButton() {
  const { connected, publicKey, connect, disconnect } = useWallet()
  const { toast } = useToast()

  const handleClick = async () => {
    try {
      if (connected) {
        await disconnect()
        toast({
          title: "Wallet Disconnected",
          description: "Your wallet has been disconnected successfully."
        })
      } else {
        const response = await connect()
        if (!response) {
          toast({
            title: "Wallet Not Found",
            description: "Please install Phantom Wallet to continue.",
            variant: "destructive"
          })
          return
        }
        toast({
          title: "Wallet Connected",
          description: "Your wallet has been connected successfully."
        })
      }
    } catch (error) {
      toast({
        title: "Connection Error",
        description: "Failed to connect wallet. Please try again.",
        variant: "destructive"
      })
    }
  }

  return (
    <Button 
      onClick={handleClick} 
      className="flex items-center gap-2 bg-primary text-black hover:bg-primary/90"
      size="sm"
    >
      <Wallet className="h-4 w-4" />
      {connected ? `${publicKey?.slice(0, 4)}...${publicKey?.slice(-4)}` : "Connect Wallet"}
    </Button>
  )
}