<template>
  <div>
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl font-bold mb-4 fade-in">Mes Projets</h1>
          <p
            class="text-xl text-gray-600 dark:text-gray-400 mb-8 fade-in delay-100"
          >
            Une collection de mes travaux récents et projets personnels
          </p>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="mb-8 fade-in delay-200">
            <UInput
              v-model="search"
              icon="i-heroicons-magnifying-glass"
              placeholder="Rechercher des projets..."
            />
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(project, index) in filteredProjects"
              :key="index"
              class="project-card fade-in"
              :class="`delay-${(index % 3) * 100}`"
            >
              <UCard class="h-full flex flex-col transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <template #header>
                  <div class="overflow-hidden">
                    <img
                      :src="project.image"
                      :alt="project.title"
                      class="w-full h-48 object-cover transform transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                </template>
                <div class="flex-grow">
                  <h3 class="text-xl font-semibold mb-2">
                    {{ project.title }}
                  </h3>
                  <p class="text-gray-600 dark:text-gray-400 mb-4">
                    {{ project.description }}
                  </p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <UBadge
                      v-for="tech in project.technologies"
                      :key="tech"
                      color="primary"
                      variant="soft"
                    >
                      {{ tech }}
                    </UBadge>
                  </div>
                </div>
                <template #footer>
                  <div class="flex justify-between">
                    <UButton
                      v-if="project.demo"
                      :to="project.demo"
                      target="_blank"
                      color="primary"
                    >
                      Démo
                    </UButton>
                    <UButton
                      v-if="project.github"
                      :to="project.github"
                      target="_blank"
                      color="gray"
                      variant="ghost"
                    >
                      <UIcon name="i-simple-icons-github" class="mr-1" /> GitHub
                    </UButton>
                  </div>
                </template>
              </UCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const search = ref("");

const projects = [
  {
    title: "Calculateur dynamique d'âge",
    description:
      "Une plateforme complète calculant dynamiquement l'âge compte tenu de la date de naissance avec une interface attrayante.",
    image: "assets/desktop-preview.jpg",
    technologies: ["HTML", "CSS", "JavaScript"],
    demo: "https://age-calculator-txt.netlify.app/",
    github: "https://github.com/moufidagbannonde/age-calculator-app",
  },
  {
    title: "Modèle de Portfolio",
    description:
      "Un modèle de portfolio pour la présentation des compétences et atouts du dévéloppeur.",
    image: "assets/image.png",
    technologies: ["NuxtJS", "TypeScript", "TailwindCSS", "GSAP"],
    demo: "/",
    github: "https://github.com/moufidagbannonde/portfolio-nuxt",
  },
  {
    title: "Connectly",
    description: "Une application de blogs",
    image: "assets/connectly.png",
    technologies: ["NuxtJS", "NuxtUI", "Firebase"],
    demo: "/",
    github: "https://github.com/moufidagbannonde/connectly",
  },
  {
    title: "Application de suivi mental",
    description:
      "Une application qui vous offre des exercices de concentration, de détente , compte tenu de l'humeur de l'utilisateur . Affichage dynamique d'un graphique d'évolution de l'humeur",
    image: "assets/arthelays-mental.png",
    technologies: ["React JS", "Node JS", "MongoDB", "i18n"],
    demo: "/",
    github: "https://github.com/moufidagbannonde/Mental-Survivor",
  },
  {
    title: "Moufid AI Chat",
    description:
      "Une  application web qui utilise l'API Gemini pour permettre aux utilisateurs de discuter avec un chatbot.",
    image:
      "assets/gemini-chat.png",
    technologies: ["Vue.js", "API Integration", "Tailwind CSS"],
    demo: "/",
    github: "https://github.com/moufidagbannonde/Gemini-Chat",
  },
  // {
  //   title: "Plateforme de Blog",
  //   description:
  //     "Un système de gestion de contenu pour créer et gérer des articles de blog avec authentification utilisateur.",
  //   image:
  //     "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&format&fit=crop&w=1470&q=80",
  //   technologies: ["Node.js", "Express", "MongoDB", "EJS"],
  //   demo: "https://example.com/blog",
  //   github: "https://github.com/yourusername/blog",
  // },
];

const filteredProjects = computed(() => {
  if (!search.value) return projects;

  const searchTerm = search.value.toLowerCase();
  return projects.filter((project) => {
    return (
      project.title.toLowerCase().includes(searchTerm) ||
      project.description.toLowerCase().includes(searchTerm) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm)
      )
    );
  });
});

onMounted(() => {
  if (process.client) {
    import("gsap").then(({ gsap }) => {
      gsap.from(".fade-in", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".project-card", {
        scrollTrigger: {
          trigger: ".project-card",
          start: "top bottom-=100",
          toggleActions: "play none none reverse"
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });
    });
  }
});
</script>

<style>
.project-card {
  transition: transform 0.3s ease-in-out;
}

.project-card:hover {
  transform: translateY(-5px);
}

/* Smooth transition for all interactive elements */
.fade-in,
.UButton,
.UBadge {
  transition: all 0.3s ease-in-out;
}

/* Smooth image zoom effect */
.overflow-hidden {
  overflow: hidden;
}

/* Search input animation */
.UInput {
  transition: all 0.3s ease;
}

.UInput:focus-within {
  transform: scale(1.02);
}

/* Badge hover effect */
.UBadge:hover {
  transform: scale(1.1);
}

/* Button hover animation */
.UButton {
  position: relative;
  overflow: hidden;
}

.UButton::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(-100%);
  transition: transform 0.3s ease;
}

.UButton:hover::after {
  transform: translateX(0);
}
</style>