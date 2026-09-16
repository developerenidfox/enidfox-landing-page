import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-[100dvh] w-full overflow-hidden bg-cream select-none">
      {/* ============================================================ */}
      {/* MOBILE VIEW (< lg screens) */}
      {/* ============================================================ */}
      <div className="relative h-[100dvh] w-full lg:hidden overflow-hidden">
        {/* Mobile Background Plate (Ultra 4x plate with Enid & foliage) */}
        <Image
          src="/images/mobile-bg.png"
          alt="Enid Fox"
          fill
          priority
          quality={100}
          className="object-cover object-bottom pointer-events-none z-0"
        />

        {/* Content Stack: Centered horizontally at the top */}
        <div className="relative z-10 w-full flex flex-col items-center justify-start pt-8 sm:pt-12 px-6 text-center">
          {/* Logo */}
          <div className="relative w-44 sm:w-52 max-w-[75vw]">
            <Image
              src="/images/logo.png"
              alt="Enid Fox"
              width={924}
              height={496}
              priority
              quality={100}
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Practitioner Titles in Montserrat */}
          <div className="mt-4 sm:mt-5 space-y-0.5 sm:space-y-1 font-montserrat text-[11px] sm:text-xs font-normal tracking-[0.05em] text-charcoal leading-relaxed text-center">
            <p>International BodyTalk Practitioner</p>
            <p>Nature&apos;s Language Practitioner</p>
            <p>Reiki Master</p>
            <p>Cranio Sacral Therapist</p>
          </div>

          {/* Short Thick Divider in Sage */}
          <div className="w-12 sm:w-16 h-[2.5px] bg-sage rounded-full my-3 sm:my-4" />

          {/* "Coming Soon" in Eyesome-Script */}
          <h2 className="font-eyesome text-4xl sm:text-5xl text-olive font-normal text-center leading-tight">
            Coming Soon
          </h2>
        </div>
      </div>

      {/* ============================================================ */}
      {/* DESKTOP VIEW (>= lg screens) */}
      {/* ============================================================ */}
      <div className="hidden lg:block relative h-[100dvh] w-full overflow-hidden">
        {/* 1. Full Page Background Image (8K / 4x resolution, 100dvh) */}
        <div className="absolute inset-0 h-[100dvh] w-full pointer-events-none z-0">
          <Image
            src="/images/background.png"
            alt="Enid Fox Background"
            fill
            priority
            quality={100}
            className="object-cover object-center"
          />
        </div>

        {/* 2. Enid Portrait (4x, 100dvh, shifted 75px right, anchored to bottom, behind bottom-left leaf) */}
        <div className="pointer-events-none absolute bottom-0 left-[75px] h-[100dvh] w-auto z-10 flex items-end">
          <Image
            src="/images/enid.png"
            alt="Enid Fox"
            width={3845}
            height={4321}
            priority
            quality={100}
            className="h-[100dvh] w-auto max-w-none object-contain object-bottom"
          />
        </div>

        {/* 3. Two-Column Layout Overlay */}
        <div className="relative z-15 h-[100dvh] w-full grid grid-cols-2 pointer-events-none">
          {/* Left Column (Spans Enid's half on desktop) */}
          <div className="h-full" />

          {/* Right Column: Content Column (Vertically Centered & Shifted Left) */}
          <div className="h-full flex flex-col items-center justify-center px-6 text-center lg:-translate-x-14">
            {/* Logo at top of stack */}
            <div className="relative w-56 sm:w-64 md:w-72 lg:w-80 max-w-[85vw] pointer-events-auto">
              <Image
                src="/images/logo.png"
                alt="Enid Fox"
                width={924}
                height={496}
                priority
                quality={100}
                className="w-full h-auto object-contain"
              />
            </div>

            {/* Practitioner Titles in Montserrat Font (Centered) */}
            <div className="mt-5 sm:mt-7 space-y-1 sm:space-y-1.5 font-montserrat text-xs sm:text-sm md:text-[15px] font-normal tracking-[0.06em] text-charcoal leading-relaxed text-center pointer-events-auto">
              <p>International BodyTalk Practitioner</p>
              <p>Nature&apos;s Language Practitioner</p>
              <p>Reiki Master</p>
              <p>Cranio Sacral Therapist</p>
            </div>

            {/* Short Thick Divider in Sage Color */}
            <div className="w-16 sm:w-20 h-[3px] bg-sage rounded-full my-4 sm:my-5 pointer-events-auto" />

            {/* "Coming Soon" in Eyesome-Script Font */}
            <h2 className="font-eyesome text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-olive font-normal text-center pointer-events-auto leading-tight">
              Coming Soon
            </h2>
          </div>
        </div>

        {/* 4. Foreground Leaf - Bottom Left (4x, z-20, in front of Enid) */}
        <div className="pointer-events-none absolute bottom-0 left-0 w-[24vw] max-w-[426px] min-w-[160px] z-20 leading-none">
          <Image
            src="/images/leaf-left-bottom.png"
            alt=""
            width={1701}
            height={1988}
            priority
            quality={100}
            className="w-full h-auto object-contain object-bottom-left"
          />
        </div>

        {/* 5. Foreground Leaf - Top Right (4x, z-20) */}
        <div className="pointer-events-none absolute top-0 right-0 w-[28vw] max-w-[527px] min-w-[200px] z-20 leading-none">
          <Image
            src="/images/leaf-top-right.png"
            alt=""
            width={2105}
            height={1533}
            priority
            quality={100}
            className="w-full h-auto object-contain object-top-right"
          />
        </div>

        {/* 6. Foreground Leaf - Bottom Right (4x, z-20) */}
        <div className="pointer-events-none absolute bottom-0 right-0 w-[22vw] max-w-[367px] min-w-[150px] z-20 leading-none">
          <Image
            src="/images/leaf-bottom-right.png"
            alt=""
            width={1465}
            height={1533}
            priority
            quality={100}
            className="w-full h-auto object-contain object-bottom-right"
          />
        </div>
      </div>
    </main>
  );
}
