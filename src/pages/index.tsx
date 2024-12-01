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
        <div className="aspect-auto md:aspect-auto bg-white border-2 items-center grid p-4 md:p-8 lg:p-16 gap-8 lg:gap-16 py-16 rounded-xl justify-between">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold">
            Own Your Luxury Dream Estate
          </h1>

          <h2 className="text-pretty lg:text-justify text-sm md:w-3/5 lg:text-xl">
            Naflušu ti do držky sračky, lízej mi prdel. Sexistické narážku na
            mojí obří kundu? Zešvihám ti prdel ty píčo! Natrhnu ti kundu děfko!
          </h2>

          <div className="flex gap-4 lg:gap-8">
            <button className="grid lg:hidden hover:scale-110 duration-300">
              <XIcon width={25} height={25} />
            </button>

            <button className="hidden lg:grid hover:scale-110 duration-300">
              <XIcon width={40} height={40} />
            </button>

            <button className="grid lg:hidden hover:scale-110 duration-300">
              <InstagramIcon width={25} height={25} />
            </button>

            <button className="hidden lg:grid hover:scale-110 duration-300">
              <InstagramIcon width={40} height={40} />
            </button>

            <button className="grid lg:hidden hover:scale-110 duration-300">
              <FacebookIcon width={25} height={25} />
            </button>

            <button className="hidden lg:grid hover:scale-110 duration-300">
              <FacebookIcon width={40} height={40} />
            </button>
          </div>

          <div>
            <button className="flex items-center gap-2 lg:gap-4 bg-green-400 py-2 lg:py-8 px-4 lg:px-16 rounded-xl font-semibold text-md hover:scale-110 duration-300">
              <div className="lg:text-xl">Learn More</div>

              <div className="grid lg:hidden">
                <ArrowRightIcon height={20} width={20} />
              </div>

              <div className="hidden lg:grid">
                <ArrowRightIcon height={24} width={24} />
              </div>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-2 md:gap-8 lg:gap-16 pb-4">
          <div className="apect-video bg-white border-2 py-8 px-4 lg:px-16 lg:py-16 rounded-xl grid gap-2 lg:gap-4">
            <div className="text-2xl font-semibold">1200+</div>

            <div className="text-sm">
              Companies affiliate <br />
              with us
            </div>
          </div>

          <div className="apect-video bg-white border-2 py-8 px-4 lg:px-16 lg:py-16 rounded-xl grid gap-2 lg:gap-4">
            <div className="text-2xl font-semibold">8M+</div>

            <div className="text-sm">
              Happy customers
              <br />
              <br />
            </div>
          </div>

          <div className="apect-video bg-white border-2 py-8 px-4 lg:px-16 lg:py-16 rounded-xl grid gap-2 lg:gap-4">
            <div className="text-2xl font-semibold">9+</div>

            <div className="text-sm">
              Years of service
              <br />
              <br />
            </div>
          </div>
        </div>

        <div className="grid py-4 bg-slate-200 rounded-xl">
          <div className="flex flex-col md:flex-row md:justify-between gap-4 p-4 md:p-8 lg:p-16">
            <div className="flex flex-col gap-4 lg:gap-8 md:w-2/5">
              <div className="text-2xl lg:text-4xl font-semibold">
                Our Partnerships
              </div>

              <div className="text-sm">
                Ceckatý Čůráček, Chlupatý Píčípískoviště,
                <br /> Kokotí Rolky
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 col-span-2 gap-4 font-medium">
              <a
                href="https://www.bubblewaffleharrachov.cz"
                className="p-4 lg:py-8 lg:px-20 hover:scale-110 duration-300 bg-white rounded-xl flex justify-center"
              >
                Waffle
              </a>

              <div className="p-4 lg:py-8 lg:px-20 hover:scale-110 duration-300 bg-white rounded-xl flex justify-center">
                Leopard
              </div>

              <div className="p-4 lg:py-8 lg:px-20 hover:scale-110 duration-300 bg-white rounded-xl flex justify-center">
                Leopard
              </div>

              <div className="p-4 lg:py-8 lg:px-20 hover:scale-110 duration-300 bg-white rounded-xl flex justify-center">
                Leopard
              </div>

              <div className="p-4 lg:py-8 lg:px-20 hover:scale-110 duration-300 bg-white rounded-xl flex justify-center">
                Leopard
              </div>

              <div className="p-4 lg:py-8 lg:px-20 hover:scale-110 duration-300 bg-white rounded-xl flex justify-center">
                Leopard
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="px-4 md:px-8 pt-8 lg:pt-16 grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
        <button className="text-left grid gap-2">
          <div className="grid lg:hidden">
            <EmailIcon width={25} height={25} />
          </div>

          <div className="hidden lg:grid">
            <EmailIcon width={40} height={40} />
          </div>

          <div className="font-semibold">E-mailová adresa</div>

          <div className="text-gray-500">kozera@group.cz</div>
        </button>

        <button className="text-left grid gap-2">
          <div className="grid lg:hidden">
            <PhoneIcon width={25} height={25} />
          </div>

          <div className="hidden lg:grid">
            <PhoneIcon width={40} height={40} />
          </div>

          <div className="font-semibold">Telefonní číslo</div>

          <div className="text-gray-500">+420 608 666 200</div>
        </button>

        <button className="text-left grid gap-2">
          <div className="grid lg:hidden">
            <AddressIcon width={25} height={25} />
          </div>

          <div className="hidden lg:grid">
            <AddressIcon width={40} height={40} />
          </div>
          <div className="font-semibold">Adresa</div>

          <div className="text-gray-500">U Omrdaný Kundy 01 MRD, Ceckovice</div>
        </button>
      </footer>
    </div>
  );
}
