import Image from "next/image";
import Logo from "@/public/logo.png";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
      <header className="sticky top-0 z-[999999] opacity-90 flex bg-emerald-600 h-[80px] w-full drop-shadow-lg items-center justify-between">
        <div className="relative left-12">
          <Link href="/">
            <Image src={Logo} width="220" height="100" alt="codetonic logo" />
          </Link>
        </div>

        <ul className="hidden md:flex gap-12 text-xl items-center text-white pr-8 font-medium">
          <li>
            <Link href="/">HOME</Link>
          </li>
          <li>
            <Link href="/blog">BLOG</Link>
          </li>
          <li>
            <Link href="/youtube">YOUTUBE</Link>
          </li>
          <li>
            <Link href="/connect">CONNECT</Link>
          </li>
        </ul>
        <div className="md:hidden md:z-[999999999]">
          <Sheet>
            <SheetTrigger className="pr-8">
              <FaBars className="text-white w-6 h-6" />
            </SheetTrigger>
            <SheetContent className="w-full top-[80px]">
              <SheetHeader>
                <SheetDescription>
                  <ul className="flex flex-col gap-8">
                    <li>
                      <Link href="/">HOME</Link>
                    </li>
                    <li>
                      <Link href="/blog">BLOG</Link>
                    </li>
                    <li>
                      <Link href="/youtube">YOUTUBE</Link>
                    </li>
                    <li>
                      <Link href="/connect">CONNECT</Link>
                    </li>
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  );
}
