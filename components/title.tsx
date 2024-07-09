import React from "react";

function Title() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <h1 className="text-2xl font-medium">商品查查</h1>
      <p className="text-muted-foreground">
        上传图像或拍照以获取商品配料表和 AI 解读
      </p>
    </div>
  );
}

export default Title;
