// =========== GET KELURAHAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Kelurahan Success:
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
 *               kecamatan:
 *                 type: object
 *                 properties:
 *                   id_kecamatan:
 *                     type: string
 *                   nama_kecamatan:
 *                     type: string
 *               id_kelurahan:
 *                 type: string
 *               nama_kelurahan:
 *                 type: string
 *
 *
 */

// =========== CREATE KELURAHAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Create Kelurahan:
 *       type: object
 *       properties:
 *         kecamatan_ID:
 *           type: string
 *         nama_kelurahan:
 *           type: string
 *     required:
 *       - kecamatan_ID
 *       - nama_kelurahan
 *     Create Kelurahan Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             kecamatan:
 *               type: object
 *               properties:
 *                 id_kecamatan:
 *                   type: string
 *                 nama_kecamatan:
 *                   type: string
 *             id_kelurahan:
 *               type: string
 *             nama_kelurahan:
 *               type: string
 *
 */

// =========== GET KELURAHAN BY ID ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Kelurahan By Id Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             kecamatan:
 *               type: object
 *               properties:
 *                 id_kecamatan:
 *                   type: string
 *                 nama_kecamatan:
 *                   type: string
 *             id_kelurahan:
 *               type: string
 *             nama_kelurahan:
 *               type: string
 *
 */

// =========== UPDATE KELURAHAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Update Kelurahan:
 *       type: object
 *       properties:
 *         kecamatan_ID:
 *           type: string
 *         nama_kelurahan:
 *           type: string
 *     required:
 *       - kecamatan_ID
 *       - nama_kelurahan
 *     Create Kelurahan Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             kecamatan:
 *               type: object
 *               properties:
 *                 id_kecamatan:
 *                   type: string
 *                 nama_kecamatan:
 *                   type: string
 *             id_kelurahan:
 *               type: string
 *             nama_kelurahan:
 *               type: string
 *
 */

// =========== DELETE KELURAHAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Delete Kelurahan Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *
 * 
 */
