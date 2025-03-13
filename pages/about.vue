<template>
  <div>
    <UContainer>
      <section class="py-20 bg-gray-50 dark:bg-gray-900 rounded-xl mb-8">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <h1 class="text-4xl font-bold mb-8 text-center fade-in">
              <UBadge color="primary" size="lg" class="mb-4">About Me</UBadge>
            </h1>
            <div class="flex flex-col md:flex-row gap-8 items-center">
              <div class="md:w-1/3 fade-in delay-100">
                <div class="w-full h-[300px] relative overflow-hidden rounded-full">
                  <img 
                    src="/assets/hyogadr.jpg" 
                    alt="Profile Picture" 
                    class="w-full h-full object-cover border-4 border-primary-500 shadow-2xl hover:scale-105 transition-transform duration-500 rounded-xl"
                  />
                </div>
              </div>
              <div class="md:w-2/3 fade-in delay-200">
                <UCard>
                  <template #header>
                    <div class="flex items-center gap-2">
                      <UIcon name="i-heroicons-user-circle" class="text-2xl text-primary-500" />
                      <h3 class="text-xl font-semibold">Introduction</h3>
                    </div>
                  </template>
                  <p class="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    Hello! I'm Your Name, a passionate web developer with over 5 years of experience in creating beautiful and functional websites and applications.
                  </p>
                  <p class="text-lg text-gray-600 dark:text-gray-400 mb-4">
                    I specialize in front-end development using modern frameworks like Vue.js, Nuxt, and React, as well as back-end development with Node.js and Python.
                  </p>
                  <p class="text-lg text-gray-600 dark:text-gray-400">
                    When I'm not coding, you can find me hiking, reading, or experimenting with new technologies.
                  </p>
                </UCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16">
        <UCard class="mb-8">
          <template #header>
            <div class="flex items-center gap-2 mb-4">
              <UIcon name="i-heroicons-briefcase" class="text-2xl text-primary-500" />
              <h2 class="text-3xl font-bold">My Journey</h2>
            </div>
          </template>
          <UTimeline>
            <UTimelineItem 
              v-for="(item, index) in journey" 
              :key="index" 
              class="fade-in"
              :class="`delay-${index * 100}`"
            >
              <template #icon>
                <UIcon name="i-heroicons-academic-cap" />
              </template>
              <template #title>
                <h4 class="text-lg font-semibold">{{ item.title }}</h4>
              </template>
              <template #description>
                <p class="text-gray-600 dark:text-gray-400">{{ item.description }}</p>
              </template>
              <template #time>
                <UBadge color="primary" variant="soft">{{ item.period }}</UBadge>
              </template>
            </UTimelineItem>
          </UTimeline>
        </UCard>
      </section>

      <section class="py-16 bg-gray-50 dark:bg-gray-900 rounded-xl">
        <div class="container mx-auto px-4">
          <div class="max-w-4xl mx-auto">
            <div class="flex items-center gap-2 mb-8">
              <UIcon name="i-heroicons-code-bracket" class="text-2xl text-primary-500" />
              <h2 class="text-3xl font-bold">Skills</h2>
            </div>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
              <UHover v-for="(skill, index) in skills" :key="index">
                <UCard class="text-center transition-all duration-300 hover:shadow-xl" :ui="{ body: { padding: 'p-4' } }">
                  <UIcon :name="skill.icon" class="text-4xl text-primary-500 mb-2" />
                  <h3 class="font-semibold">{{ skill.name }}</h3>
                  <UProgress :value="skill.level || 80" class="mt-2" />
                </UCard>
              </UHover>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16">
        <UCard>
          <template #header>
            <div class="flex items-center gap-2 mb-4">
              <UIcon name="i-heroicons-academic-cap" class="text-2xl text-primary-500" />
              <h2 class="text-3xl font-bold">Education</h2>
            </div>
          </template>
          <div class="space-y-6">
            <UCard v-for="(edu, index) in education" :key="index" class="fade-in" :class="`delay-${index * 100}`">
              <div class="flex flex-col md:flex-row gap-4">
                <div class="md:w-1/4">
                  <UBadge color="primary" variant="soft" size="lg">{{ edu.period }}</UBadge>
                </div>
                <div class="md:w-3/4">
                  <h4 class="text-lg font-semibold mb-2">{{ edu.degree }}</h4>
                  <p class="text-gray-600 dark:text-gray-400 mb-2">
                    <UIcon name="i-heroicons-building-office" class="inline mr-2" />
                    {{ edu.institution }}
                  </p>
                  <p class="text-gray-600 dark:text-gray-400">{{ edu.description }}</p>
                </div>
              </div>
            </UCard>
          </div>
        </UCard>
      </section>
    </UContainer>
  </div>
</template>

<script setup>
const journey = [
  {
    period: '2020 - Present',
    title: 'Senior Web Developer',
    company: 'Tech Solutions Inc.',
    description: 'Leading the front-end development team, implementing modern web technologies, and mentoring junior developers.'
  },
  {
    period: '2018 - 2020',
    title: 'Web Developer',
    company: 'Digital Creations',
    description: 'Developed responsive websites and web applications for various clients using Vue.js and Node.js.'
  },
  {
    period: '2016 - 2018',
    title: 'Junior Developer',
    company: 'StartUp Innovations',
    description: 'Started my career working on UI/UX design and front-end development for startup projects.'
  }
]

const skills = [
  { name: 'HTML/CSS', icon: 'i-simple-icons-html5' },
  { name: 'JavaScript', icon: 'i-simple-icons-javascript' },
  { name: 'Vue.js', icon: 'i-simple-icons-vuedotjs' },
  { name: 'Nuxt.js', icon: 'i-simple-icons-nuxtdotjs' },
  { name: 'React', icon: 'i-simple-icons-react' },
  { name: 'Node.js', icon: 'i-simple-icons-nodedotjs' },
  { name: 'Python', icon: 'i-simple-icons-python' },
  { name: 'Git', icon: 'i-simple-icons-git' }
]

const education = [
  {
    period: '2014 - 2016',
    degree: 'Master in Computer Science',
    institution: 'University of Technology',
    description: 'Specialized in web development and software engineering with focus on modern frameworks and methodologies.'
  },
  {
    period: '2010 - 2014',
    degree: 'Bachelor in Computer Science',
    institution: 'State University',
    description: 'Studied fundamentals of programming, algorithms, and data structures with minor in graphic design.'
  }
]

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