import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const Berita = () => {
  const newsCategories = [
    "Semua Berita",
    "Pembangunan",
    "Pelayanan",
    "Kegiatan",
    "Pengumuman"
  ];

  const news = [
    {
      id: 1,
      title: "Belum Ada Berita Terbaru",
      excerpt: "Saat ini belum ada berita yang dipublikasikan. Silakan cek kembali secara berkala untuk mendapatkan informasi terbaru dari Desa Randuagung.",
      category: "Pengumuman",
      date: "2025-01-01",
      author: "Admin Desa",
      image: "/placeholder.svg"
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
                Berita Desa
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Informasi terkini seputar kegiatan, pembangunan, dan pelayanan di Desa Randuagung
              </p>
            </div>
          </div>
        </section>

        {/* News Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {newsCategories.map((category) => (
                <Button
                  key={category}
                  variant={category === "Semua Berita" ? "village" : "outline"}
                  className="rounded-full"
                >
                  {category}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((article) => (
                <Card key={article.id} className="village-card overflow-hidden hover:scale-105 transition-transform duration-300">
                  <div className="aspect-video bg-gradient-subtle flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <div className="text-4xl mb-2">📰</div>
                      <p>Gambar Berita</p>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary">{article.category}</Badge>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.date).toLocaleDateString('id-ID')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                    </div>
                    <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary-dark">
                      Baca Selengkapnya
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>

            {news.length === 0 && (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">📰</div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Belum Ada Berita</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Saat ini belum ada berita yang dipublikasikan. 
                  Silakan cek kembali secara berkala untuk mendapatkan informasi terbaru.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Berita;