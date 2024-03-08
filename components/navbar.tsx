"use client";

import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Kbd } from "@nextui-org/kbd";
import {
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuToggle,
  Navbar as NextUINavbar,
} from "@nextui-org/navbar";

import NextLink from "next/link";

import { SearchIcon } from "@/components/icons";
import { ThemeSwitch } from "@/components/theme-switch";
import { Image, Tab, Tabs } from "@nextui-org/react";

export const Navbar = () => {
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: "bg-default-100",
        input: "text-sm",
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={["command"]}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
    />
  );

  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent>
        <NavbarMenuToggle />
          <ThemeSwitch />
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          {/* <Link isExternal href={siteConfig.links.twitter} aria-label="Twitter">
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} aria-label="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link> */}
        </NavbarItem>
        {/* <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem> */}
        <NextLink className="flex justify-start items-center gap-1" href="/">
          <Image
            isBlurred
            width={100}
            src="https://hibank.co.id/icons/logo.svg"
            alt="NextUI Album Cover"
          />
        </NextLink>
      </NavbarContent>

      <NavbarMenu>
        <Tabs aria-label="Menus" color="primary">
          <Tab key="tab-0" title="PERATURAN">
            <div className="mx-4 mt-2 flex flex-row gap-2">
              <div>
                <span className="text-secondary">RIPLAY</span>
                <div className="mx-4 mt-2 flex flex-col">
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>hi Saving Reward</span>
                    </Button>
                  </NextLink>
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>hi Score</span>
                    </Button>
                  </NextLink>
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>hi GOAL</span>
                    </Button>
                  </NextLink>
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>hi Saving</span>
                    </Button>
                  </NextLink>
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>hi Giro hibank</span>
                    </Button>
                  </NextLink>
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>Deposito</span>
                    </Button>
                  </NextLink>
                </div>
              </div>
              <div>
                <span className="text-secondary">Pedoman Perusahaan</span>
                <div className="mx-4 mt-2 flex flex-col">
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>Kebijakan</span>
                    </Button>
                  </NextLink>
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>Prosedur</span>
                    </Button>
                  </NextLink>
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>Petunjuk Teknis</span>
                    </Button>
                  </NextLink>
                </div>
              </div>
              <div>
                <span className="text-secondary">
                  Peraturan Intern Bank Mayora
                </span>
                <div className="mx-4 mt-2 flex flex-col">
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>Pedoman (SOP)</span>
                    </Button>
                  </NextLink>
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>Surat Edaran dan Memo Intern</span>
                    </Button>
                  </NextLink>
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>Surat Keputusan Direksi</span>
                    </Button>
                  </NextLink>
                </div>
              </div>
              <div>
                <span className="text-secondary">Peraturan BI</span>
                <div className="mx-4 mt-2 flex flex-col">
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>Perbankan</span>
                    </Button>
                  </NextLink>
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>Moneter</span>
                    </Button>
                  </NextLink>
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>Sistem Pembayaran</span>
                    </Button>
                  </NextLink>
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>Stabilitas Sistem Keuangan</span>
                    </Button>
                  </NextLink>
                </div>
              </div>
              <div>
                <NextLink className="flex justify-start items-center" href="/">
                  <Button color="primary" variant="light">
                    <span>Peraturan OJK</span>
                  </Button>
                </NextLink>
                <NextLink className="flex justify-start items-center" href="/">
                  <Button color="primary" variant="light">
                    <span>Peraturan BI & OJK yang Telah Dicabut</span>
                  </Button>
                </NextLink>
                <NextLink className="flex justify-start items-center" href="/">
                  <Button color="primary" variant="light">
                    <span>Peraturan PPATK</span>
                  </Button>
                </NextLink>
                <NextLink className="flex justify-start items-center" href="/">
                  <Button color="primary" variant="light">
                    <span>E-Form</span>
                  </Button>
                </NextLink>
              </div>
            </div>
            <div className="mx-4 mt-2 flex flex-row  gap-2">
              <div>
                <span className="text-secondary">Lainnya</span>
                <div className="mx-4 mt-2 flex flex-col">
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>Tarif Suku Bunga & Katalog Hadiah</span>
                    </Button>
                  </NextLink>
                </div>
              </div>
              <div>
                <span className="text-secondary">
                  Corporate Secretary & Legal
                </span>
                <div className="mx-4 mt-2 flex flex-col">
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>Anggaran Dasar</span>
                    </Button>
                  </NextLink>
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>Format Standar Perjanjian</span>
                    </Button>
                  </NextLink>
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>Frequenly Asked Question</span>
                    </Button>
                  </NextLink>
                  <NextLink
                    className="flex justify-start items-center"
                    href="/"
                  >
                    <Button color="primary" variant="light">
                      <span>Perizinan</span>
                    </Button>
                  </NextLink>
                </div>
              </div>
            </div>
          </Tab>
          <Tab key="tab-1" title="PRODUK DAN LAYANAN">
            <div className="mx-4 mt-2 flex flex-col">
              <NextLink className="flex justify-start items-center" href="/">
                <Button color="primary" variant="light">
                  <span>Bancassurance</span>
                </Button>
              </NextLink>
              <NextLink className="flex justify-start items-center" href="/">
                <Button color="primary" variant="light">
                  <span>Simpanan</span>
                </Button>
              </NextLink>
              <NextLink className="flex justify-start items-center" href="/">
                <Button color="primary" variant="light">
                  <span>Pinjaman</span>
                </Button>
              </NextLink>
              <NextLink className="flex justify-start items-center" href="/">
                <Button color="primary" variant="light">
                  <span>E-Banking</span>
                </Button>
              </NextLink>
              <NextLink className="flex justify-start items-center" href="/">
                <Button color="primary" variant="light">
                  <span>Wealth Management</span>
                </Button>
              </NextLink>
              <NextLink className="flex justify-start items-center" href="/">
                <Button color="primary" variant="light">
                  <span>Program Terbaru</span>
                </Button>
              </NextLink>
            </div>
          </Tab>
          <Tab key="tab-2" title="BERITA PERUSAHAAN">
            <div className="mx-4 mt-2 flex flex-col">
              <NextLink className="flex justify-start items-center" href="/">
                <Button color="primary" variant="light">
                  <span>Informasi AYDA</span>
                </Button>
              </NextLink>
              <NextLink className="flex justify-start items-center" href="/">
                <Button color="primary" variant="light">
                  <span>Bersih Itu Sehat</span>
                </Button>
              </NextLink>
            </div>
          </Tab>
          <Tab key="tab-3" title="SDM">
            <div className="mx-4 mt-2 flex flex-row">
              <div>
                <NextLink className="flex justify-start items-center" href="/">
                  <Button color="primary" variant="light">
                    <span>Berita Suka Cita</span>
                  </Button>
                </NextLink>
                <NextLink className="flex justify-start items-center" href="/">
                  <Button color="primary" variant="light">
                    <span>New Normal</span>
                  </Button>
                </NextLink>
                <NextLink className="flex justify-start items-center" href="/">
                  <Button color="primary" variant="light">
                    <span>Berita</span>
                  </Button>
                </NextLink>
                <NextLink className="flex justify-start items-center" href="/">
                  <Button color="primary" variant="light">
                    <span>Berita Duka</span>
                  </Button>
                </NextLink>
                <NextLink className="flex justify-start items-center" href="/">
                  <Button color="primary" variant="light">
                    <span>Kode Etik dan Peraturan Perusahaan</span>
                  </Button>
                </NextLink>
                <NextLink className="flex justify-start items-center" href="/">
                  <Button color="primary" variant="light">
                    <span>BPJS Kesehatan</span>
                  </Button>
                </NextLink>
                <NextLink className="flex justify-start items-center" href="/">
                  <Button color="primary" variant="light">
                    <span>Lainnya</span>
                  </Button>
                </NextLink>
              </div>
              <div className="mx-4 mt-2 flex flex-row gap-5">
                <div>
                  <span className="text-secondary">
                    Learning and Development
                  </span>
                  <div className="mx-4 mt-2 flex flex-col">
                    <NextLink
                      className="flex justify-start items-center"
                      href="/"
                    >
                      <Button color="primary" variant="light">
                        <span>Training Mandiri</span>
                      </Button>
                    </NextLink>
                    <NextLink
                      className="flex justify-start items-center"
                      href="/"
                    >
                      <Button color="primary" variant="light">
                        <span>Roadmap Training</span>
                      </Button>
                    </NextLink>
                    <NextLink
                      className="flex justify-start items-center"
                      href="/"
                    >
                      <Button color="primary" variant="light">
                        <span>Jadwal Training </span>
                      </Button>
                    </NextLink>
                  </div>
                </div>
                <div>
                  <span className="text-secondary">
                    Corporate Secretary & Legal
                  </span>
                  <div className="mx-4 mt-2 flex flex-col">
                    <NextLink
                      className="flex justify-start items-center"
                      href="/"
                    >
                      <Button color="primary" variant="light">
                        <span>Anggaran Dasar</span>
                      </Button>
                    </NextLink>
                    <NextLink
                      className="flex justify-start items-center"
                      href="/"
                    >
                      <Button color="primary" variant="light">
                        <span>Format Standar Perjanjian</span>
                      </Button>
                    </NextLink>
                    <NextLink
                      className="flex justify-start items-center"
                      href="/"
                    >
                      <Button color="primary" variant="light">
                        <span>Frequenly Asked Question</span>
                      </Button>
                    </NextLink>
                    <NextLink
                      className="flex justify-start items-center"
                      href="/"
                    >
                      <Button color="primary" variant="light">
                        <span>Perizinan</span>
                      </Button>
                    </NextLink>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab key="tab-4" title="UNIT KERJA">
            <div className="mx-4 mt-2 flex flex-row">
              <div>
                <NextLink className="flex justify-start items-center" href="/">
                  <Button color="primary" variant="light">
                    <span>Compliance Chart</span>
                  </Button>
                </NextLink>
                <NextLink className="flex justify-start items-center" href="/">
                  <Button color="primary" variant="light">
                    <span>Corporate Legal</span>
                  </Button>
                </NextLink>
              </div>
              <div className="mx-4 mt-2 flex flex-row gap-5">
                <div>
                  <span className="text-secondary">Quality Management</span>
                  <div className="mx-4 mt-2 flex flex-col">
                    <NextLink
                      className="flex justify-start items-center"
                      href="/"
                    >
                      <Button color="primary" variant="light">
                        <span>Standar Pelayanan</span>
                      </Button>
                    </NextLink>
                    <NextLink
                      className="flex justify-start items-center"
                      href="/"
                    >
                      <Button color="primary" variant="light">
                        <span>Morning Briefing</span>
                      </Button>
                    </NextLink>
                    <NextLink
                      className="flex justify-start items-center"
                      href="/"
                    >
                      <Button color="primary" variant="light">
                        <span>Sharing Best Practice</span>
                      </Button>
                    </NextLink>
                    <NextLink
                      className="flex justify-start items-center"
                      href="/"
                    >
                      <Button color="primary" variant="light">
                        <span>Bersih itu Sehat</span>
                      </Button>
                    </NextLink>
                  </div>
                </div>
              </div>
            </div>
          </Tab>
          <Tab key="tab-5" title="JARINGAN">
            <div>
              <NextLink className="flex justify-start items-center" href="/">
                <Button color="primary" variant="light">
                  <span>Alamat Kantor</span>
                </Button>
              </NextLink>
              <NextLink className="flex justify-start items-center" href="/">
                <Button color="primary" variant="light">
                  <span>Alamat ATM</span>
                </Button>
              </NextLink>
              <NextLink className="flex justify-start items-center" href="/">
                <Button color="primary" variant="light">
                  <span>Daftar Extension</span>
                </Button>
              </NextLink>
              <NextLink className="flex justify-start items-center" href="/">
                <Button color="primary" variant="light">
                  <span>Daftar CUG (Closed User Group)</span>
                </Button>
              </NextLink>
            </div>
          </Tab>
        </Tabs>
      </NavbarMenu>
    </NextUINavbar>
  );
};
