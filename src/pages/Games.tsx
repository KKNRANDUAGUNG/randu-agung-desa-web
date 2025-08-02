import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Game = () => {
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
                Game Kuis Seru Banget Asli dah
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Penjelasan game nanti duls ya
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="village-card p-8 text-center">
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Klik TOMBOL dibawah untuk unduh gamenya!
              </h2>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="village" size="lg">
                  Unduh
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

export default Game;