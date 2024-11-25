<script setup lang="ts">
import Header from '~/componets/Header.vue';
import Footer from '~/componets/Footer.vue';
</script>

<template>
	<div>
		<Header />
		<slot />
		<Footer />
	</div>
</template>
