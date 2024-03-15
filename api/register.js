// routes/api/register.js
export function post(req, res) {
    // Получаем данные из запроса
    const { username, email, password } = req.body;

    // Проводим регистрацию пользователя (здесь должна быть логика регистрации)

    // Возвращаем успешный ответ
    res.status(200).json({ success: true, message: 'Регистрация успешна!' });
}
