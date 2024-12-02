import { ArrowRightIcon } from "../../public/icon/arrow-right";
import { XIcon } from "../../public/icon/x";
import { InstagramIcon } from "../../public/icon/instagram";
import { FacebookIcon } from "../../public/icon/facebook";
import { EmailIcon } from "../../public/icon/email";
import { PhoneIcon } from "../../public/icon/phone";
import { AddressIcon } from "../../public/icon/address";

export default function Home() {
  return (
    <div className="mx-auto container p-8 text-black text-lg font-mono">
      <header className="pb-8 uppercase font-bold lg:text-3xl">
        <div>Kozera Group</div>
      </header>

      <main className="flex flex-col gap-2 md:gap-8 lg:gap-16">
        <section className="aspect-auto md:aspect-auto text-white bg-[url('/hero/image_mobile.png')] md:bg-[url('/hero/image.png')] bg-no-repeat bg-cover border-2 items-center grid p-4 md:p-8 lg:p-16 gap-8 xl:py-24 lg:gap-16 xl:gap-24 py-16 rounded-xl justify-between">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
            Spravujeme Vaše Investice a Rozvoj
          </h1>

          <p className="text-pretty text-sm md:w-3/5 lg:text-xl">
            Naše služby jsou profesionální, kvalitní a spolehlivé. Společně
            rozvíjíme vaše podnikání a zajistíme vaši maximální spokojenost
            našich partnerů.
          </p>

          <div className="flex gap-4 lg:gap-8">
            <a
              href="https://www.x.com/kozera-group"
              className="grid lg:hidden hover:scale-110 duration-300"
              target="_blank"
              aria-label="Navštivte Kozera Group Twitter"
            >
              <XIcon width={25} height={25} />
            </a>

            <a
              href="https://www.x.com/kozera-group"
              className="hidden lg:grid hover:scale-110 duration-300"
              target="_blank"
              aria-label="Navštivte Kozera Group Twitter"
            >
              <XIcon width={40} height={40} />
            </a>

            <a
              href="https://www.instagram.com/kozera-group"
              className="grid lg:hidden hover:scale-110 duration-300"
              target="_blank"
              aria-label="Navštivte Kozera Group Instagram"
            >
              <InstagramIcon width={25} height={25} />
            </a>

            <a
              href="https://www.instagram.com/kozera-group"
              className="hidden lg:grid hover:scale-110 duration-300"
              target="_blank"
              aria-label="Navštivte Kozera Group Instagram"
            >
              <InstagramIcon width={40} height={40} />
            </a>

            <a
              href="https://www.instagram.com/kozera-group"
              className="grid lg:hidden hover:scale-110 duration-300"
              target="_blank"
              aria-label="Navštivte Kozera Group Facebook"
            >
              <FacebookIcon width={25} height={25} />
            </a>

            <a
              href="https://www.instagram.com/kozera-group"
              className="hidden lg:grid hover:scale-110 duration-300"
              target="_blank"
              aria-label="Navštivte Kozera Group Facebook"
            >
              <FacebookIcon width={40} height={40} />
            </a>
          </div>

          <a href="#partnerske-vztahy">
            <button className="flex items-center text-black gap-2 lg:gap-4 bg-white py-2 lg:py-8 px-4 lg:px-16 rounded-xl font-semibold text-md hover:scale-110 duration-300">
              <div className="lg:text-xl">Zjistit více</div>

              <div className="grid lg:hidden">
                <ArrowRightIcon height={20} width={20} />
              </div>

              <div className="hidden lg:grid">
                <ArrowRightIcon height={24} width={24} />
              </div>
            </button>
          </a>
        </section>

        <section className="grid md:grid-cols-3 gap-2 md:gap-8 lg:gap-16 pb-4 text-black font-semibold">
          <div className="apect-video border-2 py-8 px-4 lg:px-16 lg:py-16 rounded-xl grid gap-2 lg:gap-4">
            <h3 className="text-2xl font-semibold">1200+</h3>

            <p className="text-sm">
              Setkání napříč <br className="hidden md:grid" /> trhem
            </p>
          </div>

          <div className="apect-video border-2 py-8 px-4 lg:px-16 lg:py-16 rounded-xl grid gap-2 lg:gap-4">
            <h3 className="text-2xl font-semibold">200+</h3>

            <p className="text-sm">
              Spokojení <br className="hidden md:grid" /> zákazníci
              <br />
            </p>
          </div>

          <div className="apect-video border-2 py-8 px-4 lg:px-16 lg:py-16 rounded-xl grid gap-2 lg:gap-4">
            <h3 className="text-2xl font-semibold">9+</h3>

            <p className="text-sm">
              Roky <br className="hidden md:grid" /> služeb
              <br />
            </p>
          </div>
        </section>

        <section
          className="grid py-4 bg-slate-200 text-white bg rounded-xl bg-[url('/hero/image_mobile_2.png')] bg-no-repeat bg-cover md:bg-center"
          id="partnerske-vztahy"
        >
          <div className="flex flex-col md:flex-row md:justify-between gap-4 p-4 md:p-8 lg:p-16">
            <div className="flex flex-col gap-4 lg:gap-8 md:w-2/5">
              <h2 className="text-2xl lg:text-4xl font-semibold">
                Partnerské vztahy
              </h2>

              <p className="text-sm">
                Bubble Waffle, Exkluzivní Služby, Premium Nabídky
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 col-span-2 gap-4 font-medium">
              <a
                href="https://www.bubblewaffleharrachov.cz"
                className="p-4 lg:py-8 lg:px-20 hover:scale-110 duration-300 bg-white text-black rounded-xl flex justify-center"
                target="_blank"
                aria-label="Navštivte náš Waffle stánek v Harrachově"
              >
                Waffle
              </a>

              <a
                href="https://www.bubblewaffleharrachov.cz"
                className="p-4 lg:py-8 lg:px-20 hover:scale-110 duration-300 bg-white text-black rounded-xl flex justify-center text-transparent"
                target="_blank"
                aria-label="Připravujeme pro Vás"
              >
                Waffle
              </a>

              <a
                href="https://www.bubblewaffleharrachov.cz"
                className="p-4 lg:py-8 lg:px-20 hover:scale-110 duration-300 bg-white rounded-xl flex justify-center text-transparent"
                target="_blank"
                aria-label="Připravujeme pro Vás"
              >
                Waffle
              </a>

              <a
                href="https://www.bubblewaffleharrachov.cz"
                className="p-4 lg:py-8 lg:px-20 hover:scale-110 duration-300 bg-white rounded-xl flex justify-center text-transparent"
                target="_blank"
                aria-label="Připravujeme pro Vás"
              >
                Waffle
              </a>

              <a
                href="https://www.bubblewaffleharrachov.cz"
                className="p-4 lg:py-8 lg:px-20 hover:scale-110 duration-300 bg-white rounded-xl flex justify-center text-transparent"
                target="_blank"
                aria-label="Připravujeme pro Vás"
              >
                Waffle
              </a>

              <a
                href="https://www.bubblewaffleharrachov.cz"
                className="p-4 lg:py-8 lg:px-20 hover:scale-110 duration-300 bg-white rounded-xl flex justify-center text-transparent"
                target="_blank"
                aria-label="Připravujeme pro Vás"
              >
                Waffle
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="px-4 md:px-8 pt-8 lg:pt-16 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
        <button className="text-left grid gap-2">
          <div className="grid lg:hidden">
            <EmailIcon width={25} height={25} aria-hidden="true" />
          </div>

          <div className="hidden lg:grid">
            <EmailIcon width={40} height={40} aria-hidden="true" />
          </div>

          <h3 className="font-semibold">E-mailová adresa</h3>

          <a href="mailto:kozera@group.cz" className="text-gray-500">
            kozera@group.cz
          </a>
        </button>

        <button className="text-left grid gap-2">
          <div className="grid lg:hidden">
            <PhoneIcon width={25} height={25} aria-hidden="true" />
          </div>

          <div className="hidden lg:grid">
            <PhoneIcon width={40} height={40} aria-hidden="true" />
          </div>

          <h3 className="font-semibold">Telefonní číslo</h3>

          <a href="tel:+420608666200" className="text-gray-500">
            +420 608 666 200
          </a>
        </button>

        <button className="text-left grid gap-2">
          <div className="grid lg:hidden">
            <AddressIcon width={25} height={25} aria-hidden="true" />
          </div>

          <div className="hidden lg:grid">
            <AddressIcon width={40} height={40} aria-hidden="true" />
          </div>
          <h3 className="font-semibold">Adresa</h3>

          <p className="text-gray-500">Harrachov 191 468 49, Harrachov</p>
        </button>
      </footer>
    </div>
  );
}
