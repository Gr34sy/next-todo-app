import Image from "next/image";

export function ImgDecoration({type}) {
  return (
    <Image
      src="/images/ImgDecoration.png"
      width={120}
      height={100}
      className={`image__decoration--${type}`}
      alt="image decoration"
    />
  );
}
