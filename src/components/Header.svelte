<!-- src/components/Header.svelte -->
<script>
    import { goto } from '$app/navigation';

    function scrollToAnchor(anchorId) {
        const anchor = document.getElementById(anchorId);
        if (anchor) {
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function handleClick(anchorId) {
        scrollToAnchor(anchorId);
        goto(`#${anchorId}`);
    }
</script>

<template>
    <header>
        <nav>
            <ul>
                <li><button on:click={() => handleClick('home')}>Главная</button></li>
                <li><button on:click={() => handleClick('about')}>О нас</button></li>
                <li><button on:click={() => handleClick('contact')}>Контакты</button></li>
            </ul>
        </nav>
    </header>
</template>

<style>
    header {
        background-color: #333;
        color: #fff;
        padding: 10px 0;
    }

    nav ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
    }

    nav ul li {
        display: inline;
        margin-right: 20px;
    }

    nav ul li button {
        color: #fff;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        font: inherit;
        text-decoration: underline;
    }

    nav ul li button:focus {
        outline: none;
    }
</style>


