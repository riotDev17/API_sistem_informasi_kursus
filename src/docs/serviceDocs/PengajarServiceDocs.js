// =========== GET PENGAJAR ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Pengajar Success:
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
 *               id_pengajar:
 *                 type: string
 *               nama_pengajar:
 *                 type: string
 *               no_telepon_pengajar:
 *                 type: string
 *               gelar_pengajar:
 *                 type: string
 *               keahlian_pengajar:
 *                 type: string
 *               pengalaman_pengajar:
 *                 type: string
 *               biodata_pengajar:
 *                 type: string
 *               foto_pengajar:
 *                 type: string
 *               sertifikat_pengajar:
 *                 type: string
 *
 */

// =========== CREATE PENGAJAR ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Create Pengajar:
 *       type: object
 *       required:
 *         - nama_pengajar
 *         - no_telepon_pengajar
 *         - gelar_pengajar
 *         - keahlian_pengajar
 *         - pengalaman_pengajar
 *         - biodata_pengajar
 *         - foto_pengajar
 *         - sertifikat_pengajar
 *       properties:
 *         nama_pengajar:
 *           type: string
 *         no_telepon_pengajar:
 *           type: string
 *         gelar_pengajar:
 *           type: string
 *         keahlian_pengajar:
 *           type: string
 *         pengalaman_pengajar:
 *           type: string
 *         biodata_pengajar:
 *           type: string
 *         foto_pengajar:
 *           type: file
 *         sertifikat_pengajar:
 *           type: file
 *     Create Pengajar Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_pengajar:
 *               type: string
 *             nama_pengajar:
 *               type: string
 *             no_telepon_pengajar:
 *               type: string
 *             gelar_pengajar:
 *               type: string
 *             keahlian_pengajar:
 *               type: string
 *             pengalaman_pengajar:
 *               type: string
 *             biodata_pengajar:
 *               type: string
 *             foto_pengajar:
 *               type: string
 *             sertifikat_pengajar:
 *               type: string
 *
 *
 */

// =========== GET PENGAJAR BY ID ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Pengajar By Id Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_pengajar:
 *               type: string
 *             nama_pengajar:
 *               type: string
 *             no_telepon_pengajar:
 *               type: string
 *             gelar_pengajar:
 *               type: string
 *             keahlian_pengajar:
 *               type: string
 *             pengalaman_pengajar:
 *               type: string
 *             biodata_pengajar:
 *               type: string
 *             foto_pengajar:
 *               type: string
 *             sertifikat_pengajar:
 *               type: string
 *
 */

// =========== UPDATE PENGAJAR ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Update Pengajar:
 *       type: object
 *       required:
 *         - nama_pengajar
 *         - no_telepon_pengajar
 *         - gelar_pengajar
 *         - keahlian_pengajar
 *         - pengalaman_pengajar
 *         - biodata_pengajar
 *         - foto_pengajar
 *         - sertifikat_pengajar
 *       properties:
 *         nama_pengajar:
 *           type: string
 *         no_telepon_pengajar:
 *           type: string
 *         gelar_pengajar:
 *           type: string
 *         keahlian_pengajar:
 *           type: string
 *         pengalaman_pengajar:
 *           type: string
 *         biodata_pengajar:
 *           type: string
 *         foto_pengajar:
 *           type: file
 *         sertifikat_pengajar:
 *           type: file
 *     Update Pengajar Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *         data:
 *           type: object
 *           properties:
 *             id_pengajar:
 *               type: string
 *             nama_pengajar:
 *               type: string
 *             no_telepon_pengajar:
 *               type: string
 *             gelar_pengajar:
 *               type: string
 *             keahlian_pengajar:
 *               type: string
 *             pengalaman_pengajar:
 *               type: string
 *             biodata_pengajar:
 *               type: string
 *             foto_pengajar:
 *               type: string
 *             sertifikat_pengajar:
 *               type: string
 *
 *
 */

// =========== DELETE PENGAJAR ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Delete Pengajar Success:
 *       type: object
 *       properties:
 *         status:
 *           type: string
 *         message:
 *           type: string
 *
 */
