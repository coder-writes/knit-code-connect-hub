
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function Gallery() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    {
      url: "https://img.freepik.com/free-photo/colleagues-working-project-discussing-details_114579-2817.jpg?t=st=1745057760~exp=1745061360~hmac=abb2cf80238d400f257620f6e12b12b9cbfac438c6a8dbff3af8d871138d27c5&w=1380",
      caption: "Coding Workshop 2023"
    },
    {
      url: "https://img.freepik.com/free-vector/hackathon-technology-infographic-with-flat-icons_88138-961.jpg?t=st=1745057843~exp=1745061443~hmac=1c0ec3eff75ded2d7d578b5a93a042453d779d70b1bb4b410d54e08e42abae87&w=1380",
      caption: "Hackathon Winners"
    },
    {
      url: "https://img.freepik.com/free-photo/diverse-multiethnic-businesspeople-discussing-management-strategy-online-videocall_482257-7235.jpg?t=st=1745057926~exp=1745061526~hmac=9ac14eab6415d29b39a2394a17d44b51d4dfc584a4a993b9c35d7eceed2c0566&w=1380",
      caption: "Tech Talk Series"
    },
    {
      url: "https://img.freepik.com/free-photo/meeting-developers_1098-19850.jpg?t=st=1745057992~exp=1745061592~hmac=e7153124bb231b83476817bc6904e56d71628c34eba5e85a9c0e616383db9dea&w=1380",
      caption: "Artificial Intelligence Workshop"
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
