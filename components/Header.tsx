import Link from 'next/link';
export default function Header(){return <header className="site-header"><Link href="/" className="wordmark">M. HAN<span>IFFA.</span></Link><nav><Link href="/#work">Work</Link><Link href="/#about">About</Link><Link href="/#services">Services</Link><Link href="/#contact" className="nav-contact">Let's talk <span>↗</span></Link></nav></header>}
