<script setup>
import { ref } from 'vue'
import CourseCard from '../components/CourseCard.vue'

// Extended mock data for all courses
const allCourses = ref([
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
  },
  {
    id: 7,
    title: 'DevOps & Cloud Computing with AWS',
    category: 'DevOps',
    level: 'Advanced',
    duration: '14 weeks',
    students: '7,654',
    price: 129,
    originalPrice: 249,
    rating: 4.7,
    reviews: 876,
    image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Master Docker, Kubernetes, AWS services, and modern DevOps practices.'
  },
  {
    id: 8,
    title: 'JavaScript for Beginners',
    category: 'Programming',
    level: 'Beginner',
    duration: '8 weeks',
    students: '19,320',
    price: 59,
    originalPrice: 119,
    rating: 4.6,
    reviews: 2876,
    image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Learn JavaScript fundamentals and build interactive web applications.'
  },
  {
    id: 9,
    title: 'Public Speaking & Presentation Skills',
    category: 'Communication',
    level: 'Beginner',
    duration: '4 weeks',
    students: '5,432',
    price: 39,
    originalPrice: 79,
    rating: 4.4,
    reviews: 654,
    image: 'https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Overcome stage fright and become a confident public speaker.'
  }
])

const filteredCourses = ref(allCourses.value)
const selectedCategory = ref('All')
const selectedLevel = ref('All')

const categories = ['All', 'Web Development', 'Mobile Development', 'Data Science', 'Programming', 'Design', 'Marketing', 'DevOps', 'Communication']
const levels = ['All', 'Beginner', 'Intermediate', 'Advanced']

const filterCourses = () => {
  filteredCourses.value = allCourses.value.filter(course => {
    const categoryMatch = selectedCategory.value === 'All' || course.category === selectedCategory.value
    const levelMatch = selectedLevel.value === 'All' || course.level === selectedLevel.value
    return categoryMatch && levelMatch
  })
}

const handleCourseClick = (course) => {
  console.log('Course clicked:', course.title)
}
</script>

<template>
  <div class="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          All Courses
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Explore our comprehensive collection of courses designed to help you master new skills and advance your career.
        </p>
      </div>

      <!-- Filters -->
      <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-12">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Category Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Category
            </label>
            <select
              v-model="selectedCategory"
              @change="filterCourses"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option v-for="category in categories" :key="category" :value="category">
                {{ category }}
              </option>
            </select>
          </div>

          <!-- Level Filter -->
          <div>
            <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Level
            </label>
            <select
              v-model="selectedLevel"
              @change="filterCourses"
              class="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            >
              <option v-for="level in levels" :key="level" :value="level">
                {{ level }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <!-- Courses Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <CourseCard
          v-for="course in filteredCourses"
          :key="course.id"
          :course="course"
          @course-click="handleCourseClick"
        />
      </div>

      <!-- No Results -->
      <div v-if="filteredCourses.length === 0" class="text-center py-16">
        <div class="text-6xl mb-4">📚</div>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          No courses found
        </h3>
        <p class="text-gray-600 dark:text-gray-300">
          Try adjusting your filters to find the perfect course for you.
        </p>
      </div>
    </div>
  </div>
</template>