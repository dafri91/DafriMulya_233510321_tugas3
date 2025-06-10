<script setup>
import { Icon } from '@iconify/vue'

const stats = [
  { label: 'Students Enrolled', value: '50,000+' },
  { label: 'Courses Available', value: '500+' },
  { label: 'Expert Instructors', value: '200+' },
  { label: 'Countries Reached', value: '100+' }
]

const team = [
  {
    name: 'Alex Thompson',
    role: 'CEO & Co-Founder',
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Former Google engineer with 15+ years in tech education.'
  },
  {
    name: 'Sarah Kim',
    role: 'Head of Education',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Ph.D. in Computer Science, passionate about accessible learning.'
  },
  {
    name: 'Michael Chen',
    role: 'Lead Developer',
    image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300',
    bio: 'Full-stack developer building the future of online education.'
  }
]
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900">


    <!-- Mission Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-6">
              We believe that education should be accessible, affordable, and engaging for everyone. 
              Our platform connects learners with industry experts to provide practical, hands-on learning experiences.
            </p>
            <p class="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Whether you're looking to advance your career, switch fields, or learn something new, 
              we have the courses and community to support your journey.
            </p>
            <div class="grid grid-cols-2 gap-6">
              <div>
                <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">95%</div>
                <div class="text-gray-600 dark:text-gray-300">Completion Rate</div>
              </div>
              <div>
                <div class="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">4.8/5</div>
                <div class="text-gray-600 dark:text-gray-300">Average Rating</div>
              </div>
            </div>
          </div>
          <div class="mt-12 lg:mt-0">
            <img
              src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Students learning online"
              class="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-gray-50 dark:bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Our Impact
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Numbers that showcase our commitment to education excellence
          </p>
        </div>
        
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            v-for="stat in stats"
            :key="stat.label"
            class="text-center bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg"
          >
            <div class="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {{ stat.value }}
            </div>
            <div class="text-gray-600 dark:text-gray-300 font-medium">
              {{ stat.label }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Meet Our Team
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            The passionate people behind OnlineCourse
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="member in team"
            :key="member.name"
            class="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <img
              :src="member.image"
              :alt="member.name"
              class="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
            />
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {{ member.name }}
            </h3>
            <div class="text-primary-600 dark:text-primary-400 font-medium mb-3">
              {{ member.role }}
            </div>
            <p class="text-gray-600 dark:text-gray-300">
              {{ member.bio }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
  <section class="py-20 bg-gradient-to-r from-primary-600 to-secondary-500">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
      <h2 class="text-3xl md:text-4xl font-bold mb-12">
        Our Core Values
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="p-6">
          <Icon icon="mdi:bullseye-arrow" class="text-5xl mb-4 mx-auto" />
          <h3 class="text-xl font-semibold mb-3">Excellence</h3>
          <p class="opacity-90">
            We strive for excellence in everything we do, from course content to student support.
          </p>
        </div>

        <div class="p-6">
          <Icon icon="mdi:handshake" class="text-5xl mb-4 mx-auto" />
          <h3 class="text-xl font-semibold mb-3">Community</h3>
          <p class="opacity-90">
            We believe in the power of community and collaborative learning experiences.
          </p>
        </div>

        <div class="p-6">
          <Icon icon="mdi:rocket-launch" class="text-5xl mb-4 mx-auto" />
          <h3 class="text-xl font-semibold mb-3">Innovation</h3>
          <p class="opacity-90">
            We continuously innovate to provide cutting-edge learning technologies and methods.
          </p>
        </div>
      </div>
    </div>
  </section>
  </div>
</template>