// =========== GET PROVINSI ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Provinsi Success:
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
 *               id_provinsi:
 *                 type: string
 *               nama_provinsi:
 *                 type: string
 *
 *
 */

// =========== CREATE PROVINSI ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Create Provinsi:
 *       type: object
 *       properties:
 *         nama_provinsi:
 *           type: string
 *     Create Provinsi Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_provinsi:
 *               type: string
 *             nama_provinsi:
 *               type: string
 *
 */

// =========== GET PROVINSI BY ID ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Provinsi By Id Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_provinsi:
 *               type: string
 *             nama_provinsi:
 *               type: string
 *
 */

// =========== UPDATE PROVINSI ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Update Provinsi:
 *       type: object
 *       properties:
 *         nama_provinsi:
 *           type: string
 *     Update Provinsi Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_provinsi:
 *               type: string
 *             nama_provinsi:
 *              type: string
 *
 */

// =========== DELETE PROVINSI ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Delete Provinsi Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *
 * 
 */