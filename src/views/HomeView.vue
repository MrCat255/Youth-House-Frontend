<template>
  <main>
    <section class="definition">
      <div class="definition">
        <div class="text">
          <h2>Дом<br>молодёжи</h2>
          <div>
            <span class="quote">Творчество —<br>искусство осуществлять замыслы.</span>
            <br>
            <span class="name">Владимир Микушевич.</span>
          </div>
        </div>
        <img :src="require('@/assets/full_uploaded_by_url_QxeFTSPu.webp')" alt="img">
      </div>
    </section>
    <section class="halls">
      <div>
        <h2>ЗАЛЫ ДЛЯ ВАШИХ МЕРОПРИЯТИЙ </h2>
        <div>
          <p>На нашем сайте представлены основные залы.</p>
          <p>Каждый найдет себе зал по душе:</p>
        </div>
        <div class="halls">
          <div class="box-1">
            <div class="content">
              <h4>Большой зал</h4>
              <span>150 человек</span>
              <br>
              <button @click="ShowHall(0)">Заказать</button>
            </div>
          </div>
          <div class="box-2">
            <div class="content">
              <h4>Зал "Бочка"</h4>
              <span>50 человек</span>
              <br>
              <button @click="ShowHall(1)">Заказать</button>
            </div>
          </div>
          <div class="box-3">
            <div class="content">
              <h4>Большой танцевальный зал</h4>
              <span>25-35 человек</span>
              <br>
              <button @click="ShowHall(2)">Заказать</button>
            </div>
          </div>
          <div class="box-4">
            <div class="content">
              <h4>"Ситцевая"</h4>
              <span>20-25 человек</span>
              <br>
              <button @click="ShowHall(3)">Заказать</button>
            </div>
          </div>
          <div class="box-5">
            <div class="content">
              <h4>Малый танцевальный зал </h4>
              <span>15-20 человек</span>
              <br>
              <button @click="ShowHall(4)">Заказать</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="background" v-if="show_hall">
      <form @submit.prevent="Send">
        <h2>Забронировать</h2>
        <input type="text" placeholder="Введите Имя" v-model="name">
        <input type="tel" placeholder="Телефон" v-model="tel">
        <input type="email" placeholder="E-mail" v-model="email">
        <p class="date">Дата и время проведения</p>
        <input type="datetime-local" v-model="date">
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="cross" @click="Close">
          <rect x="20" y="25.6569" width="8" height="80" rx="4" transform="rotate(-45 20 25.6569)" fill="#5E5E5E"/>
          <rect x="19.8701" y="76.4386" width="80" height="8" rx="4" transform="rotate(-45 19.8701 76.4386)" fill="#5E5E5E"/>
        </svg>
        <button type="submit">Отправить</button>
      </form>
    </div>
    <div class="background" v-if="show_end">
      <div style="position: relative;">
        <h2>Форма успешно отправлена!</h2>
        <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" class="cross" @click="show_end = false">
          <rect x="20" y="25.6569" width="8" height="80" rx="4" transform="rotate(-45 20 25.6569)" fill="#5E5E5E"/>
          <rect x="19.8701" y="76.4386" width="80" height="8" rx="4" transform="rotate(-45 19.8701 76.4386)" fill="#5E5E5E"/>
        </svg>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";

export default {
  name: "HomeView",
  data() {
    return {
      show_hall: false,
      show_end: false,
      activity: undefined,

      name: '',
      tel: '',
      email: '',
      date: '',
    }
  },
  methods: {
    ShowHall(number) {
      this.show_hall = true;
      this.activity = number;
    },
    async Send() {
      const name = this.name;
      const tel = this.tel;
      const email = this.email;
      const date = new Date(this.date);
      const activity = this.activity;

      const data = {
        "name": name,
        "tel": tel,
        "email": email,
        "date": date,
        "activity": activity,
      };


      try {
        const response = await axios.post('http://localhost:8000/send/', data);
        console.log(response);
        this.Close();
        this.show_end = true;
        // eslint-disable-next-line no-empty
      } catch (e) {

      }

    },
    Close() {
      this.show_hall = false;
      this.activity = undefined;
      this.tel = '';
      this.email = '';
      this.name = '';
      this.date = '';
    }
  }
}
</script>

<style scoped>
section.definition {
  background-image: url("@/assets/full_tJzD4HrP.webp");
  background-size: cover;
  display: flex;
  justify-content: center;
}
div.definition {
  width: 1200px;
  display: grid;
  grid-template-columns: 60% 40%;
  grid-template-rows: 930px;
  align-items: center;
}
.definition .text {
  /*width: 60%;*/
  text-align: left;
  display: grid;
  row-gap: 116px;
  font-family: 'Montserrat', 'Helvetica', 'Arial', 'sans-serif';
}
.definition h2 {
  font-style: italic;
  /*font-weight: bold;*/
  /*color: #cd2ed8;*/
  font-size: 60px;
  line-height: 117%;
  /*font-style: bold;*/
  font-weight: 700;
  color: #971E9F;
}
.quote {
  /*font-weight: 300;*/
  /*line-height: 117%;*/
  white-space: pre-wrap;
  /*font-style: italic;*/
  /*font-size: 44px;*/

  font-weight: 400;
  font-style: italic;
  font-size: 38px;
  /*letter-spacing: 3%;*/
  line-height: 117%;
  color: #1f1f1f;
  letter-spacing: 0.03em;
}
.name {
  font-style: italic;
  /*font-size: 30px;*/
  line-height: 117%;
  font-weight: 200;
  color: #0A0A0A;
  font-size: 32px;
}
.definition img {
  height: 90%;
}
section.halls {
  display: flex;
  justify-content: center;
  text-align: left;
}
section.halls > div {
  width: 1200px;
  padding-top: 100px;
  padding-bottom: 60px;
  display: grid;
  row-gap: 60px;
}
section.halls h2 {
  font-weight: 300;
  font-size: 60px;
  line-height: 117%;
}
section.halls p {
  font-weight: 300;
  font-size: 22px;
  line-height: 150%;
}
div.halls {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 30px;
  grid-template-areas:
    "A A   A B   B B"
    "C C   D D   E E";
}
div.halls > div {
  aspect-ratio: 5 / 4;
  height: auto;
  background-size: cover;
  border-radius: 6px;
  position: relative;
}
.box-1 {
  grid-area: A;
  background-image: url("@/assets/big_halls.jpg");
}
.box-2 {
  grid-area: B;
  background-image: url("@/assets/barrels.jpg");
}
.box-3 {
  grid-area: C;
  background-image: url("@/assets/big_dance_halls.jpg");
}
.box-4 {
  grid-area: D;
  background-image: url("@/assets/Calico.jpg");
}
.box-5 {
  grid-area: E;
  background-image: url("@/assets/small_dance_halls.jpg");
}
.content {
  position: absolute;
  bottom: 0;
  margin-left: 24px;
  margin-bottom: 24px;
  margin-right: 24px;
  display: grid;
}
.content h4 {
  font-size: 30px;
  font-weight: 300;
  line-height: 117%;
  color: white;
}
.content span {
  color: white;
  margin-top: 6px;
}
.content button {
  color:#fff;
  background-color: #440092;
  max-width: 150px;
  display: block;
  border-radius: 6px;
  font-family: 'Noto Sans', 'Verdana', 'Geneva', 'sans-serif';
  font-size: 20px;
  line-height: 150%;
  border: 0;
  text-align: center;
  padding: 10px;
}
.background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000057;
  display: flex;
  justify-content: center;
  align-items: center;
}
.background > div {
  background-color: white;
  padding: 50px;
  border-radius: 25px;
  font-size: xx-large;
}
.background form {
  padding: 50px;
  background-color: white;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  position: relative;
}
.background form input {
  border-radius: 6px;
  font-size: 18px;
  line-height: 155%;
  font-weight: 300;
  border: 1px solid #e0e0e7;
  height: auto;
  padding: 12px 18px;
}
.background form button {
  color: #fff;
  background-color: #2c2c32;
  display: block;
  border-radius: 6px;
  font-family: 'Noto Sans', 'Verdana', 'Geneva', 'sans-serif';
  font-size: 20px;
  border: 0;
  text-align: center;
  padding: 10px;
}
.background form p.date {
  font-weight: 400;
  word-break: break-word;
}
.cross {
  position: absolute;
  top: 0;
  right: 0;
  width: 30px;
  height: auto;
  margin-top: 15px;
  margin-right: 15px;
  cursor: pointer;
}
</style>