<template>
  <div>
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl font-bold mb-4 fade-in">My Projects</h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 fade-in delay-100">
            A collection of my recent work and personal projects
          </p>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-6xl mx-auto">
          <div class="mb-8 fade-in delay-200">
            <UInput v-model="search" icon="i-heroicons-magnifying-glass" placeholder="Search projects..." />
          </div>
          
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(project, index) in filteredProjects" :key="index" class="fade-in" :class="`delay-${index % 3 * 100}`">
              <UCard class="h-full flex flex-col">
                <template #header>
                  <img :src="project.image" :alt="project.title" class="w-full h-48 object-cover" />
                </template>
                <div class="flex-grow">
                  <h3 class="text-xl font-semibold mb-2">{{ project.title }}</h3>
                  <p class="text-gray-600 dark:text-gray-400 mb-4">
                    {{ project.description }}
                  </p>
                  <div class="flex flex-wrap gap-2 mb-4">
                    <UBadge v-for="tech in project.technologies" :key="tech" color="primary" variant="soft">
                      {{ tech }}
                    </UBadge>
                  </div>
                </div>
                <template #footer>
                  <div class="flex justify-between">
                    <UButton v-if="project.demo" :to="project.demo" target="_blank" color="primary">
                      Live Demo
                    </UButton>
                    <UButton v-if="project.github" :to="project.github" target="_blank" color="gray" variant="ghost">
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
const search = ref('')

const projects = [
  {
    title: 'Calculateur dynamique d\'âge',
    description: 'A fully functional e-commerce platform with payment integration, product management, and admin dashboard.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    technologies: ['Vue.js', 'Nuxt', 'Node.js', 'MongoDB'],
    demo: 'https://example.com/ecommerce',
    github: 'https://github.com/yourusername/ecommerce'
  },
  {
    title: 'Portfolio Template',
    description: 'A customizable portfolio template for creative professionals and agencies.',
    image: 'https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80',
    technologies: ['HTML', 'CSS', 'JavaScript', 'GSAP'],
    demo: 'https://example.com/portfolio',
    github: 'https://github.com/yourusername/portfolio'
  },
  {
    title: 'Task Management App',
    description: 'A productivity app for managing tasks, projects, and team collaboration.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80',
    technologies: ['React', 'Redux', 'Firebase'],
    demo: 'https://example.com/taskapp',
    github: 'https://github.com/yourusername/taskapp'
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather application that displays current and forecasted weather data for any location.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=765&q=80',
    technologies: ['JavaScript', 'API Integration', 'CSS'],
    demo: 'https://example.com/weather',
    github: 'https://github.com/yourusername/weather'
  },
  {
    title: 'Recipe Finder',
    description: 'An application that helps users find recipes based on ingredients they have at home.',
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    technologies: ['Vue.js', 'API Integration', 'Tailwind CSS'],
    demo: 'https://example.com/recipes',
    github: 'https://github.com/yourusername/recipes'
  },
  {
    title: 'Plateforme de Blog',
    description: 'A content management system for creating and managing blog posts with user authentication.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    technologies: ['Node.js', 'Express', 'MongoDB', 'EJS'],
    demo: 'https://example.com/blog',
    github: 'https://github.com/yourusername/blog'
  }
]

const filteredProjects = computed(() => {
  if (!search.value) return projects
  
  const searchTerm = search.value.toLowerCase()
  return projects.filter(project => {
    return project.title.toLowerCase().includes(searchTerm) || 
           project.description.toLowerCase().includes(searchTerm) ||
           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm))
  })
})

// Add GSAP animation when component is mounted
onMounted(() => {
  if (process.client) {
    import('gsap').then(({ gsap }) => {
      gsap.from('.fade-in', {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power2.out'
      })
    })
  }
})
</script>