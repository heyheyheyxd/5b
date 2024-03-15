<!-- src/components/LoginForm.svelte -->
<script>
    let username = '';
    let password = '';

    async function handleLogin() {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
            });
            if (response.ok) {
                // Вход успешен, выполните необходимые действия, например, перенаправление на другую страницу
                console.log('Вход выполнен успешно!');
            } else {
                // Ошибка при входе
                console.error('Ошибка при входе:', await response.json());
            }
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
        }
    }
</script>

<template>
    <div>
        <form on:submit|preventDefault={handleLogin}>
            <label for="username">Имя пользователя:</label>
            <input type="text" id="username" bind:value={username} required>
            <label for="password">Пароль:</label>
            <input type="password" id="password" bind:value={password} required>
            <button type="submit">Войти</button>
        </form>
    </div>
</template>

<style>
    /* Стили для формы входа */
</style>
