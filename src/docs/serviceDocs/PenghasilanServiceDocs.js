// =========== GET PENGHASILAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Penghasilan Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               id_penghasilan:
 *                 type: string
 *               jumlah_penghasilan:
 *                 type: string
 *
 */

// =========== CREATE PENGHASILAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Create Penghasilan:
 *       type: object
 *       properties:
 *         jumlah_penghasilan:
 *           type: string
 *     Create Penghasilan Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_penghasilan:
 *               type: string
 *             jumlah_penghasilan:
 *               type: string
 */

// =========== GET PENGHASILAN BY ID ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Penghasilan By Id Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_penghasilan:
 *               type: string
 *             jumlah_penghasilan:
 *               type: string
 *
 */

// =========== UPDATE PENGHASILAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Update Penghasilan:
 *       type: object
 *       properties:
 *         jumlah_penghasilan:
 *           type: string
 *     Update Penghasilan Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_penghasilan:
 *               type: string
 *             jumlah_penghasilan:
 *               type: string
 */

// =========== DELETE PENGHASILAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Delete Penghasilan Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *
 *
 */
