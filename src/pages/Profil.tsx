import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { MapPin, Users, Building, Calendar } from "lucide-react";

const Profil = () => {
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
                Profil Desa Randuagung
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Mengenal lebih dekat Desa Randuagung, Kecamatan Singosari, Kabupaten Malang
              </p>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="village-card p-6 text-center">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-2">13.746</h3>
                <p className="text-muted-foreground">Total Penduduk</p>
              </Card>
              <Card className="village-card p-6 text-center">
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-2">0</h3>
                <p className="text-muted-foreground">Kepala Keluarga</p>
              </Card>
              <Card className="village-card p-6 text-center">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-2">0</h3>
                <p className="text-muted-foreground">Dusun</p>
              </Card>
              <Card className="village-card p-6 text-center">
                <Calendar className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-foreground mb-2">0</h3>
                <p className="text-muted-foreground">RT/RW</p>
              </Card>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Sejarah */}
              <Card className="village-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Sejarah Desa</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Desa Randuagung terletak di Kecamatan Singosari, Kabupaten Malang, Jawa Timur. 
                  Desa ini memiliki sejarah panjang sebagai bagian dari wilayah Singosari yang kaya akan 
                  budaya dan tradisi Jawa. Dengan komitmen untuk terus berkembang, Desa Randuagung 
                  berupaya memberikan pelayanan terbaik kepada seluruh masyarakat.
                </p>
              </Card>

              {/* Visi Misi */}
              <Card className="village-card p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Visi & Misi</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Visi</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      "Terwujudnya Desa Randuagung yang maju, mandiri, dan sejahtera 
                      berdasarkan nilai-nilai gotong royong dan kearifan lokal"
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Misi</h3>
                    <ul className="text-muted-foreground space-y-1">
                      <li>• Meningkatkan kualitas pelayanan publik</li>
                      <li>• Mengembangkan potensi ekonomi desa</li>
                      <li>• Memelihara budaya dan tradisi lokal</li>
                      <li>• Membangun infrastruktur yang berkelanjutan</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Profil;