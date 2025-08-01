import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Eye } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Pembangunan Jalan Desa Randuagung Memasuki Tahap Akhir",
      excerpt: "Proyek pembangunan infrastruktur jalan sepanjang 2.5 km ini diharapkan dapat meningkatkan konektivitas dan perekonomian masyarakat desa.",
      category: "Pembangunan",
      date: "15 Januari 2025",
      author: "Tim Humas Desa",
      views: 245,
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop"
    },
    {
      id: 2,
      title: "Program Pelatihan Keterampilan Menjahit untuk Ibu-Ibu PKK",
      excerpt: "Kegiatan pelatihan ini bertujuan untuk meningkatkan kemandirian ekonomi perempuan dan memberdayakan potensi lokal di bidang kerajinan.",
      category: "Pemberdayaan",
      date: "12 Januari 2025",
      author: "Ketua PKK Desa",
      views: 189,
      image: "https://images.unsplash.com/photo-1558618666-fcbb4c543603?w=400&h=250&fit=crop"
    },
    {
      id: 3,
      title: "Musyawarah Desa Membahas RPJM Desa 2025-2030",
      excerpt: "Seluruh elemen masyarakat diundang untuk berpartisipasi dalam penyusunan Rencana Pembangunan Jangka Menengah Desa periode selanjutnya.",
      category: "Pemerintahan",
      date: "8 Januari 2025",
      author: "Sekretaris Desa",
      views: 312,
      image: "https://images.unsplash.com/photo-1573167243872-43c6433b9d40?w=400&h=250&fit=crop"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Pembangunan":
        return "bg-village-green text-white";
      case "Pemberdayaan":
        return "bg-village-gold text-white";
      case "Pemerintahan":
        return "bg-village-brown text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="ornament-divider mb-8"></div>
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Berita & Informasi Terkini
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ikuti perkembangan terbaru dari berbagai kegiatan dan program 
            pembangunan di Desa Randuagung
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {news.map((item) => (
            <Card key={item.id} className="village-card overflow-hidden group cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={getCategoryColor(item.category)}>
                    {item.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {item.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{item.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-4 w-4" />
                      <span>{item.views}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <span>{item.author}</span>
                  </div>
                  <Button variant="ghost" size="sm" className="text-primary hover:text-primary-dark">
                    Baca Selengkapnya
                    <ArrowRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="village" size="lg">
            Lihat Semua Berita
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;