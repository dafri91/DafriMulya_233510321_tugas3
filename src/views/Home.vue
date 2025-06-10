<script setup>
import { ref } from 'vue'
import Hero from '../components/Hero.vue'
import CourseCard from '../components/CourseCard.vue'
import WhyChooseUs from '../components/WhyChooseUs.vue'
import Testimonial from '../components/Testimonial.vue'
import CTAForm from '../components/CTAForm.vue'

// Mock data for popular courses
const popularCourses = ref([
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    category: 'Web Development',
    level: 'Beginner',
    duration: '12 weeks',
    students: '15,420',
    price: 99,
    originalPrice: 199,
    rating: 4.8,
    reviews: 2341,
    image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Master HTML, CSS, JavaScript, React, Node.js and become a full-stack developer.'
  },
  {
    id: 2,
    title: 'Flutter Mobile App Development',
    category: 'Mobile Development',
    level: 'Intermediate',
    duration: '8 weeks',
    students: '8,930',
    price: 79,
    originalPrice: 149,
    rating: 4.9,
    reviews: 1205,
    image: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Build beautiful cross-platform mobile apps with Flutter and Dart.'
  },
  {
    id: 3,
    title: 'Data Science & Machine Learning',
    category: 'Data Science',
    level: 'Advanced',
    duration: '16 weeks',
    students: '12,180',
    price: 149,
    originalPrice: 299,
    rating: 4.7,
    reviews: 892,
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Learn Python, pandas, scikit-learn, and build real-world ML projects.'
  },
  {
    id: 4,
    title: 'Python Programming for Beginners',
    category: 'Programming',
    level: 'Beginner',
    duration: '6 weeks',
    students: '22,450',
    price: 0,
    originalPrice: 79,
    rating: 4.6,
    reviews: 3421,
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Start your programming journey with Python - the most beginner-friendly language.'
  },
  {
    id: 5,
    title: 'UI/UX Design with Figma',
    category: 'Design',
    level: 'Intermediate',
    duration: '10 weeks',
    students: '9,876',
    price: 89,
    originalPrice: 179,
    rating: 4.8,
    reviews: 1534,
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Master UI/UX design principles and create stunning designs in Figma.'
  },
  {
    id: 6,
    title: 'Digital Marketing Mastery 2025',
    category: 'Marketing',
    level: 'Beginner',
    duration: '8 weeks',
    students: '18,750',
    price: 69,
    originalPrice: 139,
    rating: 4.5,
    reviews: 2105,
    image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Learn SEO, social media marketing, PPC, and grow your online presence.'
  }
])

// Mock testimonials data
const testimonials = ref([
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Full Stack Developer',
    company: 'TechCorp Inc.',
    content: 'OnlineCourse completely transformed my career. The web development bootcamp was comprehensive and the instructors were amazing. I landed my dream job within 3 months of completing the course!',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 2,
    name: 'Marcus Johnson',
    role: 'Data Scientist',
    company: 'DataFlow Solutions',
    content: 'The machine learning course exceeded my expectations. The hands-on projects and real-world applications helped me transition from finance to data science seamlessly.',
    avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Mobile App Developer',
    company: 'StartupXYZ',
    content: 'The Flutter course was exactly what I needed. The instructor explained complex concepts in a simple way, and now I can build mobile apps for both iOS and Android!',
    avatar: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=150'
  }
])

// Event handlers
const handleHeroCTA = (action) => {
  alert( `You have clicked the button: ${action}`)
  // Handle navigation or action
}

const handleCourseClick = (course) => {
  console.log('Course clicked:', course.title)
  // Handle course navigation
}

const handleFormSubmit = (formData) => {
  console.log('Form submitted:', formData)
  // Handle form submission
}
</script>

<template>
  <div>
    <!-- Hero Section -->
    <Hero @cta-click="handleHeroCTA" @secondary-cta-click="handleHeroCTA" />

    <!-- Popular Courses Section -->
    <section class="py-20 bg-white dark:bg-gray-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Popular Courses
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Join thousands of students in our most popular courses designed by industry experts.
          </p>
        </div>

        <!-- Courses Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CourseCard
            v-for="course in popularCourses"
            :key="course.id"
            :course="course"
            @course-click="handleCourseClick"
          >
            <template #cta-text>Start Learning</template>
          </CourseCard>
        </div>

        <!-- View All Courses Button -->
        <div class="text-center mt-12">
          <router-link
            to="/courses"
            class="btn-outline text-lg px-8 py-4 inline-flex items-center"
          >
            View All Courses
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <WhyChooseUs />

    <!-- Testimonials Section -->
    <Testimonial :testimonials="testimonials" />

    <!-- CTA Form Section -->
    <CTAForm @form-submit="handleFormSubmit">
      <template #disclaimer>
        Join our community of learners. No spam, unsubscribe anytime.
      </template>
    </CTAForm>
  </div>
</template>