// =========== GET PENDIDIKAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Pendidikan Success:
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
 *               id_pendidikan:
 *                 type: string
 *               nama_pendidikan:
 *                 type: string
 */

// =========== CREATE PENDIDIKAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Create Pendidikan:
 *       type: object
 *       properties:
 *         nama_pendidikan:
 *           type: string
 *     Create Pendidikan Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_pendidikan:
 *               type: string
 *             nama_pendidikan:
 *               type: string
 *
 */

// =========== GET PENDIDIKAN BY ID ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Pendidikan By Id Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_pendidikan:
 *               type: string
 *             nama_pendidikan:
 *               type: string
 *
 */

// =========== UPDATE PENDIDIKAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Update Pendidikan:
 *       type: object
 *       properties:
 *         nama_pendidikan:
 *           type: string
 *     Update Pendidikan Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_pendidikan:
 *               type: string
 *             nama_pendidikan:
 *               type: string
 */

// =========== DELETE PENDIDIKAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Delete Pendidikan Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *
 *
 */
