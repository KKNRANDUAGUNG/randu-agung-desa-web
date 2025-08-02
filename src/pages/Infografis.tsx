import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Users, GraduationCap, Briefcase, Home } from "lucide-react";

const Infografis = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-subtle">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <div className="ornament-divider mb-8"></div>
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Infografis Desa
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Data dan statistik Desa Randuagung dalam bentuk visual yang
                mudah dipahami
              </p>
            </div>
          </div>
        </section>

        {/* Lokasi Desa (Google Maps) + Statistik */}
        <section className="pt-16 pb-24">
          <div className="container mx-auto px-4" >
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Lokasi Desa Randuagung
            </h2>
            <div className="overflow-hidden rounded-xl shadow-lg h-[60vh] mb-16">
            <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32359.3619601092!2d112.64429452998438!3d-7.864849653679171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd62b11a596f507%3A0xfec3750a9963bc87!2sRanduangung%2C%20Kec.%20Singosari%2C%20Kabupaten%20Malang%2C%20Jawa%20Timur!5e1!3m2!1sid!2sid!4v1752990048424!5m2!1sid!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Statistik */}
            <h2 className="text-3xl font-bold text-foreground text-center mb-8">
              Statistik Desa
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="village-card p-8 text-center">
                <h3 className="text-6xl font-bold text-primary mb-4">0</h3>
                <p className="text-lg text-foreground font-semibold">Dusun</p>
                <p className="text-muted-foreground">Wilayah Administrasi</p>
              </Card>

              <Card className="village-card p-8 text-center">
                <h3 className="text-6xl font-bold text-primary mb-4">0</h3>
                <p className="text-lg text-foreground font-semibold">RT/RW</p>
                <p className="text-muted-foreground">Rukun Tetangga & Warga</p>
              </Card>

              <Card className="village-card p-8 text-center">
                <h3 className="text-6xl font-bold text-primary mb-4">0</h3>
                <p className="text-lg text-foreground font-semibold">km²</p>
                <p className="text-muted-foreground">Luas Wilayah</p>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Infografis;
