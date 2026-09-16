import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-cream select-none">
      {/* 1. Full Page Background Image (100dvh) */}
      <div className="absolute inset-0 h-[100dvh] w-full pointer-events-none -z-0">
        <Image
          src="/images/background.png"
          alt="Enid Fox Background"
          fill
          priority
          quality={100}
          className="object-cover object-center"
        />
      </div>

      {/* 2. Enid Portrait (100dvh, shifted 75px right, anchored to bottom, behind bottom-left leaf) */}
      <div className="pointer-events-none absolute bottom-0 left-[75px] h-[100dvh] w-auto z-10 flex items-end">
        <Image
          src="/images/enid.png"
          alt="Enid Fox"
          width={962}
          height={1081}
          priority
          quality={100}
          className="h-[100dvh] w-auto max-w-none object-contain object-bottom"
        />
      </div>

      {/* 3. Foreground Leaf - Bottom Left (z-20, in front of Enid) */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-[24vw] max-w-[426px] min-w-[160px] z-20 leading-none">
        <Image
          src="/images/leaf-left-bottom.png"
          alt=""
          width={426}
          height={497}
          priority
          className="w-full h-auto object-contain object-bottom-left"
        />
      </div>

      {/* 4. Foreground Leaf - Top Right (z-20) */}
      <div className="pointer-events-none absolute top-0 right-0 w-[28vw] max-w-[527px] min-w-[200px] z-20 leading-none">
        <Image
          src="/images/leaf-top-right.png"
          alt=""
          width={527}
          height={384}
          priority
          className="w-full h-auto object-contain object-top-right"
        />
      </div>

      {/* 5. Foreground Leaf - Bottom Right (z-20) */}
      <div className="pointer-events-none absolute bottom-0 right-0 w-[22vw] max-w-[367px] min-w-[150px] z-20 leading-none">
        <Image
          src="/images/leaf-bottom-right.png"
          alt=""
          width={367}
          height={384}
          priority
          className="w-full h-auto object-contain object-bottom-right"
        />
      </div>
    </main>
  );
}
