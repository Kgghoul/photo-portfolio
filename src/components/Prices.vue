<template>
    <div class="all-background">
        <h1>Цены и услуги</h1>
        <div class="prices-container">
            <div class="price-item">
                <h2>Фотосессия "Семейная"</h2>
                <p class="price">5000 руб.</p>
                <p class="description">Семейная фотосессия в студии или на природе. 2 часа съемки, 50 обработанных фотографий, все фото на диске.</p>
            </div>

            <div class="price-item">
                <h2>Фотосессия "Love Story"</h2>
                <p class="price">4000 руб.</p>
                <p class="description">Романтическая фотосессия для влюбленных пар. 1.5 часа съемки, 30 обработанных фотографий, все фото на диске.</p>
            </div>

            <div class="price-item">
                <h2>Детская фотосессия</h2>
                <p class="price">3500 руб.</p>
                <p class="description">Фотосессия для детей от 1 до 12 лет. 1 час съемки, 25 обработанных фотографий, все фото на диске.</p>
            </div>

            <div class="price-item">
                <h2>Индивидуальная фотосессия</h2>
                <p class="price">3000 руб.</p>
                <p class="description">Персональная фотосессия в студии или на природе. 1 час съемки, 20 обработанных фотографий, все фото на диске.</p>
            </div>

            <div class="price-item">
                <h2>Ретушь фотографий</h2>
                <p class="price">200 руб./фото</p>
                <p class="description">Профессиональная ретушь фотографий. Улучшение цвета, удаление дефектов, художественная обработка.</p>
            </div>
            <div class="price-item">
                <h2>Свадебная фотосессия</h2>
                <p class="price">10000 руб.</p>
                <p class="description">Свадебная фотосессия в студии или на природе. 3 часа съемки, 100 обработанных фотографий, все фото на диске.</p>
            </div>
            <div class="contact-section">
    <div class="contact-info">
      <h2>Свяжитесь с нами</h2>
      <p class="text1">Выберите удобный способ связи или оставьте заявку</p>
      <div class="contact-methods">
        <div class="contact-method">
          <i class="phone-icon">📞</i>
          <span>+7 (XXX) XXX-XX-XX</span>
        </div>
        <div class="contact-method">
          <i class="email-icon">✉️</i>
          <span>photo@example.com</span>
        </div>
      </div>
    </div>
    
    <form class="contact-form-modern">
      <div class="form-row">
        <div class="input-group">
          <label>Имя</label>
          <input type="text" required>
        </div>
        <div class="input-group">
          <label>Телефон</label>
          <input type="tel" required>
        </div>
      </div>
      <div class="input-group">
        <label>Услуга</label>
        <select required>
          <option value="">Выберите услугу</option>
          <option value="wedding">Свадебная фотосессия</option>
          <option value="family">Семейная фотосессия</option>
          <option value="love">Love Story</option>
          <option value="children">Детская фотосессия</option>
          <option value="individual">Индивидуальная фотосессия</option>
          <option value="retouch">Ретушь фотографий</option>
        </select>
      </div>
      <div class="input-group">
        <label>Сообщение</label>
        <textarea rows="4"></textarea>
      </div>
      <button type="submit">Отправить</button>
    </form>
  </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Prices'
}
</script>

<style scoped>
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
.contact-section {
  max-width: 1000px;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 3rem;
  padding: 2rem;
}

.contact-info {
  background: var(--dark-gray);
  padding: 2rem;
  border-radius: 12px;
  align-self: start;
}

.contact-methods {
  margin-top: 2rem;
}

.contact-method {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 1rem 0;
  color: var(--light-gray);
}

.contact-form-modern {
  background: var(--dark-gray);
  padding: 2rem;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.input-group label {
  color: var(--light-gray);
  font-size: 0.9rem;
}

.input-group input,
.input-group select,
.input-group textarea {
  padding: 0.8rem;
  background: var(--dark-bg);
  border: 1px solid transparent;
  border-radius: 6px;
  color: var(--white);
  transition: all 0.3s ease;
}

.input-group input:focus,
.input-group select:focus,
.input-group textarea:focus {
  border-color: var(--accent);
  outline: none;
  box-shadow: 0 0 0 2px rgba(201, 169, 89, 0.2);
}

button[type="submit"] {
  background: var(--accent);
  color: var(--dark-bg);
  border: none;
  padding: 1rem;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

button[type="submit"]:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(201, 169, 89, 0.3);
}

@media (max-width: 768px) {
  .contact-section {
    grid-template-columns: 1fr;
  }
  
  .form-row {
    grid-template-columns: 1fr;
  }
}
.all-background {
    background-color: var(--dark-bg);
    padding: 2rem;
    min-height: 100vh;
}

h1 {
    color: var(--white);
    font-size: 3.5rem;
    font-weight: 800;
    text-align: center;
    margin-bottom: 3rem;
    position: relative;
}

h1::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: var(--accent);
}

h2 {
    color: var(--white);
    font-size: 1.8rem;
    margin-bottom: 1rem;
    position: relative;
    padding-left: 1.5rem;
}

h2::before {
    content: "•";
    color: var(--accent);
    position: absolute;
    left: 0;
}

.prices-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
    max-width: 1200px;
    margin: 0 auto;
}

.price-item {
    background: var(--dark-gray);
    border-radius: 12px;
    padding: 2rem;
    transition: transform 0.3s ease;
    border: 1px solid transparent;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.price-item:hover {
    transform: translateY(-5px);
    border-color: var(--accent);
}

.price {
    color: var(--accent);
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0;
}

.description {
    color: var(--light-gray);
    font-size: 1.1rem;
    line-height: 1.6;
}
</style>