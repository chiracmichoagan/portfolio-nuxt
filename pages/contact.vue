<template>
  <div>
    <section class="py-20 bg-gray-50 dark:bg-gray-900">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl font-bold mb-4 fade-in">Get In Touch</h1>
          <p class="text-xl text-gray-600 dark:text-gray-400 mb-8 fade-in delay-100">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </div>
      </div>
    </section>

    <section class="py-16">
      <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-12">
            <div class="fade-in delay-200">
              <h2 class="text-2xl font-bold mb-6">Contact Information</h2>
              <div class="space-y-4">
                <div class="flex items-center">
                  <UIcon name="i-heroicons-envelope" class="text-2xl text-primary-500 mr-4" />
                  <a href="mailto:your.email@example.com" class="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400">
                    your.email@example.com
                  </a>
                </div>
                <div class="flex items-center">
                  <UIcon name="i-heroicons-phone" class="text-2xl text-primary-500 mr-4" />
                  <a href="tel:+1234567890" class="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400">
                    +1 (234) 567-890
                  </a>
                </div>
                <div class="flex items-center">
                  <UIcon name="i-heroicons-map-pin" class="text-2xl text-primary-500 mr-4" />
                  <span class="text-gray-600 dark:text-gray-400">
                    City, Country
                  </span>
                </div>
              </div>

              <h2 class="text-2xl font-bold mt-12 mb-6">Connect With Me</h2>
              <div class="flex space-x-4">
                <UButton
                  color="gray"
                  variant="ghost"
                  icon="i-simple-icons-github"
                  to="https://github.com/yourusername"
                  target="_blank"
                />
                <UButton
                  color="gray"
                  variant="ghost"
                  icon="i-simple-icons-linkedin"
                  to="https://linkedin.com/in/yourusername"
                  target="_blank"
                />
                <UButton
                  color="gray"
                  variant="ghost"
                  icon="i-simple-icons-twitter"
                  to="https://twitter.com/yourusername"
                  target="_blank"
                />
                <UButton
                  color="gray"
                  variant="ghost"
                  icon="i-simple-icons-instagram"
                  to="https://instagram.com/yourusername"
                  target="_blank"
                />
              </div>
            </div>

            <div class="fade-in delay-300">
              <h2 class="text-2xl font-bold mb-6">Send Me a Message</h2>
              <form @submit.prevent="submitForm">
                <div class="space-y-4">
                  <UFormGroup label="Name" name="name">
                    <UInput v-model="form.name" placeholder="Your name" />
                  </UFormGroup>
                  
                  <UFormGroup label="Email" name="email">
                    <UInput v-model="form.email" placeholder="Your email" type="email" />
                  </UFormGroup>
                  
                  <UFormGroup label="Subject" name="subject">
                    <UInput v-model="form.subject" placeholder="Subject" />
                  </UFormGroup>
                  
                  <UFormGroup label="Message" name="message">
                    <UTextarea v-model="form.message" placeholder="Your message" rows="5" />
                  </UFormGroup>
                  
                  <div>
                    <UButton type="submit" color="primary" :loading="loading" :disabled="loading">
                      Send Message
                    </UButton>
                  </div>
                </div>
              </form>
              
              <UAlert
                v-if="formStatus.show"
                :type="formStatus.type"
                :title="formStatus.title"
                :description="formStatus.message"
                class="mt-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const loading = ref(false)
const formStatus = ref({
  show: false,
  type: 'success',
  title: '',
  message: ''
})

const submitForm = async () => {
  loading.value = true
  
  // Simulate form submission
  await new Promise(resolve => setTimeout(resolve, 1500))
  
  // Show success message (in a real app, you would send the form data to a server)
  formStatus.value = {
    show: true,
    type: 'success',
    title: 'Message Sent!',
    message: 'Thank you for your message. I will get back to you as soon as possible.'
  }
  
  // Reset form
  form.value = {
    name: '',
    email: '',
    subject: '',
    message: ''
  }
  
  loading.value = false
  
  // Hide the alert after 5 seconds
  setTimeout(() => {
    formStatus.value.show = false
  }, 5000)
}

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