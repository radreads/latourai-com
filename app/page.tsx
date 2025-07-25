import { Button } from "@/components/ui/button"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-stone-50 flex items-center justify-center px-4">
      <div className="text-center space-y-8 max-w-2xl">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
          <span className="text-stone-800">LaTour </span>
          <span className="text-[#EC3E72]">AI</span>
        </h1>

        <p className="text-xl md:text-2xl text-stone-700 font-light leading-relaxed font-serif">
          AI training and strategy for the buyside.
        </p>

        <div className="pt-4">
          <Button
            size="lg"
            className="bg-[#3293B5] hover:bg-[#2a7a9a] text-white px-8 py-3 text-lg font-medium rounded-md transition-all duration-200 hover:shadow-lg"
          >
            Book a consultation
          </Button>
        </div>
      </div>
    </div>
  )
} 