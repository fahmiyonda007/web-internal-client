"use client";
import { GithubIcon } from "@/components/icons";
import { subtitle, title } from "@/components/primitives";
import { siteConfig } from "@/config/site";
import { Button } from "@nextui-org/button";
import { Code } from "@nextui-org/code";
import { Link } from "@nextui-org/link";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface Image {
  src: string;
  alt: string;
}

export default function Home() {
  const images: Image[] = [
    {
      src: "http://10.10.3.222/fileuploadmaster/f10e6f58741.png",
      alt: "Image 1",
    },
    {
      src: "http://10.10.3.222/fileuploadmaster/57f4ec37739.png",
      alt: "Image 2",
    },
    {
      src: "http://10.10.3.222/fileuploadmaster/46391621c40.png",
      alt: "Image 3",
    },
  ];

  return (
    <section
      className="flex flex-col items-center justify-center mt-[-4rem]"
    >
      <Carousel
        showThumbs={false}
        autoFocus
        autoPlay
        interval={3000}
        emulateTouch
        infiniteLoop
      >
        <div>
          <Image
            src={"http://10.10.3.222/fileuploadmaster/f10e6f58741.png"}
            alt={""}
            width={1880}
            height={0}
          />
        </div>
        <div>
          <Image
            src={"http://10.10.3.222/fileuploadmaster/57f4ec37739.png"}
            alt={""}
            width={1880}
            height={0}
          />
        </div>
        <div>
          <Image
            src={"http://10.10.3.222/fileuploadmaster/46391621c40.png"}
            alt={""}
            width={1880}
            height={0}
          />
        </div>
      </Carousel>

      <div className="flex flex-row gap-20">
        <div className="flex flex-col items-center">
          <span className="text-blue-800">Kurs Bank Mayora </span>
          <Table isStriped aria-label="Example static collection table">
            <TableHeader>
              <TableColumn>KURS</TableColumn>
              <TableColumn>BELI</TableColumn>
              <TableColumn>JUAL</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>CNY</TableCell>
                <TableCell>1,000</TableCell>
                <TableCell>1,200</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>USD</TableCell>
                <TableCell>1,000</TableCell>
                <TableCell>1,200</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>SGD</TableCell>
                <TableCell>1,000</TableCell>
                <TableCell>1,200</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>JPY</TableCell>
                <TableCell>1,000</TableCell>
                <TableCell>1,200</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <div className="flex flex-col items-center">
          <div className="inline-block max-w-lg text-center justify-center">
            <h1 className={title()}>Make&nbsp;</h1>
            <h1 className={title({ color: "violet" })}>beautiful&nbsp;</h1>
            <br />
            <h1 className={title()}>
              websites regardless of your design experience.
            </h1>
            <h2 className={subtitle({ class: "mt-4" })}>
              Beautiful, fast and modern React UI library.
            </h2>
          </div>

          <div className="flex gap-3">
            <Link
              isExternal
              href={siteConfig.links.docs}
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              })}
            >
              Documentation
            </Link>
            <Link
              isExternal
              className={buttonStyles({ variant: "bordered", radius: "full" })}
              href={siteConfig.links.github}
            >
              <GithubIcon size={20} />
              GitHub
            </Link>
          </div>

          <div className="mt-8">
            <Snippet hideSymbol hideCopyButton variant="flat">
              <span>
                Get started by editing <Code color="primary">app/page.tsx</Code>
              </span>
            </Snippet>
          </div>
        </div>
      </div>
    </section>
  );
}
