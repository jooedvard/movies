import Image from "next/image";

export default function Movie({ title, image }: any) {
  const IMAGE_API = "https://image.tmdb.org/t/p/original/" + image;

  return (
    <div className="bg-black rounded flex flex-col items-center cursor-pointer">
      <h3 className="flex-1 text-sm text-gray-300 py-4">{title}</h3>
      <Image src={IMAGE_API} alt={title} width={1000} height={1000} className="rounded rounded-t-none"/>
    </div>
  );
}
