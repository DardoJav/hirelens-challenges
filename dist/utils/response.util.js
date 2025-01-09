/**
 * Maneja respuestas exitosas de la API.
 * @param res - El objeto de respuesta de Express.
 * @param data - Los datos que se devuelven al cliente.
 * @param message - Un mensaje opcional para describir la operación exitosa.
 * @param statusCode - Código de estado HTTP, por defecto 200.
 */
export const handleSuccess = (res, data = null, message = 'Operación exitosa', statusCode = 200) => {
    res.status(statusCode).json({
        success: true,
        message,
        data,
    });
};
/**
 * Maneja respuestas de error de la API.
 * @param res - El objeto de respuesta de Express.
 * @param error - Detalles del error.
 * @param message - Un mensaje opcional para describir el error.
 * @param statusCode - Código de estado HTTP, por defecto 500.
 */
export const handleError = (res, error = null, message = 'Ocurrió un error', statusCode = 500) => {
    res.status(statusCode).json({
        success: false,
        message,
        error: error?.message || error,
    });
};
