import Header from '@/components/Header';
export default function SiteLayout({children}:{children:React.ReactNode}){return <><Header/>{children}<footer className="footer"><span>© {new Date().getFullYear()} M. Haniffa</span><span>Interior Designer · 3D Visualizer</span><a href="#top">Back to top ↑</a></footer></>}
