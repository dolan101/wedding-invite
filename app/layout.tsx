import './globals.css';
import type {Metadata} from 'next';
export const metadata:Metadata={title:'Kanchan & Dolan — Wedding Invitation',description:'Together with our families, Kanchan & Dolan invite you to celebrate their wedding.',metadataBase:new URL('https://withlove-dolan-kanchan.netlify.app'),openGraph:{title:'Kanchan & Dolan — Wedding Invitation',description:'Together with our families, Kanchan & Dolan invite you to celebrate their wedding.',type:'website'}};
export const viewport={themeColor:'#7d2525'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><head><link rel="manifest" href="/manifest.webmanifest"/><meta name="apple-mobile-web-app-capable" content="yes"/></head><body>{children}</body></html>}
