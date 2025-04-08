import Link from "next/link";

export default function Menu() {
  return (
    <div className="absolute top-12 left-20">
      <div className="flex w-fit items-center gap-1">
        <Link href="/" className="text-lg font-semibold">
          ( space )
        </Link>
      </div>
    </div>
  );
}
