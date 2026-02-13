"use client";
export default function Movie() {

  if(document.readyState === "loading") {
    return (
     <div className="min-h-screen w-screen bg-[#232425] flex items-center justify-center">
        <p className="text-lg font-bold text-[#d4d4d4]">Loading Career Hub...</p>
      </div>
    )
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <iframe src="/career-hub-app" className="w-full h-full">Social Links Coming Soon!</iframe>
    </div>
  );
}