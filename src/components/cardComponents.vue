<template>
  <q-page>
    <div class="page">
      <section class="card" :class="{ flip: isFlipped }">
        <div id="highlight" :class="highlightClass" />

        <section class="card__front">
          <div class="card__header">
            <div>CreditCard</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="40"
              width="60"
              viewBox="-96 -98.908 832 593.448"
            >
              <path fill="#ff5f00" d="M224.833 42.298h190.416v311.005H224.833z" />
              <path
                fill="#eb001b"
                d="M244.446 197.828a197.448 197.448 0 0175.54-155.475 197.777 197.777 0 100 311.004 197.448 197.448 0 01-75.54-155.53z"
              />
              <path
                fill="#f79e1b"
                d="M640 197.828a197.777 197.777 0 01-320.015 155.474 197.777 197.777 0 000-311.004A197.777 197.777 0 01640 197.773z"
              />
            </svg>
          </div>

          <div class="card__number">
            <span v-for="(n, i) in cardDigits" :key="i" :class="{ filed: n !== '#' }">
              {{ n }}<br />
            </span>
          </div>

          <div class="card__footer">
            <div class="card__holder">
              <div class="card__section__title">Card Holder</div>
              <div>{{ holder || 'Name on card' }}</div>
            </div>

            <div class="card__expires">
              <div class="card__section__title">Expires</div>
              {{ month || 'MM' }}/{{ year || 'YY' }}
            </div>
          </div>
        </section>

        <section class="card__back">
          <div class="card__hide_line"></div>
          <div class="card_cvv">
            <span>CVV</span>
            <div class="card_cvv_field">
              {{ '*'.repeat(cvv.length) }}
            </div>
          </div>
        </section>
      </section>

      <q-card class="form">
        <q-input v-model="number" label="Card Number" maxlength="16" @focus="focus('number')" />

        <q-input v-model="holder" label="Card Holder" @focus="focus('holder')" />

        <div class="filed__group">
          <div>
            <label class="q-mb-sm">Expiration Date</label>
            <div class="filed__date">
              <q-select v-model="month" :options="months" label="Month" @focus="focus('expire')" />
              <q-select v-model="year" :options="years" label="Year" @focus="focus('expire')" />
            </div>
          </div>

          <q-input
            v-model="cvv"
            label="CVV"
            maxlength="4"
            @focus="focus('cvv')"
            @blur="resetFocus"
          />
        </div>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const number = ref('');
const holder = ref('');
const month = ref('');
const year = ref('');
const cvv = ref('');

const isFlipped = ref(false);
const highlight = ref<'number' | 'holder' | 'expire' | 'cvv' | 'hidden'>('hidden');

const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
const years = Array.from({ length: 10 }, (_, i) => `${2023 + i}`);

const focus = (type: typeof highlight.value) => {
  highlight.value = type;
  isFlipped.value = type === 'cvv';
};

const resetFocus = () => {
  isFlipped.value = false;
  highlight.value = 'hidden';
};

const highlightClass = computed(() => {
  if (highlight.value === 'hidden') return 'hidden';
  return `highlight__${highlight.value}`;
});

const cardDigits = computed(() => {
  const digits = number.value.split('');
  const masked = digits.map((d, i) => (i > 3 && i < 12 ? '*' : d));
  return [...masked, ...Array(16 - masked.length).fill('#')];
});
</script>

<style>
:root {
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: #000;
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -webkit-text-size-adjust: 100%;
}

* {
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  width: 100vw;
  height: 100vh;
  background: #fbfcff;
  padding: 24px;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

#highlight {
  position: absolute;
  border: 1px solid #fff;
  border-radius: 12px;
  z-index: 1;
  width: 0;
  height: 0;
  top: 0;
  left: 0;
  box-shadow: 0 0 5px #fff;
  transition: 0.3s;
}

#highlight.highlight__number {
  width: 346px;
  height: 40px;
  top: 92px;
  left: 18px;
}

#highlight.highlight__holder {
  width: 264px;
  height: 56px;
  top: 156px;
  left: 18px;
}

#highlight.highlight__expire {
  width: 86px;
  height: 56px;
  top: 156px;
  left: 323px;
}

#highlight.highlight__cvv {
  width: 381px;
  height: 91px;
  top: 83px;
  left: 18px;
}

#highlight.hidden {
  display: none;
}

.card {
  position: relative;
  max-width: 420px;
  margin: 0 auto;
  transform-style: preserve-3d;
  transition: 1s;
}

.card:hover,
.card.flip {
  transform: rotateY(180deg);
}

.card:hover #highlight {
  display: none;
}

.card__front,
.card__back {
  width: 100%;
  max-width: 420px;
  height: 233px;
  border-radius: 20px;
  padding: 24px 30px 30px;
  background: linear-gradient(to right bottom, #323941, #061018);
  box-shadow: 0 33px 50px -15px rgba(50, 55, 63, 0.66);
  color: #fff;
  overflow: hidden;
  margin: 0 auto;
  backface-visibility: hidden;
}

@media (max-width: 450px) {
  .card__front,
  .card__back {
    padding: 8px 12px 16px;
    height: 206px;
  }
}

.card__back {
  position: absolute;
  top: 0;
  left: 0;
  transform: rotateY(180deg);
  padding: 24px 0 0;
}

.card__front {
  position: relative;
}

.card__front:before,
.card__back:before {
  content: '';
  position: absolute;
  border: 16px solid #ff6be7;
  border-radius: 100%;
  left: -17%;
  top: -45px;
  height: 300px;
  width: 300px;
  filter: blur(13px);
}

.card__front:after,
.card__back:after {
  content: '';
  position: absolute;
  border: 16px solid #7288ff;
  border-radius: 100%;
  width: 300px;
  top: 55%;
  left: -200px;
  height: 300px;
  filter: blur(13px);
}

.card__hide_line {
  height: 40px;
  width: 100%;
  background-color: #6b7280;
  position: relative;
  z-index: 1;
}

.card_cvv {
  position: relative;
  z-index: 1;
  margin-top: 24px;
  padding: 0 32px;
  display: flex;
  flex-direction: column;
  align-items: end;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}

.card_cvv_field {
  margin-top: 6px;
  background-color: #fff;
  border-radius: 12px;
  height: 44px;
  width: 100%;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 12px;
  font-size: 25px;
  line-height: 21px;
}

.card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 600;
  margin-bottom: 32px;
  position: relative;
  z-index: 1;
}

.card__number {
  /* word-spacing: 10px; */
  font-size: 22px;
  margin-bottom: 32px;
  position: relative;
  z-index: 1;
  display: flex;
  height: 33px;
  overflow: hidden;
}

.card__number span {
  display: flex;
  flex-direction: column;
  transition: 0.2s;
}

.card__number span.filed {
  transform: translateY(-33px);
}

.card__number span:nth-child(4n) {
  margin-right: 10px;
}

.card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 1;
}

.card__holder {
  text-transform: uppercase;
}

.card__section__title {
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
}

.form {
  border-radius: 12px;
  background: #fff;
  max-width: 600px;
  margin: -130px auto 0;
  padding: 180px 32px 32px;
  border: 1px solid #f1f1f1;
  box-shadow: 0 0 40px rgba(50, 55, 63, 0.16);
  display: grid;
  gap: 12px;
}

label {
  display: block;
  margin: 14px 0 4px;
  color: #0d0c22;
  font-weight: 500;
}

input,
select {
  height: 52px;
  display: block;
  width: 100%;
  border: 1px solid #6b7280;
  padding: 18px 20px;
  transition:
    outline 200ms ease,
    box-shadow 200ms ease;
  border-radius: 12px;
  outline: none;
  background-color: #fff;
  color: #0d0c22;
  font-size: 16px;
}

input:focus,
select:focus {
  border: 1px solid #000;
  outline: 4px solid rgba(0, 0, 0, 0.1);
}

select {
  padding: 0 20px;
}

.filed__group {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
}

.filed__date {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}
</style>
