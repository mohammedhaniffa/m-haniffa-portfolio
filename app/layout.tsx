import type {Metadata} from 'next';
import './globals.css';
export const metadata: Metadata = {title:'M. Haniffa — Interior Designer & 3D Visualizer',description:'Interior design, spatial concepts and 3D visualization by M. Haniffa.'};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
