<template>
  <footer class="footer">
    <div class="contacts">
      <div class="contacts__container container">
        <div class="contacts__title">
          Контакты
        </div>
        <ul class="contacts__row">
          <li class="contacts__number">+7-902-037-38-94</li>
          <li class = "contacts__address">г. Калининград, ул. Октябрьская 76</li>
          <li class="contacts__time-work">Время работы: ежедневно 9:00–21:00</li>
        </ul>
        <hr>
        <div class="footer__icons">
          <div class="footer__icons__body vk">
          </div>
          <div class="footer__icons__body facebook">
          </div>
          <div class="footer__icons__body twiter">
          </div>
          <div class="footer__icons__body instagram">
          </div>
          <div class="footer__icons__body youtube">
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style scoped>
.footer {
  height: 100%;
  background-color: rgb(9 0 25);
  padding: 75px 0 0 0;
  text-align: left;
  display: flex;
  justify-content: center;
}
.contacts {
  width: 1200px;
}
.contacts__title{
  color:#9e9eb4;
  font-family: 'Montserrat', 'Helvetica', 'Arial', 'sans-serif';
  font-weight: 300;
  font-size: 40px;
  line-height: 117%;
  margin: 0 0 50px 0;
}
.contacts__row{
  margin: 0 0 100px 0;
}
.contacts__row li{
  color: #f9f9fb;
  font-family: 'Noto Sans', 'Verdana', 'Geneva', 'sans-serif';
  font-weight: 400;
  font-size: 22px;
  line-height: 150%;
  padding: 0 0 0 60px;
}
.contacts__row li:not(:last-child){
  margin: 0 0 25px 0;
}
.contacts__row li::before{
  content:"";
  width: 40px;
  height: 40px;
  position: absolute;
  margin: 0 0 0 -60px;
  border-radius: 6px;
}

.contacts__number::before{
  background: url(@/assets/05.svg) -1.5px no-repeat;
  background-size: 120%;
}
.contacts__address::before{
  background: url(@/assets/06.svg) -1.5px no-repeat;
  background-size: 120%;
}
.contacts__time-work::before{
  background: url(@/assets/07.svg) -1px no-repeat;
  background-size: 110%;
}

hr{
  border: 2px solid #440092;
  border-bottom-width: 0;
  margin: 0 0 50px 0;
}

.footer__icons {
  display: flex;
  flex-direction: row;
  column-gap: 20px;
  margin: 0 0 100px 0;
}
.footer__icons__body {
  width: 40px ;
  height: 40px;
  border: 1px solid white;
  border-radius: 8px;
}

.vk{
  background: url(@/assets/vk.webp) 0 1px no-repeat;
  background-size: 100%;
}

.facebook{
  background: url(@/assets/facebook.webp) 7px 7px no-repeat;
  background-size: 60%;
}
.twiter{
  background: url(@/assets/image_3.svg) 8.5px 9px no-repeat;
  background-size: 60%;
}

.instagram{
  background: url(@/assets/instagram.png) 7.5px 6.5px no-repeat;
  background-size: 60%;
}

.youtube{
  background: url(@/assets/youtube.png) 8px 6.5px no-repeat;
  background-size: 60%;
}
</style>