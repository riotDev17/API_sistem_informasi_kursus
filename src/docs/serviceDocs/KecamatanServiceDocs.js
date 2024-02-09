// =========== GET KECAMATAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Kecamatan Success:
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
 *               kabupaten:
 *                 type: object
 *                 properties:
 *                   id_kabupaten:
 *                     type: string
 *                   nama_kabupaten:
 *                     type: string
 *               id_kecamatan:
 *                 type: string
 *               nama_kecamatan:
 *                 type: string
 *
 */

// =========== CREATE KECAMATAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Create Kecamatan:
 *       type: object
 *       properties:
 *         kabupaten_ID:
 *           type: string
 *         nama_kecamatan:
 *           type: string
 *     required:
 *       - kabupaten_ID
 *       - nama_kecamatan
 *     Create Kecamatan Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             kabupaten:
 *               type: object
 *               properties:
 *                 id_kabupaten:
 *                   type: string
 *                 nama_kabupaten:
 *                   type: string
 *             id_kecamatan:
 *               type: string
 *             nama_kecamatan:
 *               type: string
 *
 */

// =========== GET KECAMATAN BY ID ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Kecamatan By Id Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             kabupaten:
 *               type: object
 *               properties:
 *                 id_kabupaten:
 *                   type: string
 *                 nama_kabupaten:
 *                   type: string
 *             id_kecamatan:
 *               type: string
 *             nama_kecamatan:
 *               type: string
 *
 */

// =========== UPDATE KECAMATAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Update Kecamatan:
 *       type: object
 *       properties:
 *         kabupaten_ID:
 *           type: string
 *         nama_kecamatan:
 *           type: string
 *     required:
 *       - kabupaten_ID
 *       - nama_kecamatan
 *     Update Kecamatan Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             kabupaten:
 *               type: object
 *               properties:
 *                 id_kabupaten:
 *                   type: string
 *                 nama_kabupaten:
 *                   type: string
 *             id_kecamatan:
 *               type: string
 *             nama_kecamatan:
 *               type: string
 *
 */

// =========== DELETE KECAMATAN ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Delete Kecamatan Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 * 
 */