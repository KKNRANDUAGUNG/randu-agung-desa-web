import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Calendar } from "lucide-react";
import heroVillageImage from "@/assets/hero-village.jpg";
import logoDesaImage from "@/assets/logo-desa.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroVillageImage})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 pattern-islamic opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-6">
            <img 
              src={logoDesaImage} 
              alt="Logo Desa Randuagung" 
              className="h-20 w-20 filter drop-shadow-lg"
            />
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-2">
                Desa Randuagung
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                Kabupaten Kutai Kartanegara
              </p>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 mb-8 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Selamat Datang di Website Resmi
            </h2>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Portal informasi terdepan untuk pelayanan masyarakat, berita terkini, 
              dan perkembangan pembangunan Desa Randuagung.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="h-5 w-5" />
                <span>Kalimantan Timur</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Users className="h-5 w-5" />
                <span>2,850 Jiwa</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Calendar className="h-5 w-5" />
                <span>Tahun {new Date().getFullYear()}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                Jelajahi Layanan
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                Profil Desa
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Islamic Ornament */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      
      {/* Floating ornaments */}
      <div className="absolute top-10 right-10 text-6xl text-village-gold opacity-20 animate-pulse">
        ❋
      </div>
      <div className="absolute bottom-20 left-10 text-4xl text-village-gold opacity-30 animate-pulse delay-1000">
        ✧
      </div>
    </section>
  );
};

export default HeroSection;