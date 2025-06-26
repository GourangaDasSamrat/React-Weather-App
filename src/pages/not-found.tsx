import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useTheme } from "@/context/theme-provider";
import { ArrowLeft, Cloud, CloudRain, CloudSnow, Home } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(10);
  const { theme } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <Card className="w-full max-w-md p-8 text-center relative overflow-hidden">
        {/* Animated Weather Icons Background */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="animate-float-slow absolute -top-4 left-4">
            <Cloud className="w-16 h-16" />
          </div>
          <div className="animate-float-medium absolute top-1/4 right-4">
            <CloudRain className="w-12 h-12" />
          </div>
          <div className="animate-float-fast absolute bottom-4 left-1/4">
            <CloudSnow className="w-10 h-10" />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center">
          <div
            className={`text-[10rem] font-bold mb-2 select-none pointer-events-none leading-none ${
              theme === "dark"
                ? "bg-gradient-to-b from-blue-400 to-blue-600"
                : "bg-gradient-to-b from-blue-500 to-blue-700"
            } bg-clip-text text-transparent animate-pulse opacity-60`}
          >
            404
          </div>
          <h1 className="text-4xl font-bold tracking-tight animate-in slide-in-from-top duration-700 mb-2">
            Page Not Found
          </h1>
          <p className="text-muted-foreground animate-in slide-in-from-bottom duration-700 delay-200 mb-6">
            Oops! Looks like you've wandered into cloudy territory.
          </p>

          <div className="space-y-6 animate-in slide-in-from-bottom duration-700 delay-500 w-full">
            <p className="text-sm text-muted-foreground">
              Weather forecast: Redirecting to home in {countdown} seconds...
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="outline"
                onClick={() => navigate(-1)}
                className="group transition-all duration-300 hover:border-blue-500"
              >
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
                Go Back
              </Button>
              <Button
                onClick={() => navigate("/")}
                className="group transition-all duration-300 hover:bg-blue-600"
              >
                <Home className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
                Go Home
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
