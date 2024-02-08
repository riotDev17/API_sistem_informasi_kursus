// =========== GET PEKERJAAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Pekerjaan Success:
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
 *               id_pekerjaan:
 *                 type: string
 *               nama_pekerjaan:
 *                 type: string
 */

// =========== CREATE PEKERJAAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Create Pekerjaan:
 *       type: object
 *       properties:
 *         nama_pekerjaan:
 *           type: string
 *     Create Pekerjaan Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_pekerjaan:
 *               type: string
 *             nama_pekerjaan:
 *               type: string
 *
 */

// =========== GET PEKERJAAN BY ID ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Pekerjaan By Id Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_pekerjaan:
 *               type: string
 *             nama_pekerjaan:
 *               type: string
 */

// =========== UPDATE PEKERJAAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Update Pekerjaan:
 *       type: object
 *       properties:
 *         nama_pekerjaan:
 *           type: string
 *     Update Pekerjaan Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_pekerjaan:
 *               type: string
 *             nama_pekerjaan:
 *               type: string
 */

// =========== DELETE PEKERJAAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Delete Pekerjaan Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 * 
 */