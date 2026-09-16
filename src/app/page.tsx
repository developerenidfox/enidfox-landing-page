import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      <Image
        src="/images/background.png"
        alt="Enid Fox Background"
        fill
        priority
        quality={100}
        className="object-cover object-center"
      />
    </main>
  );
}
