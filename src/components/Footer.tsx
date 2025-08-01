import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoDesaImage from "@/assets/logo-desa.png";

const Footer = () => {
  return (
    <footer className="bg-village-brown text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logoDesaImage} 
                alt="Logo Desa Randuagung" 
                className="h-12 w-12"
              />
              <div>
                <h3 className="text-xl font-bold">Desa Randuagung</h3>
                <p className="text-white/80">Kabupaten Kutai Kartanegara</p>
              </div>
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Desa Randuagung berkomitmen untuk memberikan pelayanan terbaik kepada masyarakat 
              dan terus berinovasi dalam pembangunan desa yang berkelanjutan.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Kontak Kami</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-1 text-village-gold" />
                <div>
                  <p className="text-white/90">Jl. Desa Randuagung No. 1</p>
                  <p className="text-white/70">Kec. Tenggarong Seberang</p>
                  <p className="text-white/70">Kab. Kutai Kartanegara, Kaltim</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-village-gold" />
                <span className="text-white/90">(0541) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-village-gold" />
                <span className="text-white/90">info@randuagung.desa.id</span>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 mt-1 text-village-gold" />
                <div>
                  <p className="text-white/90">Senin - Jumat: 08.00 - 16.00</p>
                  <p className="text-white/70">Sabtu: 08.00 - 12.00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Tautan Cepat</h4>
            <div className="space-y-3">
              {[
                "Profil Desa",
                "Struktur Organisasi", 
                "Visi & Misi",
                "Pelayanan Publik",
                "Transparansi Dana Desa",
                "Pengaduan Masyarakat"
              ].map((link) => (
                <a 
                  key={link}
                  href="#" 
                  className="block text-white/70 hover:text-village-gold transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-center md:text-left">
              © 2025 Desa Randuagung. Seluruh hak cipta dilindungi.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/70 hover:text-village-gold transition-colors">
                Kebijakan Privasi
              </a>
              <a href="#" className="text-white/70 hover:text-village-gold transition-colors">
                Syarat & Ketentuan
              </a>
              <a href="#" className="text-white/70 hover:text-village-gold transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;