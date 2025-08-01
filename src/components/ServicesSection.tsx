import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  FileText, 
  Users, 
  Building, 
  Heart, 
  GraduationCap, 
  Landmark,
  ArrowRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Administrasi Kependudukan",
      description: "Pelayanan KTP, KK, Akta Kelahiran, dan dokumen kependudukan lainnya",
      color: "bg-gradient-primary"
    },
    {
      icon: Building,
      title: "Perizinan Usaha",
      description: "Bantuan pengurusan izin usaha mikro dan kecil di tingkat desa",
      color: "bg-gradient-golden"
    },
    {
      icon: Heart,
      title: "Kesehatan Masyarakat",
      description: "Program Posyandu, Lansia, dan pelayanan kesehatan dasar",
      color: "bg-gradient-primary"
    },
    {
      icon: GraduationCap,
      title: "Pendidikan",
      description: "Beasiswa, bantuan pendidikan, dan program literasi masyarakat",
      color: "bg-gradient-golden"
    },
    {
      icon: Users,
      title: "Pemberdayaan Masyarakat",
      description: "Program PKK, Karang Taruna, dan kegiatan sosial kemasyarakatan",
      color: "bg-gradient-primary"
    },
    {
      icon: Landmark,
      title: "Bantuan Sosial",
      description: "Penyaluran bantuan pemerintah dan program kesejahteraan rakyat",
      color: "bg-gradient-golden"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="ornament-divider mb-8"></div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Pelayanan Desa
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kami berkomitmen memberikan pelayanan terbaik untuk kesejahteraan 
            dan kemajuan masyarakat Desa Randuagung
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="village-card p-6 hover:scale-105 transition-transform duration-300"
              >
                <div className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-medium`}>
                  <Icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>
                <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary-dark">
                  Pelajari Lebih Lanjut
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <Button variant="village" size="lg">
            Lihat Semua Layanan
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;