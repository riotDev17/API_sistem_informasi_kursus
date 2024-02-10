// =========== GET KURSUS ===========
/**
 * @openapi
 * components:
 *   schemas:
 *     Get Kursus Success:
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
 *               id_kursus:
 *                 type: string
 *               nama_kursus:
 *                 type: string
 *               topik_kursus:
 *                 type: string
 *               jenjang_kursus:
 *                 type: string
 *               pengajar:
 *                 type: object
 *                 properties:
 *                   id_pengajar:
 *                     type: string
 *                   nama_pengajar:
 *                     type: string
 *               deskripsi_kursus:
 *                 type: string
 *
 */
