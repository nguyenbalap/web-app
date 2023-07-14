import React from "react";

export default async function Page({ params }: { params: { id: number } }) {
  console.log(params);
  return <div className="h-screen">Page {params.id}</div>;
}
