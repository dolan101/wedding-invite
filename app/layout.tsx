import './globals.css';
import type {Metadata} from 'next';
export const metadata:Metadata={title:'Dolan & KANCHAN — Wedding Invitation',description:'Together with our families, Dolan & KANCHAN invite you to celebrate their wedding.',metadataBase:new URL('https://withlove-dolan-kanchan.netlify.app'),openGraph:{title:'Dolan & KANCHAN — Wedding Invitation',description:'Together with our families, Dolan & KANCHAN invite you to celebrate their wedding.',type:'website'}};
export const viewport={themeColor:'#7d2525'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><head><link rel="manifest" href="/manifest.webmanifest"/><meta name="apple-mobile-web-app-capable" content="yes"/></head><body>{children}</body></html>}
