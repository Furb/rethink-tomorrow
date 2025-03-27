import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-3">
        <div className="h-8 w-full bg-dark col-span-full wrap"></div>
        <p>1</p>
        <p>2</p>
        <p>3</p>
      </div>
    </main>
  );
}
