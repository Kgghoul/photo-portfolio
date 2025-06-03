<template>
    <div class="portfolio">
        <div class="all-background">
        <h1>Портфолио</h1>
        <div class="section1">
            <div class="filter-buttons">
                <button 
                    v-for="category in categories" 
                    :key="category.id"
                    @click="setCategory(category.id)"
                    :class="['filter-button', { active: selectedCategory === category.id }]"
                >
                    {{ category.name }}
                </button>
            </div>
            <h2>Галлерея всех работ</h2>
            <div class="gallery">
                <div class="gallery-item">
                    <img 
                        v-for="photo in filteredPhotos"
                        :key="photo.id"
                        :src="photo.src"
                        :alt="photo.alt"
                        class="gallery_photo"
                        @click="openModal(photo)"
                    >
                </div>
            </div>
        </div>
        </div>

        <!-- Модальное окно -->
        <transition name="modal">
            <div v-if="isModalOpen" class="modal-overlay" @click="closeModal">
                <div class="modal-content" @click.stop>
                    <img :src="selectedPhoto?.src" :alt="selectedPhoto?.alt" class="modal-image">
                    <button class="modal-close" @click="closeModal">&times;</button>
                    <button class="modal-nav modal-prev" @click.stop="prevPhoto">&lt;</button>
                    <button class="modal-nav modal-next" @click.stop="nextPhoto">&gt;</button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import gallery1 from '../assets/gallery1.jpg'
import gallery2 from '../assets/gallery2.jpg'
import gallery3 from '../assets/gallery3.jpg'
import gallery4 from '../assets/gallery4.jpg'
import gallery5 from '../assets/gallery5.jpg'
import gallery6 from '../assets/gallery6.jpg'
import gallery7 from '../assets/gallery7.jpg'
import gallery8 from '../assets/gallery8.jpg'
import gallery9 from '../assets/gallery9.jpg'

export default {
    name: 'Portfolio',
    data() {
        return {
            categories: [
                { id: 'all', name: 'Все фото' },
                { id: 'wedding', name: 'Свадьба' },
                { id: 'kiss', name: 'Поцелуй' },
                { id: 'pool', name: 'В бассейне' },
                { id: 'sea', name: 'На море' }
            ],
            selectedCategory: 'all',
            isModalOpen: false,
            selectedPhoto: null,
            photos: [
                { id: 1, src: gallery1, alt: 'Фотография 1', category: 'wedding' },
                { id: 2, src: gallery2, alt: 'Фотография 2', category: 'wedding' },
                { id: 3, src: gallery3, alt: 'Фотография 3', category: 'wedding' },
                { id: 4, src: gallery4, alt: 'Фотография 4', category: 'wedding' },
                { id: 5, src: gallery5, alt: 'Фотография 5', category: 'wedding' },
                { id: 6, src: gallery6, alt: 'Фотография 6', category: 'wedding' },
                { id: 7, src: gallery7, alt: 'Фотография 7', category: 'kiss' },
                { id: 8, src: gallery8, alt: 'Фотография 8', category: 'sea' },
                { id: 9, src: gallery9, alt: 'Фотография 9', category: 'pool' }
            ]
        }
    },
    computed: {
        filteredPhotos() {
            if (this.selectedCategory === 'all') {
                return this.photos
            }
            return this.photos.filter(photo => photo.category === this.selectedCategory)
        }
    },
    methods: {
        setCategory(category) {
            this.selectedCategory = category
        },
        openModal(photo) {
            this.selectedPhoto = photo
            this.isModalOpen = true
            document.body.style.overflow = 'hidden' // Блокируем прокрутку
        },
        closeModal() {
            this.isModalOpen = false
            this.selectedPhoto = null
            document.body.style.overflow = '' // Возвращаем прокрутку
        },
        nextPhoto() {
            const currentIndex = this.filteredPhotos.indexOf(this.selectedPhoto)
            const nextIndex = (currentIndex + 1) % this.filteredPhotos.length
            this.selectedPhoto = this.filteredPhotos[nextIndex]
        },
        prevPhoto() {
            const currentIndex = this.filteredPhotos.indexOf(this.selectedPhoto)
            const prevIndex = currentIndex === 0 ? this.filteredPhotos.length - 1 : currentIndex - 1
            this.selectedPhoto = this.filteredPhotos[prevIndex]
        },
        handleKeydown(e) {
            if (!this.isModalOpen) return
            
            switch(e.key) {
                case 'Escape':
                    this.closeModal()
                    break
                case 'ArrowRight':
                    this.nextPhoto()
                    break
                case 'ArrowLeft':
                    this.prevPhoto()
                    break
            }
        }
    },
    mounted() {
        // Добавляем обработчик клавиш
        window.addEventListener('keydown', this.handleKeydown)
    },
    beforeUnmount() {
        // Удаляем обработчик при уничтожении компонента
        window.removeEventListener('keydown', this.handleKeydown)
        document.body.style.overflow = '' // На всякий случай возвращаем прокрутку
    }
}
</script>

<style scoped>
h1 {
    color: var(--white);
    font-size: 3.5rem;
    font-weight: 800;
    margin: 2rem 0;
}

h1::first-letter {
    color: var(--accent);
    font-size: 4.5rem;
    font-weight: 900;
    margin-right: 5px;
}
h2 {
    color: #FFFFFF;
    font-size: 2.2rem;
    font-weight: 600;
    margin: 2.1rem 0;
    position: relative;
    padding-bottom: 15px;
    font-family: 'Playfair Display', serif;
}

h2::before {
    content: "•";
    color: #C9A959;
    margin-right: 10px;
}
.section1 {
  background-color: #2D2D2D;
  padding: 20px;  
  border-radius: 10px;
} 
.gallery_photo {
    width: 580px;
    height: 300px;
    object-fit: cover;
    margin: 10px;
    border-radius: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.gallery_photo:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.filter-buttons {
    display: flex;
    gap: 15px;
    margin-bottom: 30px;
    justify-content: center;
    flex-wrap: wrap;
}

.filter-button {
    background-color: transparent;
    color: var(--white);
    border: 2px solid var(--accent);
    padding: 10px 20px;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.filter-button:hover {
    background-color: var(--accent);
    color: var(--dark-bg);
    transform: translateY(-2px);
}

.filter-button.active {
    background-color: var(--accent);
    color: var(--dark-bg);
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.gallery-item {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    position: relative;
    max-width: 90%;
    max-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.modal-image {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 4px;
}

.modal-close {
    position: absolute;
    top: -40px;
    right: -40px;
    background: none;
    border: none;
    color: var(--white);
    font-size: 40px;
    cursor: pointer;
    padding: 10px;
    transition: transform 0.3s ease;
}

.modal-close:hover {
    transform: scale(1.1);
}

.modal-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    border: none;
    color: var(--white);
    font-size: 24px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
}

.modal-nav:hover {
    background: var(--accent);
}

.modal-prev {
    left: -60px;
}

.modal-next {
    right: -60px;
}

/* Анимации для модального окна */
.modal-enter-active,
.modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
}

.modal-enter-to,
.modal-leave-from {
    opacity: 1;
}
</style>