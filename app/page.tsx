import Image from "next/image";

export default function Home() {
  return (
    <div className="hero min-h-screen bg-linear-to-b from-base-100 to-base-200">
      <div className="hero-content flex-col gap-8 px-6 text-center">
        <Image
          src="/logo.png"
          alt="Gifted Emporium logo"
          width={200}
          height={200}
          priority
          className="h-24 w-24 rounded-2xl object-contain drop-shadow-md sm:h-32 sm:w-32 md:h-40 md:w-40"
        />
        <h1 className="font-bold tracking-tight">
          <span className="text-rotate text-primary text-2xl sm:text-4xl md:text-6xl">
            <span>
              <span>Hello</span>
              <span>Welcome to</span>
              <span>Gifted Emporium</span>
            </span>
          </span>
        </h1>
      </div>
    </div>
  );
}
