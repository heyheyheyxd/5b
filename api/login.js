// routes/api/login.js
export function post(req, res) {
    // Получаем данные из запроса
    const { username, password } = req.body;

    // Проводим аутентификацию пользователя (здесь должна быть логика аутентификации)

    // Проверка простая, для примера
    if (username === 'user' && password === 'password') {
        // Возвращаем успешный ответ
        res.status(200).json({ success: true, message: 'Вход выполнен успешно!' });
    } else {
        // Возвращаем ошибку в случае неверных учетных данных
        res.status(401).json({ success: false, message: 'Неверное имя пользователя или пароль' });
    }
}
