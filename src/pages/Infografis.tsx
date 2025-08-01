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
                Data dan statistik Desa Randuagung dalam bentuk visual yang mudah dipahami
              </p>
            </div>
          </div>
        </section>

        {/* Demographics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Demografi Penduduk</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              <Card className="village-card p-6">
                <Users className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">0</h3>
                <p className="text-muted-foreground">Total Penduduk</p>
                <div className="mt-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span>Laki-laki</span>
                    <span>0</span>
                  </div>
                  <Progress value={0} className="mb-2" />
                  <div className="flex justify-between text-sm">
                    <span>Perempuan</span>
                    <span>0</span>
                  </div>
                  <Progress value={0} />
                </div>
              </Card>

              <Card className="village-card p-6">
                <GraduationCap className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-4">Pendidikan</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>SD</span>
                    <span>0%</span>
                  </div>
                  <Progress value={0} />
                  <div className="flex justify-between text-sm">
                    <span>SMP</span>
                    <span>0%</span>
                  </div>
                  <Progress value={0} />
                  <div className="flex justify-between text-sm">
                    <span>SMA</span>
                    <span>0%</span>
                  </div>
                  <Progress value={0} />
                </div>
              </Card>

              <Card className="village-card p-6">
                <Briefcase className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-foreground mb-4">Pekerjaan</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Petani</span>
                    <span>0%</span>
                  </div>
                  <Progress value={0} />
                  <div className="flex justify-between text-sm">
                    <span>Pedagang</span>
                    <span>0%</span>
                  </div>
                  <Progress value={0} />
                  <div className="flex justify-between text-sm">
                    <span>PNS</span>
                    <span>0%</span>
                  </div>
                  <Progress value={0} />
                </div>
              </Card>

              <Card className="village-card p-6">
                <Home className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">0</h3>
                <p className="text-muted-foreground mb-4">Kepala Keluarga</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Ekonomi Atas</span>
                    <span>0%</span>
                  </div>
                  <Progress value={0} />
                  <div className="flex justify-between text-sm">
                    <span>Ekonomi Menengah</span>
                    <span>0%</span>
                  </div>
                  <Progress value={0} />
                  <div className="flex justify-between text-sm">
                    <span>Ekonomi Bawah</span>
                    <span>0%</span>
                  </div>
                  <Progress value={0} />
                </div>
              </Card>
            </div>

            {/* Additional Stats */}
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