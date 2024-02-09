// =========== GET KABUPATEN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Kabupaten Success:
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
 *               provinsi:
 *                 type: object
 *                 properties:
 *                   id_provinsi:
 *                     type: string
 *                   nama_provinsi:
 *                     type: string
 *               id_kabupaten:
 *                 type: string
 *               nama_kabupaten:
 *                 type: string
 *
 *
 */

// =========== CREATE KABUPATEN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Create Kabupaten:
 *       type: object
 *       properties:
 *         provinsi_ID:
 *           type: string
 *         nama_kabupaten:
 *           type: string
 *     Create Kabupaten Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             provinsi:
 *               type: object
 *               properties:
 *                 id_provinsi:
 *                   type: string
 *                 nama_provinsi:
 *                   type: string
 *             id_kabupaten:
 *               type: string
 *             nama_kabupaten:
 *               type: string
 */

// =========== GET KABUPATEN BY ID ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Kabupaten By Id Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             provinsi:
 *               type: object
 *               properties:
 *                 id_provinsi:
 *                   type: string
 *                 nama_provinsi:
 *                   type: string
 *             id_kabupaten:
 *               type: string
 *             nama_kabupaten:
 *               type: string
 *
 */

// =========== UPDATE KABUPATEN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Update Kabupaten:
 *       type: object
 *       properties:
 *         provinsi_ID:
 *           type: string
 *         nama_kabupaten:
 *           type: string
 *     Update Kabupaten Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             provinsi:
 *               type: object
 *               properties:
 *                 id_provinsi:
 *                   type: string
 *                 nama_provinsi:
 *                   type: string
 *             id_kabupaten:
 *               type: string
 *             nama_kabupaten:
 *               type: string
 *
 */

// =========== DELETE KABUPATEN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Delete Kabupaten Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 * 
 */