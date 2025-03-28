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
          description: "Your wallet has been disconnected successfully.",
          className: "bg-secondary text-white"
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
          description: "Your wallet has been connected successfully.",
          className: "bg-primary text-white"
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
      className={`
        relative flex items-center gap-2 font-medium transition-all duration-200
        ${connected 
          ? 'bg-secondary hover:bg-secondary/90 text-white' 
          : 'bg-primary hover:bg-primary/90 text-white'
        }
        transform hover:scale-105 active:scale-95
        before:absolute before:inset-0 before:border-2
        ${connected 
          ? 'before:border-secondary' 
          : 'before:border-primary'
        }
        before:opacity-0 hover:before:opacity-100
        before:rounded-md before:transition-opacity
      `}
      size="sm"
    >
      <Wallet className={`h-4 w-4 ${connected ? 'animate-pulse' : ''}`} />
      {connected ? (
        <span className="font-mono">
          {`${publicKey?.slice(0, 4)}...${publicKey?.slice(-4)}`}
        </span>
      ) : (
        "Connect Wallet"
      )}
    </Button>
  )
}