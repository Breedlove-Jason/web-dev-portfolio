import Image from "next/image";

type NeuralProfileArtifactProps = {
  className?: string;
};

export function NeuralProfileArtifact({
  className = "",
}: NeuralProfileArtifactProps) {
  return (
    <div
      className={`pointer-events-none relative mx-auto w-full max-w-[620px] ${className}`}
      aria-hidden="true"
    >
      <div className="absolute left-1/2 top-1/2 -z-10 h-[70%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute right-6 top-10 -z-10 h-[55%] w-[48%] rounded-full bg-fuchsia-500/20 blur-3xl" />

      <Image
        src="/images/neural-profile.webp"
        alt="Cybernetic neon profile representing Jason Breedlove's AI-assisted development portfolio"
        width={2688}
        height={1536}
        priority
        sizes="(min-width: 1024px) 560px, (min-width: 768px) 480px, 320px"
        className="block h-auto w-full max-w-full object-contain drop-shadow-[0_0_32px_rgba(34,211,238,0.22)]"
      />
    </div>
  );
}
