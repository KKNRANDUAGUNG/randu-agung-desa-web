import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Users, 
  Building, 
  Heart, 
  GraduationCap, 
  Landmark,
  Clock,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const Pelayanan = () => {
  const services = [
    {
      icon: FileText,
      title: "Administrasi Kependudukan",
      description: "Pelayanan KTP, KK, Akta Kelahiran, dan dokumen kependudukan lainnya",
      requirements: ["Fotokopi KK", "Pas Foto", "Formulir Permohonan"],
      processTime: "1-3 Hari Kerja",
      cost: "Gratis",
      color: "bg-gradient-primary"
    },
    {
      icon: Building,
      title: "Perizinan Usaha",
      description: "Bantuan pengurusan izin usaha mikro dan kecil di tingkat desa",
      requirements: ["Surat Permohonan", "Fotokopi KTP", "Denah Lokasi"],
      processTime: "3-7 Hari Kerja",
      cost: "Gratis",
      color: "bg-gradient-golden"
    },
    {
      icon: Heart,
      title: "Kesehatan Masyarakat",
      description: "Program Posyandu, Lansia, dan pelayanan kesehatan dasar",
      requirements: ["Kartu Keluarga", "Buku KIA", "Kartu BPJS"],
      processTime: "Sesuai Jadwal",
      cost: "Gratis",
      color: "bg-gradient-primary"
    },
    {
      icon: GraduationCap,
      title: "Pendidikan",
      description: "Beasiswa, bantuan pendidikan, dan program literasi masyarakat",
      requirements: ["Surat Keterangan Tidak Mampu", "Rapor", "Fotokopi KK"],
      processTime: "Sesuai Periode",
      cost: "Gratis",
      color: "bg-gradient-golden"
    },
    {
      icon: Users,
      title: "Pemberdayaan Masyarakat",
      description: "Program PKK, Karang Taruna, dan kegiatan sosial kemasyarakatan",
      requirements: ["Formulir Pendaftaran", "Fotokopi KTP"],
      processTime: "Langsung",
      cost: "Gratis",
      color: "bg-gradient-primary"
    },
    {
      icon: Landmark,
      title: "Bantuan Sosial",
      description: "Penyaluran bantuan pemerintah dan program kesejahteraan rakyat",
      requirements: ["Surat Keterangan Tidak Mampu", "Fotokopi KK", "Fotokopi KTP"],
      processTime: "Sesuai Program",
      cost: "Gratis",
      color: "bg-gradient-golden"
    }
  ];

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
                Pelayanan Desa
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Berbagai layanan publik yang tersedia untuk masyarakat Desa Randuagung
              </p>
            </div>
          </div>
        </section>

        {/* Service Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Service Hours */}
            <Card className="village-card p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                <div className="flex items-center justify-center gap-3">
                  <Clock className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-bold text-foreground">Jam Pelayanan</h3>
                    <p className="text-muted-foreground">Senin - Jumat: 08.00 - 16.00</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-bold text-foreground">Pelayanan Gratis</h3>
                    <p className="text-muted-foreground">Semua layanan tidak dipungut biaya</p>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3">
                  <Users className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="font-bold text-foreground">Pelayanan Ramah</h3>
                    <p className="text-muted-foreground">Dilayani dengan sopan dan profesional</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Services Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="village-card p-8 hover:scale-105 transition-transform duration-300">
                    <div className="flex items-start gap-6">
                      <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center shadow-medium flex-shrink-0`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-3">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {service.description}
                        </p>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="font-semibold text-foreground mb-2">Persyaratan:</h4>
                            <ul className="space-y-1">
                              {service.requirements.map((req, reqIndex) => (
                                <li key={reqIndex} className="text-muted-foreground text-sm flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                                  {req}
                                </li>
                              ))}
                            </ul>
                          </div>
                          
                          <div className="flex flex-wrap gap-3">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Clock className="h-3 w-3" />
                              {service.processTime}
                            </Badge>
                            <Badge variant="secondary" className="text-green-700 bg-green-100">
                              {service.cost}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-border">
                      <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary-dark">
                        Pelajari Prosedur Lengkap
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Button>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Contact Section */}
            <Card className="village-card p-8 mt-12 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Butuh Bantuan Pelayanan?
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Tim pelayanan kami siap membantu Anda. Jangan ragu untuk menghubungi kami 
                jika memerlukan informasi lebih lanjut atau bantuan dalam proses pelayanan.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="village" size="lg">
                  Hubungi Kami
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Formulir Online
                </Button>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Pelayanan;