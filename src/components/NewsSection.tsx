"use client";

import { ArrowRight } from "lucide-react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const NewsSection = () => {
  const navigate = useNavigate();

  const news = [
    {
      title: "Kegiatan Posyandu Balita di Desa",
      date: "25 Juli 2023",
      image: "/images/news1.jpg",
      excerpt: "Kegiatan Posyandu rutin digelar untuk memantau kesehatan balita di desa...",
    },
    {
      title: "Pelatihan UMKM Bagi Warga",
      date: "10 Agustus 2023",
      image: "/images/news2.jpg",
      excerpt: "Pelatihan UMKM bertujuan untuk meningkatkan perekonomian warga...",
    },
    {
      title: "Pembangunan Jalan Baru Selesai",
      date: "1 September 2023",
      image: "/images/news3.jpg",
      excerpt: "Pembangunan jalan baru sepanjang 2 km telah selesai dikerjakan...",
    },
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Berita Terbaru</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <Card key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                <p className="text-gray-700 dark:text-gray-300">{item.excerpt}</p>
              </CardContent>
              <CardFooter className="p-4">
                <Button
                  variant="link"
                  className="text-primary p-0"
                  onClick={() => navigate(`/berita/${index}`)}
                >
                  Baca Selengkapnya
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="village" size="lg" onClick={() => navigate("/berita")}>
            Lihat Semua Berita
            <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
