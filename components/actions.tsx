import React from "react";
import { Button } from "@/components/ui/button";
import { Camera, ImageUp } from "lucide-react";

function Actions() {
  return (
    <div className="flex items-center justify-center space-x-4">
      <Button className="w-1/2">
        <ImageUp className="mr-2" strokeWidth={1.8} />
        上传图像
      </Button>
      <Button variant="secondary" className="w-1/2">
        <Camera className="mr-2" strokeWidth={1.8} />
        直接拍照
      </Button>
    </div>
  );
}

export default Actions;
