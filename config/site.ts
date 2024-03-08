
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Next.js + NextUI",
	description: "Make beautiful websites regardless of your design experience.",
	navItems: [
		{
			key: '0',
			name: 'features',
			items: [
				{
					key: '0-1',
					name: 'RIPLAY',
				},
				{
					key: '0-2',
					name: 'Pedoman Perusahaan',
				},
				{
					key: '0-3',
					name: 'Peraturan Intern Bank Mayora',
				},
				{
					key: '0-4',
					name: 'Peraturan BI',
				},
				{
					key: '0-5',
					name: 'Peraturan OJK',
					url: '/peraturan-ojk',
				},
			]
		},
		{
			key:'1',
			name: 'Produk dan Layanan',
			items: [
				{
					key: '1-1',
					name: 'Bancasurrance',
					url: '/',
				},
				{
					key: '1-2',
					name: 'Simpanan',
					url: '/',
				},
				{
					key: '1-3',
					name: 'Pinjaman',
					url: '/',
				},
				{
					key: '1-4',
					name: 'E banking',
					url: '/',
				},
				{
					key: '1-5',
					name: 'Wealth Management',
					url: '/',
				},
				{
					key: '1-6',
					name: 'Program Terbaru',
					url: '/',
				},	
			]
		},
		{
			key:'2',
			name: 'Berita Perusahaan',
			items: [
				{
					key: '2-1',
					name: 'informasi AYDA',
					url: '/',
				},
				{
					key: '2-2',
					name: 'Bersih Itu Sehat',
					url: '/',
				},
			]
		},
		{
			key:'3',
			name: 'SDM',
			items: [
				{
					key: '3-1',
					name: 'informasi AYDA',
					url: '/',
				},
				{
					key: '3-2',
					name: 'Bersih Itu Sehat',
					url: '/',
				},
			]
		},
	],
	links: {
		github: "https://github.com/nextui-org/nextui",
		twitter: "https://twitter.com/getnextui",
		docs: "https://nextui.org",
		discord: "https://discord.gg/9b6yyZKmH4",
		sponsor: "https://patreon.com/jrgarciadev"
	},
};
