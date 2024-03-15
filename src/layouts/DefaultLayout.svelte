<!-- src/layouts/DefaultLayout.svelte -->
<script>
    import Header from '../components/Header.svelte';
    import Footer from '../components/Footer.svelte';
</script>

<Header />
<main>
    <slot></slot>
</main>
<Footer />

<style>
    /* Стили для макета по умолчанию */
    main {
        padding: 20px;
        background-color: #f2f2f2;
        min-height: calc(100vh - 100px); /* Отнимаем высоту Header и Footer */
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
</style>

