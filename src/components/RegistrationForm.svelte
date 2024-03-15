<!-- src/components/RegistrationForm.svelte -->
<script>
    let username = '';
    let email = '';
    let password = '';

    async function handleRegistration() {
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });
            if (response.ok) {
                // Регистрация успешна, выполните необходимые действия, например, перенаправление на другую страницу
                console.log('Регистрация успешна!');
            } else {
                // Ошибка при регистрации
                console.error('Ошибка при регистрации:', await response.json());
            }
        } catch (error) {
            console.error('Ошибка при отправке запроса:', error);
        }
    }
</script>

<template>
    <div>
        <form on:submit|preventDefault={handleRegistration}>
            <label for="username">Имя пользователя:</label>
            <input type="text" id="username" bind:value={username} required>
            <label for="email">Email:</label>
            <input type="email" id="email" bind:value={email} required>
            <label for="password">Пароль:</label>
            <input type="password" id="password" bind:value={password} required>
            <button type="submit">Зарегистрироваться</button>
        </form>
    </div>
</template>

<style>
    /* Стили для формы регистрации */
</style>
