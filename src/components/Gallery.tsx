
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
      caption: "Coding Workshop 2023"
    },
    {
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      caption: "Hackathon Winners"
    },
    {
      url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
      caption: "Tech Talk Series"
    }
  ];

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Card className="relative overflow-hidden aspect-video">
      <div className="absolute inset-0">
        <img
          src={images[currentImage].url}
          alt={images[currentImage].caption}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
          <p className="text-white p-4 text-lg font-medium">
            {images[currentImage].caption}
          </p>
        </div>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <Button
          variant="outline"
          size="icon"
          onClick={previousImage}
          className="bg-white/80 hover:bg-white"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextImage}
          className="bg-white/80 hover:bg-white"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
