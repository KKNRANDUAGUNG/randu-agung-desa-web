import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Info, BarChart3, Newspaper, Users, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import logoDesaImage from "@/assets/logo-desa.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Beranda", href: "/", icon: Home },
    { label: "Profil Desa", href: "/profil", icon: Info },
    { label: "Infografis", href: "/infografis", icon: BarChart3 },
    { label: "Berita", href: "/berita", icon: Newspaper },
    { label: "Pelayanan", href: "/pelayanan", icon: Users },
    { label: "PPID", href: "/ppid", icon: FileText },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 hover:scale-105 transition-transform duration-300">
            <img 
              src={logoDesaImage} 
              alt="Logo Desa Randuagung" 
              className="h-12 w-12"
            />
            <div className="hidden md:block">
              <h1 className="font-bold text-lg text-foreground">Desa Randuagung</h1>
              <p className="text-sm text-muted-foreground">Kecamatan Singosari, Malang</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {menuItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  to={item.href}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300 group"
                >
                  <Icon className="h-4 w-4 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-card/95 backdrop-blur-lg">
            <nav className="py-4">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="flex items-center gap-3 px-4 py-3 text-foreground hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;