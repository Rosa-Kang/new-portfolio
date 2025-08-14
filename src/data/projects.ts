export const projects = [
  {
    slug: 'brown-and-co',
    title: 'Brown&Co',
    description: 'generating wealth in a digital economy',
    year: 2023,
    industry: 'Art & Design',
    client: 'Granite Visions',
    imageUrl: '/images/projects/brown&co/brown&co-main.jpg',
    detail: {
      experience: "brown&co had a tight deadline to get their new site live in just 7 short weeks, and we were excited to rise to the challenge! We loved applying brown&co's new galactic-inspired brand to custom elements throughout the site, including layered identity elements, on scroll animation and more.",
      challenge: "The primary challenge in this project was to achieve a realistic stone texture that would evoke a tangible, physical presence while maintaining accurate human proportions and detail.",
      results: "The finished model and photographs produced for STONE MIND exceeded expectations. The product photos delivered a powerful visual impact, highlighting the unique texture and structure of the stones under varied lighting.",
      testimonial: {
        text: "The STONE MIND project is a stunning, textured centerpiece in our portfolio, with every detail of the 'stone head' meticulously crafted.",
        author: 'Olivia Grant',
        role: 'Founder & CEO',
      },
      images: [
        '/images/projects/brown&co/brown&co-detail-1.jpg',
        '/images/projects/brown&co/brown&co-detail-2.jpg',
        '/images/projects/brown&co/brown&co-detail-3.jpg',
      ]
    }
  },
  {
    slug: 'atabc',
    title: 'ATABC',
    description: 'lighting up the future of energy',
    year: 2024,
    industry: 'Energy',
    client: 'Future Systems',
    imageUrl: '/images/projects/atabc/atabc-main.jpg',
    detail: { // Using brown&co detail as a template
      experience: "atabc had a tight deadline to get their new site live in just 8 short weeks, and we were excited to rise to the challenge!",
      challenge: "The primary challenge in this project was to visualize complex energy data in an intuitive and beautiful way.",
      results: "The finished website provided a powerful tool for stakeholders, highlighting the unique value proposition of atabc's technology.",
      testimonial: {
        text: "A stunning, textured centerpiece in our portfolio.",
        author: 'Jane Doe',
        role: 'CEO',
      },
      images: [
        '/images/projects/atabc/atabc-detail-1.jpg',
        '/images/projects/atabc/atabc-detail-2.jpg',
        '/images/projects/atabc/atabc-detail-3.jpg',
      ]
    }
  }
];

export const faqs = [
    { 
        q: "What is your creative design process like?", 
        a: "My design process starts with fully understanding your goals and needs. I begin with research and brainstorming to gather insights, followed by sketching initial concepts. Once we agree on a creative direction, I develop detailed designs and make revisions based on your feedback. I strive for a seamless, collaborative process, ensuring that each step brings us closer to the perfect solution." 
    },
    { 
        q: "What is your typical project timeline?", 
        a: "The timeline varies depending on the complexity of the project. Typically, smaller projects like a logo design or single-page website take 1-2 weeks, while larger projects such as full brand identity or multi-page websites can take 4-6 weeks. I'll provide a detailed project timeline once we define the scope of the project, and I always aim to deliver on time." 
    },
    { 
        q: "How do I get started on a project with you?", 
        a: "Getting started is easy! Simply head over to the contact page and fill out the request form with as much detail as possible about your project. I'll review your request and get back to you within 1-2 business days to schedule a consultation." 
    },
    {
        q: "What should I do if you're fully booked?",
        a: "If my schedule is full, you can still reach out. I can either place you on a waiting list and notify you as soon as I have availability, or I can refer you to another talented designer in my network who might be a great fit for your project."
    }
];

export const services = ["UI&UX DESIGN", "BRAND ART", "ILLUSTRATION", "PHOTO", "VIDEO EDIT"];

export const getProjectBySlug = (slug: string) => {
  return projects.find((project) => project.slug === slug);
};