import React from "react";
import NewsCard from "./components/NewsLayout/NewsCard";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const newsItems = [
    {
      title: "Breaking News: Innovations in Cee Tee World",
      description:
        "Discover how Cee Tee World is reshaping the digital space with cutting-edge technologies and user-friendly designs.",
      imageUrl: "https://via.placeholder.com/400x300",
      link: "https://www.ceeteeworld.com/news",
      date: "Nov 29, 2024",
      category: "Innovation",
    },
    {
      title: "Highlights: Top Features of Cee Tee World",
      description:
        "Explore the groundbreaking features launched recently by Cee Tee World to enhance user experience.",
      imageUrl: "https://via.placeholder.com/400x300",
      link: "https://www.ceeteeworld.com/features",
      date: "Nov 28, 2024",
      category: "Features",
    },
  ];

  return (
    <div>
      <Navbar/>
    <div className="min-h-screen bg-gray-100 py-10">

      <h1 className="text-center text-3xl font-bold text-gray-800 mb-8">
        Cee Tee World News
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {newsItems.map((news, index) => (
          <NewsCard key={index} {...news} />
        ))}
      </div>
    </div>
        </div>
  );
};

export default App;
