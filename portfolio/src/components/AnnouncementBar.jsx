export default function AnnouncementBar() {
    return (
        <div className="border-y border-edge bg-surface py-8">
            <div className="mx-auto flex max-w-page items-center justify-center gap-8 px-16 text-center">
                <p className="text-nav-control leading-nav-control font-semibold text-content">
                    Available for new projects, Q4 2026
                </p>
                <a
                    href="#contact"
                    className="text-nav-control leading-nav-control font-medium text-content-muted transition-colors hover:text-content"
                >
                    Get in touch →
                </a>
            </div>
        </div>
    );
}