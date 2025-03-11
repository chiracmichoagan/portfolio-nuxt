<template>
  <div>
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <UButton to="/projects" color="gray" variant="ghost" class="mb-6">
            <UIcon name="i-heroicons-arrow-left" class="mr-2" /> Retour aux projets
          </UButton>
          
          <div v-if="project" class="fade-in">
            <img :src="`http://localhost:3000/${project.image}`" :alt="project.title" class="w-full h-64 object-cover rounded-lg mb-6" />
            
            <h1 class="text-4xl font-bold mb-4">{{ project.title }}</h1>
            
            <div class="flex flex-wrap gap-2 mb-6">
              <UBadge v-for="tech in project.technologies" :key="tech" color="primary" variant="soft">
                {{ tech }}
              </UBadge>
            </div>
            
            <div class="prose prose-lg dark:prose-invert max-w-none mb-8">
              <p>{{ project.description }}</p>
              <p>{{ project.longDescription }}</p>
            </div>
            
            <div class="flex flex-wrap gap-4">
              <UButton v-if="project.demo" :to="project.demo" target="_blank" color="primary">
                Voir la démo
              </UButton>
              <UButton v-if="project.github" :to="project.github" target="_blank" color="gray" variant="ghost">
                <UIcon name="i-simple-icons-github" class="mr-1" /> GitHub
              </UButton>
            </div>
          </div>
          
          <div v-else class="text-center py-12">
            <p class="text-xl text-gray-600 dark:text-gray-400">Projet non trouvé</p>
            <UButton to="/projects" color="primary" class="mt-4">
              Voir tous les projets
            </UButton>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const route = useRoute();
const id = parseInt(route.params.id);

// Données des projets (idéalement, ces données devraient être partagées via un store ou une API)
const allProjects = [
  {
    title: 'Calculateur dynamique d\'âge',
    description: 'Une plateforme complète calculant dynamiquement l\'âge compte tenu de la date de naissance avec une interface attrayante.',
    longDescription: 'Ce calculateur d\'âge permet aux utilisateurs d\'entrer leur date de naissance et obtenir instantanément leur âge précis en années, mois et jours. L\'interface est conçue pour être intuitive et responsive, s\'adaptant à tous les appareils. Le projet utilise JavaScript pour les calculs et CSS pour une présentation élégante des résultats.',
    image: 'assets/desktop-preview.jpg',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    demo: 'https://example.com/age-calculator',
    github: 'https://github.com/moufidagbannonde/age-calculator-app'
  },
  {
    title: 'Générateur de Code QR',
    description: 'Un modèle de génération d\'un code QR unique basé sur du texte entré par l\'utilisateur personnalisable pour les professionnels créatifs et les agences.',
    longDescription: 'Ce générateur de code QR permet aux utilisateurs de créer facilement des codes QR à partir de n\'importe quel texte ou URL. Les codes générés peuvent être téléchargés en haute résolution pour une utilisation dans des documents imprimés ou numériques. L\'application offre également des options de personnalisation comme la couleur et la taille du code QR.',
    image: 'assets/salut.png',
    technologies: ['HTML', 'CSS','Node JS', 'QR Code API'],
    demo: 'https://example.com/qr-generator',
    github: 'https://github.com/moufidagbannonde/qrcode-generator'
  }
];

const project = computed(() => {
  return allProjects[id] || null;
});

// Animation GSAP
onMounted(() => {
  if (process.client) {
    import('gsap').then(({ gsap }) => {
      gsap.from('.fade-in', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out'
      });
    });
  }
});
</script>