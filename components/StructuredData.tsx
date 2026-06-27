export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://learningnow.in/#website",
        url: "https://learningnow.in",
        name: "LearningNow",
        description:
          "Learn Communication. Learn From Real Conversations. Educational podcasts, communication mastery, books and practical learning resources by Shivam Nanda.",
        inLanguage: "en-IN",
        publisher: {
          "@id": "https://learningnow.in/#organization",
        },
      },

      {
        "@type": "Organization",
        "@id": "https://learningnow.in/#organization",
        name: "LearningNow",
        url: "https://learningnow.in",
        logo: {
          "@type": "ImageObject",
          url: "https://learningnow.in/logo/learningnow-logo.png",
        },
        sameAs: [
          "https://www.youtube.com/@LearningNow25",
          "https://www.instagram.com/learningnow25/",
          "https://www.linkedin.com/in/shivam-nanda-472289418/",
        ],
      },

      {
        "@type": "Person",
        "@id": "https://learningnow.in/#shivam",
        name: "Shivam Nanda",
        givenName: "Shivam",
        familyName: "Nanda",
        url: "https://learningnow.in/about",
        image: "https://learningnow.in/about/shivam-nanda.jpg",
        description:
          "3rd Year Computer Science Engineering student at GCE Gaya, Educator, Author of 'Communication Is A Game. Be A Pro.', Podcast Host and Founder of LearningNow.",
        jobTitle: "Educator, Author & Podcast Host",
        alumniOf: {
          "@type": "CollegeOrUniversity",
          name: "Gaya College of Engineering",
        },
        worksFor: {
          "@id": "https://learningnow.in/#organization",
        },
        sameAs: [
          "https://www.youtube.com/@LearningNow25",
          "https://www.instagram.com/learningnow25/",
          "https://www.linkedin.com/in/shivam-nanda-472289418/",
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}