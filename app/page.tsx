import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="hidden tablet:grid grid-cols-3 bg-red">
        <div className="h-8 col-span-full tablet:col-span-2 w-full wrap ">
          <p>1</p>
          <p>2</p>
        </div>
        <div className="col-span-1 hidden">
          <div className="wrap">
            <p>3</p>
          </div>
        </div>
      </div>
    </main>
  );
}
