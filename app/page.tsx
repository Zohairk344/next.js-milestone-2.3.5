import Image from "next/image";
import '@/public/styles/home.css'

export default function Home() {
  return (
        <div id="start2">
                <section >
                    <div id="main2">
                        <div id="resume">
                        <Image id="img" src="/images/governer-house.jpg" alt="Resume" width={150} height={150}/>
                        <h1 id="name">Hello, My Name Is Zohair Khan</h1>
                        <p id="description">I am 17 years old and currently completing my A levels </p>
                        </div>
                    </div>
                </section>
        </div>
  );
}
