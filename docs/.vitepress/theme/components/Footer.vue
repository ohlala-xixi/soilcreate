<script setup>
import { openInquiry } from '../utils/inquiry.js'
import { contactEmail, whatsappNumber } from '../data/site.js'
</script>

<template>
  <footer class="sc-footer">
    <div class="sc-footer-grid">
      <div>
        <a href="/" class="sc-footer-brand">Soil<span>Create</span></a>
        <p class="sc-footer-desc">
          Premium engineered solutions for industrial hardware and geotechnical telemetry.
        </p>
      </div>

      <div class="sc-footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/about">About Us</a></li>
          <li><a href="/products/">All Products</a></li>
          <li><a href="/case-study">Case Study</a></li>
        </ul>
      </div>

      <div class="sc-footer-col">
        <h4>Media</h4>
        <ul>
          <li><a href="#" class="sc-media-link">▶ YouTube</a></li>
          <li><a href="#" class="sc-media-link">in LinkedIn</a></li>
        </ul>
      </div>

      <div class="sc-footer-col">
        <h4>Stay Updated</h4>
        <div class="sc-newsletter">
          <form @submit.prevent="openInquiry('Newsletter / Business Update')">
            <input type="email" name="email" placeholder="Your Business Email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <ul class="sc-footer-contact-list">
          <li>Email: {{ contactEmail }}</li>
          <li>WhatsApp: {{ whatsappNumber }}</li>
        </ul>
      </div>
    </div>

    <div class="sc-footer-bottom">
      <div>&copy; 2026 SoilCreate. All Rights Reserved.</div>
      <div class="sc-footer-legal">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Service</a>
      </div>
    </div>
  </footer>
</template>
