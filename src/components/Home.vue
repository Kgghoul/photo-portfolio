<script>
export default {
  name: 'Home',
  methods: {
    goToPortfolio() {
      this.$router.push('/portfolio')
    }
  }
}
</script>

<template>
  <div class="all-background">
    <title>Личный блог фотографа</title>
    <h1>Фотограф Пидорасина из Бангкок</h1>
    <img src="../assets/banner.jpg" alt="баннер с фотографией" class="big_photo">
    <div class="section1">
      <h2>Обо мне</h2>
      <p class="text1">Привет! Я профессиональный фотограф из Баку, специализирующийся на портретной и свадебной фотографии. С помощью своего объектива я стараюсь запечатлеть самые искренние эмоции и важные моменты в жизни людей. Мой стиль - это сочетание классической эстетики с современными тенденциями в фотографии. Я работаю как в студии, так и на природе, создавая атмосферные и запоминающиеся снимки.</p>
      <h2>Галлерея моих последних работ</h2>
      <img src="../assets/gallery1.jpg" alt="галерея фотографий" class="gallery_photo">
      <img src="../assets/gallery2.jpg" alt="галерея фотографий" class="gallery_photo">
      <img src="../assets/gallery3.jpg" alt="галерея фотографий" class="gallery_photo">
      <button type="button" class="button1" @click="goToPortfolio">Посмотреть больше работ</button>
    </div>
  </div>
</template>

<style scoped>
.button1 {
    background-color: transparent;
    color: #C9A959;
    border: 2px solid #C9A959;
    padding: 12px 30px;
    font-size: 1.1rem;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin: 20px auto;
    display: block;
}

.button1:hover {
    background-color: #C9A959;
    color: #1A1A1A;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(201, 169, 89, 0.3);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
h1 {
    color: #FFFFFF;
    font-size: 3.5rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin: 2rem 0;
    position: relative;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

h1::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: #C9A959;
}


.big_photo {
    width: 90%;
    height: 60vh;
    object-fit: cover;
    margin: 0 auto;
    display: block;
    border: 2px solid var(--accent);
    border-radius: 4px;
}
.section1 {
  background-color: #2D2D2D;
  padding: 20px;  
  border-radius: 10px;
} 
.header-background {
  width: 100%;
  background-color: #241a91;
  padding: 20px;  
  border-radius: 10px;
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
.text1 {
    color: #E5E5E5;
    font-size: 1.8rem;
    line-height: 1.8;
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-weight: 400;
    letter-spacing: 0.5px;
}

.text1::first-letter {
    font-size: 2em;
    color: #C9A959;
    font-weight: bold;
}
:root {
  --dark-bg: #1A1A1A;      /* Глубокий чёрный - для фона */
  --dark-gray: #2D2D2D;    /* Тёмно-серый - для секций */
  --light-gray: #E5E5E5;   /* Светло-серый - для текста */
  --accent: #C9A959;       /* Золотой - для акцентов */
  --white: #FFFFFF;        /* Белый - для заголовков */
}
.all-background {
  background-color: #1A1A1A;
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
</style>
