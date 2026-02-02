<template>
  <div class="quote-box">
    <transition name="fade" mode="out-in">
      <i :key="quote">"{{ quote }}"</i>
    </transition>

    <p>- Kanye West</p>

    <button @click="loadQuote">New quote</button>
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from 'vue';
import KanyeAPI from 'src/services/KanyeAPI.js';

const quote = ref('');

// ========== GET REQUESTS WITH AXIOS ==========

// WITH ASYNC

// axios method
// const loadQuote = async () => {
//   const reponse = await axios.get('https://api.kanye.rest/');
//   quote.value = reponse.data.quote;
// };

// built-in reusable method
const loadQuote = async () => {
  const reponse = await KanyeAPI.getQoute();
  quote.value = reponse.data.quote;
};

loadQuote();

// WITHOUT ASYNC

// axios.get('https://api.kanye.rest/').then((reponse) => {
//   quote.value = reponse.data.quote;
// });

// ========== POST REQUESTS WITH AXIOS ==========
</script>

<style>
/* Quote container */
.quote-box {
  max-width: 600px;
  margin: 40px auto;
  padding: 20px 30px;
  text-align: center;
  font-family: Georgia, serif;
  background: #f9f9f9;
  border-left: 4px solid #333;
  border-radius: 4px;
}

/* Quote text */
.quote-box i {
  font-size: 1.4rem;
  color: #222;
  display: block;
  margin-bottom: 12px;
  line-height: 1.4;
}

/* Author */
.quote-box p {
  margin: 0;
  font-size: 0.9rem;
  color: #666;
  text-align: right;
}

/* Button */
.quote-box button {
  margin-top: 20px;
  padding: 8px 16px;
  font-size: 0.9rem;
  cursor: pointer;
  border: none;
  background: #333;
  color: #fff;
  border-radius: 4px;
  transition:
    background 0.2s ease,
    transform 0.1s ease;
}

.quote-box button:hover {
  background: #555;
}

.quote-box button:active {
  transform: scale(0.97);
}

/* Fade + slide animation */
.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.4s ease,
    transform 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(6px);
}
</style>
