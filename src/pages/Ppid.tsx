import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Download, 
  Search, 
  Shield, 
  Clock,
  ArrowRight,
  Eye,
  Info
} from "lucide-react";

const Ppid = () => {
  const informationCategories = [
    "Profil Desa",
    "Keuangan Desa", 
    "Program Kerja",
    "Peraturan Desa",
    "Laporan Tahunan",
    "Data Statistik"
  ];

  const publicInformation = [
    {
      title: "Profil Desa Randuagung",
      description: "Informasi lengkap tentang profil, visi, misi, dan struktur organisasi desa",
      category: "Profil Desa",
      type: "Informasi Berkala",
      lastUpdated: "2025-01-01",
      format: "PDF",
      size: "0 MB"
    },
    {
      title: "APBDes Tahun 2025",
      description: "Anggaran Pendapatan dan Belanja Desa untuk tahun anggaran 2025",
      category: "Keuangan Desa",
      type: "Informasi Berkala",
      lastUpdated: "2025-01-01",
      format: "PDF", 
      size: "0 MB"
    },
    {
      title: "Program Kerja Desa 2025",
      description: "Rencana program kerja dan kegiatan pembangunan desa tahun 2025",
      category: "Program Kerja",
      type: "Informasi Berkala",
      lastUpdated: "2025-01-01",
      format: "PDF",
      size: "0 MB"
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
                PPID Desa Randuagung
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Pejabat Pengelola Informasi dan Dokumentasi - Transparansi Informasi Publik
              </p>
            </div>
          </div>
        </section>

        {/* PPID Info */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {/* Introduction */}
            <Card className="village-card p-8 mb-12">
              <div className="flex items-start gap-6">
                <div className="bg-gradient-primary w-16 h-16 rounded-xl flex items-center justify-center shadow-medium">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-foreground mb-4">
                    Tentang PPID Desa
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    PPID (Pejabat Pengelola Informasi dan Dokumentasi) Desa Randuagung bertugas 
                    mengelola dan menyediakan informasi publik sesuai dengan UU No. 14 Tahun 2008 
                    tentang Keterbukaan Informasi Publik. Kami berkomitmen untuk memberikan akses 
                    informasi yang transparan dan akuntabel kepada masyarakat.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="text-center p-4 bg-accent/50 rounded-lg">
                      <Eye className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold text-foreground">Transparansi</h3>
                      <p className="text-sm text-muted-foreground">Keterbukaan informasi publik</p>
                    </div>
                    <div className="text-center p-4 bg-accent/50 rounded-lg">
                      <Shield className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold text-foreground">Akuntabilitas</h3>
                      <p className="text-sm text-muted-foreground">Pertanggungjawaban publik</p>
                    </div>
                    <div className="text-center p-4 bg-accent/50 rounded-lg">
                      <FileText className="h-8 w-8 text-primary mx-auto mb-2" />
                      <h3 className="font-semibold text-foreground">Dokumentasi</h3>
                      <p className="text-sm text-muted-foreground">Pengelolaan dokumen</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Search and Filters */}
            <Card className="village-card p-6 mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <input 
                    type="text" 
                    placeholder="Cari informasi publik..."
                    className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {informationCategories.map((category) => (
                    <Button
                      key={category}
                      variant="outline"
                      size="sm"
                      className="rounded-full"
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>
            </Card>

            {/* Information List */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground">Daftar Informasi Publik</h2>
              
              {publicInformation.length > 0 ? (
                <div className="grid gap-6">
                  {publicInformation.map((info, index) => (
                    <Card key={index} className="village-card p-6 hover:scale-105 transition-transform duration-300">
                      <div className="flex items-start justify-between gap-6">
                        <div className="flex items-start gap-4 flex-1">
                          <div className="bg-gradient-primary w-12 h-12 rounded-lg flex items-center justify-center">
                            <FileText className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h3 className="text-lg font-bold text-foreground">{info.title}</h3>
                              <Badge variant="outline">{info.type}</Badge>
                            </div>
                            <p className="text-muted-foreground mb-3">{info.description}</p>
                            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Info className="h-4 w-4" />
                                <span>Kategori: {info.category}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>Update: {new Date(info.lastUpdated).toLocaleDateString('id-ID')}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <FileText className="h-4 w-4" />
                                <span>{info.format} - {info.size}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            <Eye className="h-4 w-4" />
                            Lihat
                          </Button>
                          <Button variant="village" size="sm">
                            <Download className="h-4 w-4" />
                            Unduh
                          </Button>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="village-card p-12 text-center">
                  <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-foreground mb-2">Belum Ada Informasi</h3>
                  <p className="text-muted-foreground max-w-md mx-auto">
                    Saat ini belum ada informasi publik yang tersedia. 
                    Silakan cek kembali secara berkala.
                  </p>
                </Card>
              )}
            </div>

            {/* Request Information */}
            <Card className="village-card p-8 mt-12 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Permohonan Informasi Publik
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Tidak menemukan informasi yang Anda cari? Ajukan permohonan informasi publik 
                sesuai dengan prosedur yang berlaku.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="village" size="lg">
                  Ajukan Permohonan
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Panduan Permohonan
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

export default Ppid;