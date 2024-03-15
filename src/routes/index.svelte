<!-- src/routes/index.svelte -->
<script>
    import { spring } from 'svelte/motion';
    import { cubicOut } from 'svelte/easing';

    let count = 0;

    function increment() {
        count += 1;
    }

    let y = 0;
    function fly() {
        y += 50;
    }

    // Анимация движения
    $: style = spring({ y, stiffness: 0.1, damping: 0.4, easing: cubicOut });
</script>

<h1 style="transform: translateY({style.y}px); transition: transform 0.4s;">Hello {name}!</h1>
<button on:click={increment}>Click me</button>
<button on:click={fly}>Fly</button>
