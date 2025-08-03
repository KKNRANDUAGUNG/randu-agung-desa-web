import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Calendar } from "lucide-react";
import heroVillageImage from "@/assets/hero-village.jpg";
import logoDesaImage from "@/assets/logo-desa.png";

const HeroSection = () => {
  const navigate = useNavigate();

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
                Kecamatan Singosari, Malang
              </p>
            </div>
          </div>

          <div className="glass rounded-2xl p-8 mb-8 max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Selamat Datang di Website Resmi
            </h2>
            <p className="text-lg text-white/90 mb-6 leading-relaxed">
              Portal informasi terdepan untuk pelayanan masyarakat, berita
              terkini, dan perkembangan pembangunan Desa Randuagung.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="h-5 w-5" />
                <span>Jawa Timur</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Users className="h-5 w-5" />
                <span>13.746 Jiwa</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Calendar className="h-5 w-5" />
                <span>Tahun {new Date().getFullYear()}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 px-6 py-3 text-white font-semibold shadow-md hover:opacity-90 transition-all duration-200"
                onClick={() => navigate("/profil")}
              >
                Profil Desa
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2 h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
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
