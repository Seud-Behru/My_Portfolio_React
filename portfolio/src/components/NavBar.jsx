import ThemeToggle from "./ThemeToggle";
import { Link } from "react-router-dom";

const links = [
    { label: "Home", href: "#home" },
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Writing", href: "#writing" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <div className="mx-auto max-w-page px-16 pt-16">
            <nav
                aria-label="Primary"
                className="flex items-center justify-between gap-16 rounded-cards border border-edge bg-canvas px-16 py-8 shadow-sm"
            >
                {/* Logo */}
                <Link to="#home" className="flex items-center gap-8 text-content">
                    <span className="grid size-32 place-items-center rounded-buttons border border-edge-strong text-nav-control font-semibold">
                        YN
                    </span>
                    <span className="text-nav-control leading-nav-control font-semibold">
                        Your Name
                    </span>
                </Link>

                {/* Links (desktop) */}
                <ul className="hidden items-center gap-8 md:flex">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                to={link.href}
                                className="rounded-buttons px-8 py-8 text-nav-control leading-nav-control font-medium text-content-muted transition-colors hover:text-content"
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Controls */}
                <div className="flex items-center gap-8">
                    <ThemeToggle />

                    <a
                        href="#resume"
                        className="hidden rounded-buttons border border-edge-soft bg-transparent px-16 py-8 text-nav-control leading-nav-control font-medium text-content-muted transition-colors hover:text-content sm:inline-block"
                    >
                        Resume
                    </a>

                    <Link
                        href="#contact"
                        className="rounded-buttons border border-edge-soft bg-action px-16 py-8 text-nav-control leading-nav-control font-medium text-action-content shadow-subtle-3 transition-opacity hover:opacity-90"
                    >
                        Hire me
                    </Link>
                </div>
            </nav>
        </div>
    );
}