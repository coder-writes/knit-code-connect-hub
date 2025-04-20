
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function EventCountdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const nextEvent = new Date("2024-05-15"); // Hackathon date

    const calculateTimeLeft = () => {
      const difference = +nextEvent - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  return (
    <Card className="p-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
      <h3 className="text-xl font-bold mb-4">Next Event: Hackathon 2024</h3>
      <div className="grid grid-cols-4 gap-4 text-center">
        <div>
          <span className="text-3xl font-bold">{timeLeft.days}</span>
          <p className="text-sm">Days</p>
        </div>
        <div>
          <span className="text-3xl font-bold">{timeLeft.hours}</span>
          <p className="text-sm">Hours</p>
        </div>
        <div>
          <span className="text-3xl font-bold">{timeLeft.minutes}</span>
          <p className="text-sm">Minutes</p>
        </div>
        <div>
          <span className="text-3xl font-bold">{timeLeft.seconds}</span>
          <p className="text-sm">Seconds</p>
        </div>
      </div>
    </Card>
  );
}
