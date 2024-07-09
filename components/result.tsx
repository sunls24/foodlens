import React from "react";

function Result() {
  return (
    <div className="overflow-hidden rounded-lg border">
      <img
        src="/placeholder.svg"
        alt="uploaded or captured image"
        className="aspect-video w-full object-cover"
      />
      <div className="bg-muted p-4">
        <div className="flex items-center justify-between border-b pb-2">
          <p className="font-medium text-muted-foreground">配料表</p>
          <div className="rounded-2xl bg-primary px-3 py-1 text-sm text-primary-foreground">
            合格
          </div>
        </div>
        <div className="mt-2 space-y-4">
          <div>
            <h3 className="text-sm font-medium">主要成分</h3>
            <p className="text-xs text-muted-foreground">水，面粉</p>
            <p className="text-xs text-muted-foreground">主要成分是水</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold">添加剂</h3>
            <p className="text-xs text-muted-foreground">苯甲酸钠，山梨酸钾</p>
            <p className="text-xs text-muted-foreground">主要防腐作用</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
