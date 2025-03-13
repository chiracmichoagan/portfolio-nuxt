<template>
  <div>
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h1 class="text-4xl font-bold mb-8 text-center fade-in">About Me</h1>
          <div class="flex flex-col md:flex-row gap-8 items-center">
            <div class="md:w-1/3 fade-in delay-100">
              <img src="../public/assets/hyogadr.jpg" 
                   alt="Profile Picture" 
                   class="rounded-full w-64 h-64 object-cover mx-auto shadow-lg" />
            </div>
            <div class="md:w-2/3 fade-in delay-200">
              <p class="text-lg text-gray-600 dark:text-gray-400 mb-4">
                Hello! I'm Your Name, a passionate web developer with over 5 years of experience in creating beautiful and functional websites and applications.
              </p>
              <p class="text-lg text-gray-600 dark:text-gray-400 mb-4">
                I specialize in front-end development using modern frameworks like Vue.js, Nuxt, and React, as well as back-end development with Node.js and Python.
              </p>
              <p class="text-lg text-gray-600 dark:text-gray-400">
                When I'm not coding, you can find me hiking, reading, or experimenting with new technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center fade-in">My Journey</h2>
          <div class="space-y-8">
            <div v-for="(item, index) in journey" :key="index" class="fade-in" :class="`delay-${index * 100}`">
              <UCard>
                <div class="flex flex-col md:flex-row gap-4">
                  <div class="md:w-1/4">
                    <h3 class="text-xl font-semibold text-primary-500">{{ item.period }}</h3>
                  </div>
                  <div class="md:w-1/4">
                    <h3 class="text-xl font-semibold text-primary-500">{{ item.period }}</h3>
                  </div>
                  <div class="md:w-3/4">
                    <h4 class="text-lg font-semibold mb-2">{{ item.title }}</h4>
                    <h5 class="text-md text-gray-600 dark:text-gray-400 mb-2">{{ item.company }}</h5>
                    <p class="text-gray-600 dark:text-gray-400">{{ item.description }}</p>
                  </div>
                </div>
              </UCard>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center fade-in">Skills</h2>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div v-for="(skill, index) in skills" :key="index" class="fade-in" :class="`delay-${index % 4 * 100}`">
              <UCard class="text-center">
                <div class="p-4">
                  <UIcon :name="skill.icon" class="text-4xl text-primary-500 mb-2" />
                  <h3 class="font-semibold">{{ skill.name }}</h3>
                </div>
              </UCard>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold mb-8 text-center fade-in">Education</h2>
          <div class="space-y-6">
            <div v-for="(edu, index) in education" :key="index" class="fade-in" :class="`delay-${index * 100}`">
              <UCard>
                <div class="flex flex-col md:flex-row gap-4">
                  <div class="md:w-1/4">
                    <h3 class="text-xl font-semibold text-primary-500">{{ edu.period }}</h3>
                  </div>
                  <div class="md:w-3/4">
                    <h4 class="text-lg font-semibold mb-2">{{ edu.degree }}</h4>
                    <h5 class="text-md text-gray-600 dark:text-gray-400 mb-2">{{ edu.institution }}</h5>
                    <p class="text-gray-600 dark:text-gray-400">{{ edu.description }}</p>
                  </div>
                </div>
              </UCard>
            </div>
          </div>
        </div>
      </div>
    </section>
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