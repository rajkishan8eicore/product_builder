import { ModeToggle } from "@/components/ui/ModeToggle";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="w-full border-t bg-background text-sm text-muted-foreground">
            <div className="flex items-center justify-between px-20 py-4 mx-auto">
                <span>&copy; {year} Eicore Technologies Pvt. Ltd. All rights reserved.</span>
                <ModeToggle />
            </div>
        </footer>
    );
}
