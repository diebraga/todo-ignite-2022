
interface LogoProps {
  src: string
  alt?: string
}

export default function Logo({ src, alt }: LogoProps) {
  return <img src={src} alt={alt}/>
}
